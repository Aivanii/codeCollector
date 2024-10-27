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
    flex: 0 0 auto;
`;

export const Span = styled.span`
    color: var(--unactiveFontColor);
    font-size: var(--standartFontSize);
`;

export const Link = styled.a`
    margin: .2rem;
    cursor: pointer;
    color: #ffffffca;
    text-decoration: none;
    transition: color var(--standartDurationTime);
    font-size: var(--standartFontSize);
    &:hover{
        color: white;
    }
`;