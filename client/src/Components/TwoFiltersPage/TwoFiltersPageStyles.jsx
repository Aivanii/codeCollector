import styled from "styled-components";

export const Container = styled.div`
    width: var(--articleActiveWidth);
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Span = styled.span`
    color: var(--unactiveFontColor);
    font-size: var(--bigFontSize);
`;
export const Link = styled.a`
    color: var(--unactiveFontColor);
    transition: color var(--standartDurationTime);
    text-decoration: none;
    border-radius: .2rem;
    border: var(--standartBorder);
    padding: .5rem;
    width: 100%;
    margin-bottom: 1rem;
    background: var(--lightLinkBg);
    text-align: center;
    backdrop-filter: var(--leftMenuBgBlur);
    &:hover{
        color: var(--linkActiveColor);
    }
`;