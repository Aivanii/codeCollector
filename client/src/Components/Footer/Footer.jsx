import { FooterContainer, Span, Link, Container} from "./FooterStyles"

const FooterInner = (
    <>
        <Container>
            <Link href="/privacy">Условия использования</Link>
            <Link href="/policy">Политика конфиденциальности</Link>
            <Link href="/employees">Наши сотрудники</Link>
        </Container>
        <Container>
            <Span>Мобильный телефон: <Link href = "tel:858123843288">+85 8123 8432 88</Link></Span>
            <Span>Электронная почта: <Link href = "mailto:govnocoders@mail.ru">govnocoders@mail.ru</Link></Span>
        </Container>
        <Container style={{ flex: "0 0 auto" }}>
            <Span>©DWS 2022-2025</Span>
        </Container>
    </>
);

export default function Footer() {
    return (
        <FooterContainer>
            {FooterInner}
        </FooterContainer>
    );
}

export function AbsoluteFooter() {
    return (
        <FooterContainer style={{ position: "absolute" }}>
            {FooterInner}
        </FooterContainer>
    );
}