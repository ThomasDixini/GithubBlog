import { api } from "../../api/api";
import { Repository } from "../../components/Repository/Repository";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { UserSummary } from "../../components/UserSummary/UserSummary";
import { MainContainer } from "./styles";
import { useEffect, useState } from 'react'
 

export interface Issue {
    id: number;
    number: number;
    title: string;
    body: string;
    created_at: string;
}

export function Profile(){

    const [issues, setIssues] = useState<Issue[]>([])

    async function  loadIssues(query = '') {
        const response = await api.get('/search/issues', {
            params: {
                q: `${query}repo:ThomasDixini/GithubBlog`
            }
        })
        const data =  await response.data
        setIssues(data.items)
    }

    useEffect(() => {
        loadIssues()
    },[])

    console.log(issues.length)

    return(
        <>
            <MainContainer>
                <UserSummary />
                <SearchForm loadIssues={loadIssues} issuesLength={issues.length}/>
                <section className="repositorySection">
                    {issues.map(issue => {
                        console.log(issue)
                        return(
                                <Repository key={issue.id} issue={issue}/>
                        );
                    })}
                </section>
            </MainContainer>
        </>
    );
}