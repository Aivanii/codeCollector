import styled from "styled-components";

export const Circle = styled.div`
    width: 400px;
    height: 200px;
    background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
    position: absolute;
    top: 100%;
    left: 100%;
    transform: translate(-400px, -200px);
    filter: blur(5.5rem);
    z-index: -1;
`;
export const Circle2 = styled(Circle)`
    filter: blur(15rem);
`;