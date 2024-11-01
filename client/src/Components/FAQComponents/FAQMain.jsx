import { MainContainer, Title, QuestionContainer, ContainerTitile, ContainerText, Hr } from "./FAQStyles";
import { Questions } from "./FAQuestions";
export default function FAQMain() {
    console.log(Questions);
    const QuestionsComponents = Questions.map((elem, index) => {
        return (
            <QuestionContainer key={index}>
                <ContainerTitile>{elem[0]}</ContainerTitile>
                <Hr />
                <ContainerText>{elem[1]}</ContainerText>
            </QuestionContainer>
        );
    });
    return (
        <MainContainer>
            <Title>FAQ</Title>

            {QuestionsComponents}

        </MainContainer>
    );
}