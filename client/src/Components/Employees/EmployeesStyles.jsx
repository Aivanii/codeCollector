import styled from "styled-components";

export const EmployeeContainer = styled.div`
    border-radius: .2rem;
    border: var(--standartBorder);
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

export const LeftArrow = styled.div`
    position: fixed;
    top: 50%;
    left: 2rem;
    transform: translate(-50%, 0);
`;
export const RightArrow = styled.div`
    position: fixed;
    top: 50%;
    right: 2rem;
    transform: translate(-50%, 0);
`;
export const Button = styled.button`
    background: none;
    font-size: var(--bigFontSize);
    color: var(--unactiveFontColor);
    border: none;
    cursor: pointer;
    padding: .2rem;
    &:hover{
        color: var(--activeFontColor);
    }
`;

export const Container = styled.div`
    overflow: hidden;
    width: 100%;
    position: relative;
`;

export const CarouselInner = styled.div`
`;