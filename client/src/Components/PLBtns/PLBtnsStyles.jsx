import styled from "styled-components";

export const Container = styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const Button = styled.button`
    height: 3rem;
    width: 100%;
    font-size: var(--bigFontSize);
    background: none;
    border-radius: .2rem;
    border: 1px solid white;
    color: #ffffffca;
    cursor: pointer;
    transition: color .2s;
    &:hover{
        color: white;
    }
    &:active ~ .ListContainer {
        line-height: 1.2;
        color: currentColor;
    }
`;

export const ListContainer = styled.ul`
  position: relative;
  display: grid;
  margin-block-start: 0.5lh;
  background-color: none;
  height: 0;
  overflow: hidden;
  list-style-type: none;
  transition: height .6s, line-height .5s, opacity .5s;
  margin-bottom: .4rem;
`;

export const ListElem = styled.li`
    overflow: hidden;
    color: #ffffffca;
    transition: color .4s;
    margin: .2rem;
    &:hover{
        color: white;
    }
`;

export const ListElemLink = styled.a`
    display: block;
    width: 100%;
    text-align: center;
    padding: .2rem;
    background: #ffffff22;
    text-decoration: none;
    border-radius: .2rem;
    color: #ffffffca;
    transition: color .4s;
    &:hover{
        color: white;
    }
`;
const Svg = styled.svg`
    float: right;
    border-radius: 50%;
    padding: .2rem;
    margin: 0.5rem 0.5rem 0 0;
`;
export const DownBtn = () => (
    <Svg width="20px" height="20px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs></defs>
        <g id="Icons with numbers" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Group" transform="translate(-336.000000, -336.000000)" fill="#ffffffca">
                <path d="M344,339 L352,349 L336,349 L344,339 Z M344,339" id="Triangle 185 copy" transform="translate(344.000000, 344.000000) scale(1, -1) translate(-344.000000, -344.000000) "></path>
            </g>
        </g>
    </Svg>
);