import styled from "styled-components";

const styles = getComputedStyle(document.documentElement);
const smallFontSize = styles.getPropertyValue('--smallFontSize');
const bigFontSize = styles.getPropertyValue('--bigFontSize');

export const TopContainer = styled.div`
    margin: auto;
    width: clamp(160px, 50vw, 1280px);
`;

export const FlexContainer = styled.div`
display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TitleText = styled.h1`
    color: white;
    font-size: ${bigFontSize};
`;

export const Span = styled.span`
    color: #ffffffca;
    font-size: ${smallFontSize};
`;
export const Ul = styled.ul`
    display: flex;
`;
export const Li = styled.li`
    list-style-type: none;
    &:not(:last-child)::after{
        content: ">";
        color: white;
        margin: 0 9px 0 7px;
        display: inline-block;
        font-size: ${smallFontSize};
    }
`;

export const Link = styled.a`
    color: #84a0ef;
    transition: color .2s;
    cursor: pointer;
    text-decoration: none;
    font-size: ${smallFontSize};
    &:hover{
        color: white;
    }
    
`;