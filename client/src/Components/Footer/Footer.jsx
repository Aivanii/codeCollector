import { FooterContainer, Span, Link } from "./FooterStyles"

const FooterInner = (
    <>
        <div>
            <Link href="/privacy">Условия использования</Link>
            <br></br>
            <Link href="/policy">Политика конфиденциальности</Link>
            <br></br>
            <Link href="/employees">Наши сотрудники</Link>
        </div>
        <div>
            <Span>Мобильный телефон: <Link href = "tel:858123843288">+85 8123 8432 88</Link></Span>
            <br></br>
            <Span>Электронная почта: <Link href = "mailto:govnocoders@mail.ru">govnocoders@mail.ru</Link></Span>
        </div>
        <div style={{ flex: "0 0 auto" }}>
            <Span>©DWS 2022-2025</Span>
        </div>
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