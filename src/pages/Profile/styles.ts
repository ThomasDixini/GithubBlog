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
    grid-template-columns: repeat(2, 500px);
    justify-content: center;
    gap: 2rem;
}
`