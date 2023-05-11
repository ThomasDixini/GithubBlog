import { Header } from "../../components/Header/Header"
import { Repository } from "../../components/Repository/Repository";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { UserSummary } from "../../components/UserSummary/UserSummary";
import { MainContainer } from "./styles";


export function Profile(){
    return(
        <>
            <Header />
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