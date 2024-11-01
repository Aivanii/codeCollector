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

export const QuestionContainer = styled.div`
    border-radius: .2rem;
    padding: .5rem;
    margin-bottom: 1rem;
`;

export const ContainerTitile = styled.h2`
    font-size: var(--smallBigFontSize);
    color: var(--unactiveFontColor);
`;

export const ContainerText = styled.p`
    font-size: var(--standartFontSize);
    color: var(--unactiveFontColor);
`;

export const Hr = styled.div`
    margin: .5rem 0 .5rem 0;
`;