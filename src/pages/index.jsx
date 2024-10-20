import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
    border-radius: 0.2rem;
    border: 1px solid white;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 50%;
    `;
const Link = styled.a`
    padding: .5rem;
    text-decoration: none;
    color: #ffffffa6;
    border-bottom: 1px solid #ffffffa6;
    border-top: 1px solid #ffffffa6;
    margin: 1rem;
    text-align: center;
    font-size: 2rem;
    border-radius: .2rem;
    transition: color .25s ease, border .25s;

    &:hover{
        color: white;
        border: 1px solid white;
    }
`;
export default function index() {

    return (
        <Container>
            <Link href="/create">Создать новую статью</Link>
            <Link href="/">Изменить статью</Link>
        </Container>
    );
}