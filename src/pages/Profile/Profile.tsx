import { Header } from "../../components/Header/Header"
import { Repositorys } from "../../components/Repositorys/Repositorys";
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

                <Repositorys />
            </MainContainer>
        </>
    );
}