import { useParams } from 'react-router-dom'
import { ContentSection, IssueSection, MainContainer } from './styles';
import { ArrowLeft, ArrowSquareOut, Calendar, ChatCircle, GithubLogo } from 'phosphor-react';

export function Repositorie(){
    const { repo } = useParams()
    return (
        <>
            <MainContainer>
                <IssueSection>
                    <header>
                        <a href="/">
                            <ArrowLeft size={20}/>
                             Voltar 
                        </a>
                        <a href="#"> 
                            VER NO GITHUB 
                            <ArrowSquareOut size={20}/>
                        </a>
                    </header>
                    <strong> JavaScript data types and data structures </strong>
                    <footer>
                        <a href="#"> <GithubLogo size={24}/> thomasdixini </a>
                        <a href="#"> <Calendar size={24}/> Há 1 dia</a>
                        <a href="#"> <ChatCircle size={24} weight="fill"/> 5 comentários</a>
                    </footer>
                </IssueSection>
                <ContentSection>
                    <dl>
                        <dt> Dynamic Js </dt>
                        <dd> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quo officiis rerum aliquid iste ex dolores veritatis a
                            lias quod nihil repellat quaerat quia, minus consectetur! 
                            Numquam saepe quaerat ipsum quam modi!
                        </dd>
                    </dl>
                    <pre>
                        asfas
                    </pre>
                </ContentSection>  
            </MainContainer>
        </>
    );
}