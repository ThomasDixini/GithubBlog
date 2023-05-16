import styled from "styled-components";

export const ArticleContainer = styled.article`

max-height: 16.25rem;
background-color: ${props => props.theme['base-post']};
padding: 2rem;
position: relative;
border-radius: 8px;
transition: transform 0.3s;
transform: scale(1);
border: 2px solid transparent;
cursor: pointer;

&:hover {
    transform: scale(1.1);
    border: 2px solid ${props => props.theme['base-label']};
}

header {
    display: flex;
    gap: 1rem;

    strong {
        color: ${props => props.theme['base-title']};
        
    }
    span {
        font-size: 81%;
        ${props => props.theme['base-span']};
        white-space: nowrap;
    }
}
p {
    
    color: ${props => props.theme['base-text']};
    margin-top: 1rem;
    font-size:  87.5%;
    display: -webkit-box;
    -webkit-line-clamp: 5 !important;
    -webkit-box-orient: vertical !important;
    overflow: hidden;
    text-overflow: ellipsis;
}

`