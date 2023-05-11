import { GithubLogo, Buildings, Users, ArrowSquareOut } from "phosphor-react";
import { SectionContainer } from "./styles";

export function UserSummary(){
    return(
        <SectionContainer>
            <img src="https://github.com/ThomasDixini.png" alt="" />
            <div>
                <span>
                    <h1>Thomas dixini</h1>
                    <a href="#"> 
                        Github 
                        <ArrowSquareOut size={20} color="#3294f8" weight="bold"/>
                    </a>
                </span>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias assumenda ab illum consectetur 
                    dignissimos accusamus ea quis fugiat beatae est 
                    voluptas vero cumque, dolore voluptatum facilis totam nihil consequuntur explicabo! </p>
                <footer>
                    <a href="#">
                        <GithubLogo size={24}/>
                        thomasdixini
                    </a>
                    <a href="#"> 
                        <Buildings size={24}/>
                        instagram 
                    </a>
                    <a href="#"> 
                        <Users size={24}/>
                        facebook 
                    </a>
                </footer>
            </div>
        </SectionContainer>
    );
}