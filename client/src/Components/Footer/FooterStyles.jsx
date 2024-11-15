import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
export const FooterContainer = styled.footer`
    bottom: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: space-around;
    border-top: var(--FooterBorderColor);
    align-content: flex-start;
    align-items: baseline;
    backdrop-filter: var(--standartBgBlur);
    align-content: flex-start;
    align-items: baseline;
    backdrop-filter: var(--standartBgBlur);
    @media (max-width: 570px) 
    {
        flex-direction: column;
        text-align: center;
        align-items: stretch;
        align-content: normal;
        gap: 1rem;
    }
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
