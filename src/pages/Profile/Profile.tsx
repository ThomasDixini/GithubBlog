import { Header } from "../../components/Header/Header"
import { Repositorys } from "../../components/Repositorys/Repositorys";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { UserSummary } from "../../components/UserSummary/UserSummary";


export function Profile(){
    return(
        <>
            <Header />
            <main>
                <UserSummary />
                <SearchForm />

                <Repositorys />
            </main>
        </>
    );
}