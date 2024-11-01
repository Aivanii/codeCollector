import styled from "styled-components";

export const MainContainer = styled.main`
    width: var(--articleActiveWidth);
    margin: auto;
`;
export const Link = styled.a`
    color: var(--unactiveFontColor);
    font-size: var(--standartFontSize);
    transition: color var(--standartDurationTime);
    cursor: pointer;
    text-decoration: none;
    margin: 0 .25rem 0 .25rem;
    &:hover{
        color: var(--linkActiveColor);
    }
    `;
export const Title = styled.h1`
    font-size: var(--bigFontSize);
    color: var(--unactiveFontColor);
    margin-bottom: 1rem;
`;

export const Container = styled.div`

`;

export const Text = styled.p`
    font-size: var(--standartFontSize);
    color: var(--unactiveFontColor);
`;

export const ContainerTitle = styled.h2`
    margin-bottom: 1rem;
    font-size: var(--smallBigFontSize);
    color: var(--unactiveFontColor);
    &:not(:first-child) {
        margin-top: 1rem;
    }
`;