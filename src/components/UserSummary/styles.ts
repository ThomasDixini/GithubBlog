import styled from "styled-components";

export const SectionContainer = styled.section`

background-color: ${props => props.theme['base-profile']};
border-radius: 6px;
padding: 2rem;
box-shadow: 0px 2px 28px rgba(0,0,0,0.2);

display: flex;
align-items: flex-start;
gap: 2rem;

    img {
        border-radius: 8px;
        width: 150px;
        height: 150px;
    }

    div {
        width: 100%;
            h1 {
                color: ${props => props.theme['white']};
            }
            a {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: ${props => props.theme['base-subtitle']};
                text-decoration: none;
                line-height: 1.6;

                svg {
                    color: ${props => props.theme['base-label']};
                }
            }
            span {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;

                a {
                    color: ${props => props.theme['blue']};
                    font-weight: bold;
                }
            }
            footer {
                display: flex;
                align-items: center;
                gap: 2rem;
                
                margin-top: 1rem;
            }
    }

@media(max-width: 600px){
    flex-direction: column;
    align-items: center;
}
`