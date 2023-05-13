import { useNavigate } from "react-router-dom";
import { Issue } from "../../pages/Profile/Profile";
import { ArticleContainer } from "./styled";

interface RepositoryProps {
    issue: Issue
}

export function Repository({issue}: RepositoryProps){

    const navigate = useNavigate()

    return(
        <ArticleContainer onClick={() => navigate(`/repositorie/${issue.number}`)}>
            <header>
                <strong> {issue.title} </strong>
                <span> {issue.created_at} </span>
            </header>
            <p>
                {issue.body}
            </p>
        </ArticleContainer>
    );
} 