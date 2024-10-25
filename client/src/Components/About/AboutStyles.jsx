import styled from "styled-components";

export const Container = styled.div`
    width: var(--articleActiveWidth);
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: .5rem;
`;

export const Article = styled.article`

`;

export const Text = styled.p`
    color: var(--unactiveFontColor);
    font-size: var(--smallBigFontSize);
`;

export const Title = styled.h1`
    color: var(--unactiveFontColor);
    font-size: var(--bigFontSize);
`;

export const Img = styled.img`
    border-radius: 50%;
    width: var(--DWSLogoSize);
    height: var(--DWSLogoSize);
    object-fit: cover;
    float: right;
`;