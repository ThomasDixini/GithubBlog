import { Issue } from "../../pages/Profile/Profile";
import { ArticleContainer } from "./styled";

interface RepositoryProps {
    issue: Issue
}

export function Repository({issue}: RepositoryProps){
    return(
        <ArticleContainer>
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