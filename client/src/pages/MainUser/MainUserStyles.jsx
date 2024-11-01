import styled from "styled-components";

export const Container = styled.div`
    columns: 2 10rem;
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    #ImgHolder{
        
    }
`;

export const Label = styled.label`
    color: var(--unactiveFontColor);
    font-size: var(--standartFontSize);
`;

export const Input = styled.input`
    background: var(--lightLinkBg);
    padding: .2rem;
    border-radius: .2rem;
    margin: .5rem;
    border: none;
    color: var(--unactiveFontColor);
    font-size: var(--standartFontSize);
    &:focus{
        color: var(--activeFontColor);
        outline: none;
    }
`;

export const ImgContainer = styled.div`
    position: relative;
    width: fit-content;
    margin: auto;
    transition: opacity var(--standartDurationTime);
    &:hover{
        &::after{
            opacity: 1;
        }
    }
    &::after{
        cursor: pointer;
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 98%;
        height: 98%;
        border-radius: 50%;
        background-color: #0000006b;
        border: 1px solid white;
        opacity: 0;
        z-index: 5;
        }
`;

export const Img = styled.img`
    width: var(--userAvatarImgSize);
    height: var(--userAvatarImgSize);
    border-radius: 50%;
    object-fit: cover;
`;
