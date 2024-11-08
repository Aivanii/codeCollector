import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
export const FooterContainer = styled.footer`
    width: 100vw;
    position: fixed;
    bottom: 0;
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-top: var(--FooterBorderColor);
    align-content: flex-start;
    align-items: baseline;
    backdrop-filter: var(--standartBgBlur);
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
export const Hr = styled.div`
    height: 6rem;
    border-left: 1px solid #ffffffca;
    padding: 2px;
`;

export const HorizontalHR = styled.div`
    width: 80%;
    margin: auto;

`;