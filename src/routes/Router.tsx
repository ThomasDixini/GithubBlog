import { Routes, Route } from "react-router-dom";
import { Profile } from "../pages/Profile/Profile";
import { Repositorie } from "../pages/Repositorie/Repositorie";
import { DefaultLayout } from "../layouts/DefaultLayout";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={ <DefaultLayout /> }>
                <Route path="/" element={ <Profile /> }/>
                <Route path="/repositorie/:repo" element={ <Repositorie /> }/>
            </Route>
        </Routes>
    );
}