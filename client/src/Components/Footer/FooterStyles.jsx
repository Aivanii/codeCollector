import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    bottom: 0;
    margin-top: 5rem;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    border-top: var(--FooterBorderColor);
`;

export const Span = styled.span`
    color: var(--unactiveFontColor);
    font-size: var(--standartFontSize);
`;