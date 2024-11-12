import styled from "styled-components";

export const Container = styled.div`
    columns: 2 10rem;
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
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
    
`;

export const Img = styled.img`
    width: var(--userAvatarImgSize);
    height: var(--userAvatarImgSize);
    border-radius: 50%;
    object-fit: cover;
`;

export const BtnSendImg = styled.input`
    position: absolute;
    width: var(--userAvatarImgSize);
    height: var(--userAvatarImgSize);
    border-radius: 50%;
    z-index: 2;
    background: #0000007d;
    left: 0;
    opacity: 0;
    border: var(--standartBorder);
    cursor: pointer;
    transition: opacity var(--standartDurationTime);
    &:hover{
        opacity: 1;
    }
    &[type="file"]::-webkit-file-upload-button {
        visibility: hidden;
    }
`;

export const Btn = styled.button`
    background: none;
    border: var(--standartBorder);
    border-radius: .2rem;
    padding: .2rem;
    font-size: var(--standartFontSize);
    margin: .5rem;
    color: var(--unactiveFontColor);
    transition: color var(--standartDurationTime);
    &:hover{
        color: var(--activeFontColor);
    }
    cursor: pointer;
`;