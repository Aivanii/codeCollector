import styled from "styled-components";

export const Circle = styled.div`
    width: 400px;
    height: 200px;
    background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
    position: fixed;
    top: 100%;
    left: 100%;
    transform: translate(-400px, -200px);
    filter: blur(5.5rem);
    transform: translate(-400px, -200px);
    filter: blur(5.5rem);
    z-index: -1;
    animation: move var(--superLongDurationTime) infinite;
    @keyframes move {
    0% {
        left: 100%;
        top: 100%;
        filter: blur(5.5rem);
    }
    50% {
        left: 85%; 
        top: 95%;
        filter: blur(3.5rem);
    }
    100% {
        
        filter: blur(5.5rem);
        left: 100%;
        top: 100%;
    }
}
`;
