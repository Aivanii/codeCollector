import { TopContainer, TitleText, Span, FlexContainer, Ul, Li, Link } from "./topStyles";

export default function top() {
    const Date = "8 октября 2024 г.";

    const urlArr = window.location.href.split('/');
    const Link1 = `/articles/${urlArr[4]}`;
    const Link2 = `${Link1}/${urlArr[5]}`;
    return (
        <TopContainer>
            <FlexContainer>
                <Ul>
                    <Li>
                        <Link href="/home">Home</Link>
                    </Li>
                    <Li>
                        <Link href={Link1}>{urlArr[4]}</Link>
                    </Li>
                    <Li>
                        <Link href={Link2}>{urlArr[5]}</Link>
                    </Li>
                </Ul>
                <Span>{Date}</Span>
            </FlexContainer>
            <TitleText>Название статьи</TitleText>
        </TopContainer>
    );
}