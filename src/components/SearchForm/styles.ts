import styled from "styled-components";

export const FormContainer = styled.form`

margin-top: 4rem;
div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.125rem;
    color: ${props => props.theme['base-subtitle']};
    span {
        color: ${props => props.theme['base-span']};
        font-size: 0.875rem;
    }
}
input {
    width: 100%;
    background-color: ${props => props.theme['base-input']};
    border: 0;
    border: 1px solid ${props => props.theme['base-border']};
    border-radius: 6px;
    padding: 1rem;
    margin-top: 0.8rem;

    &::placeholder {
        color: ${props => props.theme['base-label']};
        font-size: 1.2rem;
    }
}
`