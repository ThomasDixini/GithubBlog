import styled from "styled-components";

export const ArticleContainer = styled.article`

background-color: ${props => props.theme['base-post']};
padding: 2rem;
position: relative;
border-radius: 8px;
transition: transform 0.3s;
overflow: hidden;
transform: scale(1);
border: 2px solid transparent;
cursor: pointer;

&:hover {
    transform: scale(1.1);
    border: 2px solid ${props => props.theme['base-label']};
}

header {
    display: flex;
    justify-content: space-between;

    strong {
        color: ${props => props.theme['base-title']}
    }
    span {
        font-size: 81%;
        width: 60px;
        ${props => props.theme['base-span']}
    }
}
p {
    color: ${props => props.theme['base-text']};
    margin-top: 1rem;
    font-size:  87.5%;
}

`