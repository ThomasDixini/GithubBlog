import { Repository } from "../../components/Repository/Repository";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { UserSummary } from "../../components/UserSummary/UserSummary";
import { MainContainer } from "./styles";


export function Profile(){
    return(
        <>
            <MainContainer>
                <UserSummary />
                <SearchForm />
                <section className="repositorySection">
                    <Repository />
                    <Repository />
                    <Repository />
                    <Repository />
                </section>
            </MainContainer>
        </>
    );
}