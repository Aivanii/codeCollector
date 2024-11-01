import styled from "styled-components";

export const MainContainer = styled.main`
    width: var(--articleActiveWidth);
    margin: auto;
`;

export const Title = styled.h1`
    font-size: var(--bigFontSize);
    color: var(--unactiveFontColor);
    margin-bottom: 1rem;
`;

export const Container = styled.article`

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