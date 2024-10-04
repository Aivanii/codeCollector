import styled from "styled-components";

export const FindBar = styled.input`
    width: clamp(30rem, 45vw, 50rem);
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
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
    
`;