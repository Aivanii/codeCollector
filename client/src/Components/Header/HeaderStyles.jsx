import styled from 'styled-components';

const styles = getComputedStyle(document.documentElement);
const standartFontSize = styles.getPropertyValue('--standartFontSize');

export const HeaderContainer = styled.header`
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    border-bottom: var(--HeaderBorderColor);
    margin-bottom: 1.5rem;
`;

export const Img = styled.img`
  height: 100%;
  padding: .2rem;
`;

export const ImgHolder = styled.a`
  height: 60%;
  background: white;
  border-radius: .2rem;
  font-size: ${standartFontSize};
`;

export const AccountBtnsContainer = styled.div`
    height: 60%;
    padding: .2rem;
    border-radius: .2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const Btn = styled.a`
    margin: .2rem;
    color: #ffffffca;
    text-decoration: none;
    transition: color .2s;
    font-size: ${standartFontSize};
    &:hover{
        color: white;
    }
`;

export const AccountBtnSignUp = styled(Btn)`
    border: 1px solid white;
    padding: .5rem 1rem .5rem 1rem;
    border-radius: .2rem;
`;
export const ListContainer = styled.ul`
    list-style-type: none;
    display: flex;
    position: absolute;
    left: 50%;
    justify-content: center;
    transform: translate(-50%, 0);
    gap: 10%;
    width: -webkit-fill-available;
    margin-top: -0.4rem;
`;

export const ListElem = styled.li`
    color: #ffffffca;
    cursor: pointer;
`;