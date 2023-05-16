import { GithubLogo, Buildings, Users, ArrowSquareOut } from "phosphor-react";
import { SectionContainer } from "./styles";
import { api } from "../../api/api";
import { memo, useEffect, useState } from "react";

interface UserDataType {
    avatar_url: string;
    bio: string;
    html_url: string;
    followers: number;
    login: string;
    name: string;
    company: string;
}

function UserSummaryComponent(){

    const [ user, setUser ] = useState<UserDataType>({} as UserDataType);

    async function  loadUserData() {
        const response = await api.get('/users/ThomasDixini')
        const { avatar_url, bio, html_url, followers, login, name, company  } = await response.data;

        setUser({
            avatar_url,
            bio,
            html_url,
            followers,
            login,
            name,
            company
        })
    }

    useEffect(() => {
        loadUserData();
    }, [])
    
    return(
        <SectionContainer>
            <img src={user.avatar_url} alt="" />
            <div>
                <span>
                    <h1>{user.name}</h1>
                    <a href={user.html_url} target="_blank"> 
                        Github 
                        <ArrowSquareOut size={20} color="#3294f8" weight="bold"/>
                    </a>
                </span>
                <p> {user.bio} </p>
                <footer>
                    <a href={user.html_url} >
                        <GithubLogo size={24}/>
                        {user.login}
                    </a>
                    { user.company && (
                        <a href="">
                            <Buildings size={24} />
                            {user.company}
                        </a>
                    )}
                    <a href="#"> 
                        <Users size={24}/>
                        {user.followers} Seguidores
                    </a>
                </footer>
            </div>
        </SectionContainer>
    );
}

export const UserSummary = memo(UserSummaryComponent);