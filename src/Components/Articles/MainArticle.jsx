import { Container, ArticleContainer, Text, ThemeTitle, Link, CodeText, CodeContainer, CodeboxCode, SpanCodeboxLine, SpanLine } from './MainArticleStyles';

const txt = `hello\nworld\n!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor repellendus vero modi suscipit, ipsam veniam nisi vitae? Earum saepe asperiores expedita ducimus itaque. Sapiente commodi iure exercitationem eligendi voluptate!
my\nname\nis\neter\narker\ngod\ndame\nit
`;


export default function MainArticle() {
    return (
        <Container>
            <ArticleContainer>
                <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum voluptas asperiores quasi veritatis suscipit itaque esse vel, facere repellendus ab consequatur neque corrupti ipsum quis quidem voluptatibus commodi, maiores amet!
                </Text>
                <ThemeTitle>new theme</ThemeTitle>
                <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum voluptas asperiores quasi veritatis suscipit itaque esse vel, facere repellendus ab consequatur neque corrupti ipsum quis quidem voluptatibus commodi, maiores amet!
                </Text>
                <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum voluptas asperiores quasi veritatis suscipit itaque esse vel, facere repellendus ab consequatur neque corrupti ipsum quis quidem voluptatibus commodi, maiores amet!
                    <Link>here is link</Link>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat
                    <CodeText>text</CodeText>
                    delectus odit dolore quo, possimus eius voluptates voluptatum porro distinctio tempore quaerat incidunt modi autem ipsam cumque? Maxime, sit excepturi.
                </Text>
            </ArticleContainer>
            <ArticleContainer>
                <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum voluptas asperiores quasi veritatis suscipit itaque esse vel, facere repellendus ab consequatur neque corrupti ipsum quis quidem voluptatibus commodi, maiores amet!
                </Text>
                <ThemeTitle>new theme</ThemeTitle>
                <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum voluptas asperiores quasi veritatis suscipit itaque esse vel, facere repellendus ab consequatur neque corrupti ipsum quis quidem voluptatibus commodi, maiores amet!
                </Text>
                <CodeContainer>
                <SpanCodeboxLine>
                    <SpanLine>1</SpanLine>
                    <SpanLine>2</SpanLine>
                    <SpanLine>3</SpanLine>
                    <SpanLine>4</SpanLine>
                    <SpanLine>5</SpanLine>
                    <SpanLine>6</SpanLine>
                    <SpanLine>7</SpanLine>
                    <SpanLine>8</SpanLine>
                    <SpanLine>9</SpanLine>
                    <SpanLine>10</SpanLine>
                    <SpanLine>11</SpanLine>
                    <SpanLine>12</SpanLine>
                </SpanCodeboxLine>
                <CodeboxCode>
                    {txt}
                </CodeboxCode>
            </CodeContainer>
                <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum voluptas asperiores quasi veritatis suscipit itaque esse vel, facere repellendus ab consequatur neque corrupti ipsum quis quidem voluptatibus commodi, maiores amet!
                    <Link>here is link</Link>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat
                    <CodeText>text</CodeText>
                    delectus odit dolore quo, possimus eius voluptates voluptatum porro distinctio tempore quaerat incidunt modi autem ipsam cumque? Maxime, sit excepturi.
                </Text>
            </ArticleContainer>
        </Container>
    );
}

