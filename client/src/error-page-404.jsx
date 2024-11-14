import BgCircles from "./Components/BackgroundCirclies/BgCircles";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const CenterText = styled.h1`
    color: var(--unactiveFontColor);
    font-size: var(--bigFontSize);
    text-align: center;
    font-weight: 550;
`;
const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 45%;
    display: flex;
    transform: translate(-50%, -50%);
    gap: 2rem;
    text-align: center;
    flex-direction: column;
`;
const StyledLink = styled(Link)`
    cursor: pointer;
    color: var(--unactiveFontColor);
    text-decoration: none;
    transition: color .2s;
    font-size: var(--smallBigFontSize);
    border: var(--standartBorder);
    border-radius: .2rem;
    padding: .2rem;
    &:hover{
        color: var(--activeFontColor);
    }
`;
function ErrorPage404() {
    return (
        <>
            <Container>
                <CenterText>404<br></br>Страница не найдена</CenterText>
                <StyledLink to="/">На главную страницу</StyledLink >
            </Container >

            <BgCircles></BgCircles>
        </>
    );
}

export default ErrorPage404;