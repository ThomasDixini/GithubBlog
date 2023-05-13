import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import { ContentSection, IssueSection, MainContainer } from './styles';
import { ArrowLeft, ArrowSquareOut, Calendar, ChatCircle, GithubLogo } from 'phosphor-react';
import { api } from '../../api/api';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface Post {
    title: string;
    login: string;
    body: string;
    comments: number;
    created_at: string;
    html_url: string;
}

export function Repositorie(){
    const { repo } = useParams()
    const [post, setPost] = useState<Post>({} as Post)
    
    async function loadIssuePost() {
        const response = await api.get(`repos/ThomasDixini/GithubBlog/issues/${repo}`)
        const { title, body, comments, created_at, user, html_url} = await response.data
        const login = user.login
        console.log(response.data)
        const postDatas = {
            title, 
            body, 
            comments, 
            created_at, 
            login,
            html_url
        }

        setPost(postDatas)
    }

    useEffect(() => {
        loadIssuePost()
    }, [])

    const markdown = post.body

    return (
        <>
            <MainContainer>
                <IssueSection>
                    <header>
                        <a href="/">
                            <ArrowLeft size={20}/>
                             Voltar 
                        </a>
                        <a href={post.html_url} target="_blank"> 
                            VER NO GITHUB 
                            <ArrowSquareOut size={20}/>
                        </a>
                    </header>
                    <strong> {post.title} </strong>
                    <footer>
                        <a href="#"> <GithubLogo size={24}/> {post.login} </a>
                        <a href="#"> <Calendar size={24}/> {
                            post.created_at && formatDistance(new Date(post.created_at),new Date(), {
                                addSuffix: true,
                                locale: ptBR
                            })
                        } </a>
                        <a href="#"> <ChatCircle size={24} weight="fill"/> {post.comments} comentários</a>
                    </footer>
                </IssueSection>
                <ContentSection>
                        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}/>
                </ContentSection>  
            </MainContainer>
        </>
    );
}