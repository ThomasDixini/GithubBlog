import { useForm } from "react-hook-form";
import { FormContainer } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const SearchFormSchema = z.object({
    query: z.string()
})

type SearchIssueType = z.infer<typeof SearchFormSchema>

interface SearchFormProps {
    loadIssues: (query?: string) => Promise<void>;
    issuesLength?: number;
}

export function SearchForm({loadIssues, issuesLength}: SearchFormProps){
    
    const { register, handleSubmit } = useForm<SearchIssueType>({
        resolver: zodResolver(SearchFormSchema),
        defaultValues: {
            query: ''
        }
    });

    function handleSearchIssues(data: SearchIssueType){
        loadIssues(data.query)
    }

    return(
        <FormContainer action="" onSubmit={handleSubmit(handleSearchIssues)}>
            <div>
                <label htmlFor="searchForm"> Publicações </label>
                <span> {issuesLength} publicações </span>
            </div>
            <input 
                type="text" 
                placeholder="Buscar conteúdo"
                {...register("query")}
            />
        </FormContainer>
    );
}