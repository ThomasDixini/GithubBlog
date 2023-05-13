import { useNavigate } from "react-router-dom";
import { Issue } from "../../pages/Profile/Profile";
import { ArticleContainer } from "./styled";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

interface RepositoryProps {
    issue: Issue
}

export function Repository({issue}: RepositoryProps){

    const navigate = useNavigate()

    return(
        <ArticleContainer onClick={() => navigate(`/repositorie/${issue.number}`)}>
            <header>
                <strong> {issue.title} </strong>
                <span> {issue.created_at && formatDistance(new Date(issue.created_at),new Date(), {
                                                                        addSuffix: true,
                                                                        locale: ptBR
                                                                    })} 
                </span>
            </header>
            <p>
                {issue.body}
            </p>
        </ArticleContainer>
    );
} 