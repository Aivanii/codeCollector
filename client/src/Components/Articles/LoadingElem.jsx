import styled, { keyframes } from "styled-components";
// Определение анимации spin
const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

// Компонент для загрузки
const LoadElem = styled.div`
  width: 37px;
  height: 37px;
  margin: 0 auto;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 50%;
  border-left-color: transparent;
  border-right-color: transparent;
  animation: ${spin} 575ms infinite linear;
`;

const Spinner = styled.div`
  animation: ${spin} 3s linear infinite;
`;
const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const ContainerRelative = styled.div`
  text-align: center;
`;
export default function LoadingElem() {
  return (
    <Container>
      <LoadElem />
      <Spinner />
    </Container>
  );
}
export function LoadingElemRelative() {
  return (
    <ContainerRelative>
      <LoadElem />
      <Spinner />
    </ContainerRelative>
  );
}