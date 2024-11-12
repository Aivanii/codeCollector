import styled from "styled-components";

export const Container = styled.div`
    margin-top: 1rem;
    width: 100%;
    padding-right: 1rem;
    text-align: center;
`;
export const Btn = styled.a`
    border-radius: .2rem;
    border: none;
    padding: .2rem;
    font-size: var(--standartFontSize);
    color: var(--unactiveFontColor);
    width: 100%;
    transition: color var(--standartDurationTime);
    background: #ffffff22;
    text-align: center;
    &:hover{
        color: var(--activeFontColor);
    }
    cursor: pointer;
`;

export const FilterSpan = styled.span`
    text-align: left;
    padding: .5rem;
`;

export const FilterContainer = styled.div`

`;

export const Ul = styled.ul`
    margin: .2rem;
    display: flex;
`;

export const Li = styled.li`
    line-height: 1.55;
    list-style-type: none;
`;

export const Link = styled(Btn)`
    outline: none;
    text-decoration: none;
    background: none;
`;
export const BtnContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    border: var(--standartBorder);
    border-radius: .2rem;
    margin-bottom: 1rem;
`;