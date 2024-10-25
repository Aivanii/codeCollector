import styled from "styled-components";

export const Main = styled.main`
    border: var(--standartBorder);
    width: var(--userContainerWidth);
    padding: 1rem;
    margin: auto;
    border-radius: .2rem;
    gap: 1rem;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    align-items: stretch;
    @media (max-width: 720px) {
        flex-direction: column;; /* Изменяем отступы для горизонтального расположения */
    }
`;
export const LeftDiv = styled.div`
    width: var(--userLeftContainerWidth);
    @media (max-width: 720px) {
        width: 100%; /* Изменяем отступы для горизонтального расположения */
    }
`;
export const RightDiv = styled.div`
    border: var(--standartBorder);
    border-radius: .2rem;
    width: 100%;
    padding: .7rem;
`;
export const LeftDivUl = styled.ul`
    border-radius: .2rem;
    border: var(--standartBorder);
    list-style-type: none;
    height: 100%;
`;
export const Li = styled.li`
    margin: .5rem;
    margin-top: 1rem;
`;
export const Link = styled.a`
    color: var(--unactiveFontColor);
    font-size: var(--standartFontSize);
    transition: color var(--standartDurationTime);
    cursor: pointer;
    text-decoration: none;
    &:hover{
        color: var(--activeFontColor);
    }
`;
export const TitleElem = styled.h1`
    color: var(--activeFontColor);
    font-size: var(--smallBigFontSize);
`;