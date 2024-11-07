import styled from "styled-components";

export const EmployeeContainer = styled.div`
   min-width: 100%;
   box-sizing: border-box;
   padding: .5rem;
`;

export const Img = styled.img`
    width: var(--userAvatarImgSize);
    height: var(--userAvatarImgSize);
    object-fit: cover;
    border-radius: 50%;
    float: right;
    border: var(--standartBorder);
`;

export const Ul = styled.ul`
    margin-left: 2rem;
    margin-bottom: 1rem;
`;
export const Button = styled.button`
    background: none;
    font-size: var(--bigFontSize);
    color: var(--unactiveFontColor);
    border: none;
    cursor: pointer;
    border: var(--standartBorder);
    border-radius: .2rem;
    padding: .2rem;
    width: 2rem;
    height: 4rem;
    &:hover{
        color: var(--activeFontColor);
    }
`;
export const ButtonLeft = styled(Button)`
    position: fixed;
    top: 50%;
    left: 3vw;
    transform: translate(0, -50%);
`;
export const ButtonRight = styled(Button)`
    position: fixed;
    top: 50%;
    right: 3vw;
    transform: translate(0, -50%);
`;


export const Container = styled.div`
    position: relative;
    width: 100%;
    margin: auto;
    overflow: hidden;
    border: var(--standartBorder);
    
   border-radius: .2rem;
`;

export const CarouselInner = styled.div`
    display: flex;
    transition: transform var(--longDurationTime) ease;
    
`;