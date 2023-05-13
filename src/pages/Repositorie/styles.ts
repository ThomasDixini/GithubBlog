import styled from "styled-components";


export const MainContainer = styled.main`

max-width: 1200px;
width: 100%;
margin: 0 auto;
margin-top: -5rem;
`

export const IssueSection = styled.section`

background-color: ${props => props.theme['base-profile']};
border-radius: 6px;
padding: 2rem;
box-shadow: 0px 2px 28px rgba(0,0,0,0.2);
margin: 0 auto;
a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    line-height: 2;
    color: ${props => props.theme['base-span']};

    &:not( footer > a){
        color: ${props => props.theme['blue']};
        font-weight: bold;
    }
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

strong {
    font-size: 1.5rem;
    color: ${props => props.theme['white']};
}

footer {
    display: flex;
    gap: 1.5rem;
    }

@media(max-width: 1200px){
    max-width: 800px ;
}
@media(max-width: 800px){
    max-width: 600px ;
}
@media(max-width: 600px){
    max-width: 350px;
    &:first-child {
        footer {
            margin-top: 2rem;
            flex-direction: column;
            align-items: center;
            gap: 0.2rem;
        }
    }
}
`

export const ContentSection = styled.section`
width: 100%;
color: ${props => props.theme['base-text']};
line-height: 1.6;
margin-top: 2rem;

`

