import styled from "styled-components";

export const MainContainer = styled.main`

max-width: 1200px;
width: 100%;
margin: 0 auto;
margin-top: -5rem;
margin-bottom: 5rem;

.repositorySection {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(2, 31rem);
    justify-content: center;
    gap: 2rem;
}

@media(max-width: 1200px){
    max-width: 800px;
}
@media(max-width: 800px){
    max-width: 600px;
    .repositorySection {
        display: flex;
        flex-direction: column;
    }
}
@media(max-width: 600px){
    max-width: 350px;
}
`

