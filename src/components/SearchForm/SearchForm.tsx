import { FormContainer } from "./styles";

export function SearchForm(){
    return(
        <FormContainer action="">
            <div>
                <label htmlFor="searchForm"> Publicações </label>
                <span> 6 publicações </span>
            </div>
            <input type="text" placeholder="Buscar conteúdo"/>
        </FormContainer>
    );
}