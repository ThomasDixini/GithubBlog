import styled from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
align-items: center;
justify-content: center;
position: relative;
overflow: hidden;
width: 100%;
height: 300px;
background-color: #0B1B2B;

    @keyframes movingEffects {
        from {
            transform: translate(-200px);
        } to {
            transform: translate(100vw);
        }
    }

    .rect {
        position: absolute;
        bottom: 1rem;
        width: 800px;
        height: 50px;
        background: #14589C;
        filter: blur(90px)
    }
    .circle1 {
        position: absolute;
        left: 0rem;
        top: -5rem;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background-color: #14589C;
        filter: blur(120px);
    }
    .circle2 {
        position: absolute;
        right: 0rem;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background-color: #14589C;
        filter: blur(130px);
    }
    .effects img.effect1 {
        position: absolute;
        left: 0;
        top: 20%;
        animation: movingEffects 3s linear infinite;
    }
    .effects img.effect2 {
        position: absolute;
        left: 0;
        top: 60%;
        animation: movingEffects 1s linear reverse infinite ;
    }
`