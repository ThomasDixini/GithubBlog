import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ContentSection, IssueSection, MainContainer } from './styles';
import { ArrowLeft, ArrowSquareOut, Calendar, ChatCircle, GithubLogo } from 'phosphor-react';
import { api } from '../../api/api';

interface Post {
    title: string;
    login: string;
    body: string;
    comments: number;
    created_at: string;
}

export function Repositorie(){
    const { repo } = useParams()
    const [post, setPost] = useState<Post>({} as Post)
    
    async function loadIssuePost() {
        const response = await api.get(`repos/ThomasDixini/GithubBlog/issues/${repo}`)
        const { title, body, comments, created_at, user} = await response.data
        const login = user.login

        const postDatas = {
            title, 
            body, 
            comments, 
            created_at, 
            login
        }

        setPost(postDatas)
    }

    useEffect(() => {
        loadIssuePost()
    }, [])

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
                    <strong> {post.title} </strong>
                    <footer>
                        <a href="#"> <GithubLogo size={24}/> {post.login} </a>
                        <a href="#"> <Calendar size={24}/> {post.created_at} </a>
                        <a href="#"> <ChatCircle size={24} weight="fill"/> {post.comments} comentários</a>
                    </footer>
                </IssueSection>
                <ContentSection>
                    <p>
                        {post.body}
                    </p>
                </ContentSection>  
            </MainContainer>
        </>
    );
}