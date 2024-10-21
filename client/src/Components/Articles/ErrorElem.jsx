import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;
const Span = styled.span`
    color: var(--unactiveFontColor);
    font-size: var(--bigFontSize);
`;

export default function ErrorElem(){
    return(
        <Container>
            <Span>
                Ошибка загрузки материала
            </Span>
        </Container>
    );
}