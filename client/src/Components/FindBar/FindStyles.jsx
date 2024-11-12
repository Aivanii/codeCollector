import styled from "styled-components";

export const FindBar = styled.input`
    width: clamp(5rem, 75%, 38rem);
    height: 3rem;
    border-radius: .2rem;
    border: none;
    outline: none;
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 1rem;
    background: none;
    color: white;
    border: 1px solid white;
    &::placeholder{
        color: #ffffffca;
        font-size: 1rem;
    };
`;

export const FindBarContainer = styled.form`
    position: absolute;
    display: flex;
    left: 0;
    top: 35%;
    transform: translate(0, -50%);
    width: 100%;
    text-align: center;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const FindIcon = styled.img`
    width: 32px;
    height: 32px;
    margin-left: -2.5rem;
    cursor: pointer;
`;