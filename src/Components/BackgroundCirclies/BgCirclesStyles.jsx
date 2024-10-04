import styled from "styled-components";

export const Circle = styled.div`
    width: 200px;
    height: 200px;
    background-color: greenyellow;
    border-radius: 50%;
    position: absolute;
    top: 100%;
    left: 100%;
    transform: translate(-200px, -200px);
    filter: blur(7rem);
    z-index: -1;
`;
export const Circle2 = styled(Circle)`
    filter: blur(15rem);
`;