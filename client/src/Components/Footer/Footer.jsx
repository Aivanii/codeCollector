import { FooterContainer, Span, Link } from "./FooterStyles"

const FooterInner = (
    <>
        <Span>©DWS 2022-2025</Span>
        <Link href="/privacy">Условия использования</Link>
        <Link href="/policy">Политика конфиденциальности</Link>
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