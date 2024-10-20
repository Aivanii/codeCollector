import styled from "styled-components";

const styles = getComputedStyle(document.documentElement);
const unactiveFontColor = styles.getPropertyValue('--unactiveFontColor');
const codeBgColor = styles.getPropertyValue('--codeBgColor');
const smallBigFontSize = styles.getPropertyValue('--smallBigFontSize');
const standartDurationTime = styles.getPropertyValue('--standartDurationTime');
const articleActiveWidth = styles.getPropertyValue('--articleActiveWidth');
const standartFontSize = styles.getPropertyValue('--standartFontSize');
const smallFontSize = styles.getPropertyValue('--smallFontSize');
const linkUnactiveColor = styles.getPropertyValue('--linkUnactiveColor');
const linkActiveColor = styles.getPropertyValue('--linkActiveColor');
const codeFontColor  = styles.getPropertyValue('--codeFontColor');

export const Container = styled.div`
    width: ${articleActiveWidth};
    margin: auto;
`;

export const ArticleContainer = styled.article`
`;

export const Text = styled.p`
    margin-top: .5rem;
    color: ${unactiveFontColor};
    font-size: ${standartFontSize};
`;

export const ThemeTitle = styled.h2`
    margin-top: 1rem;
    color: ${unactiveFontColor};
    font-size: ${smallBigFontSize};
`;

export const Link = styled.a`
    color: ${linkUnactiveColor};
    font-size: ${standartFontSize};
    transition: color ${standartDurationTime};
    cursor: pointer;
    text-decoration: none;
    margin: 0 .25rem 0 .25rem;
    &:hover{
        color: ${linkActiveColor};
    }
`;

export const CodeText = styled.code`
    margin: 0 .25rem 0 .25rem;
    background: ${codeBgColor};
    border-radius: .2rem;
    padding: 0 .2rem 0 .2rem;
    color: ${codeFontColor};
    font-size: ${standartFontSize};
`;

export const CodeContainer = styled.div`
    overflow: auto;
    width: 100%;
    background: ${codeBgColor};
    border-radius: .2rem;
    display: flex;
    margin-top: 1rem;
`;

export const SpanCodeboxLine = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: .1rem solid #ffffff47;
    height: 100%;
    backdrop-filter: blur(5rem);
    padding: .1rem .4rem .4rem .4rem;
`;

export const SpanLine = styled.span`
    color: ${unactiveFontColor};
    font-size: ${smallFontSize};
    line-height: 1.416;
`;
export const CodeboxCode = styled.pre`
    line-height: 1.2;
    padding: 0 0 0 .4rem;
    color: ${unactiveFontColor};
    font-size: ${standartFontSize};
`;