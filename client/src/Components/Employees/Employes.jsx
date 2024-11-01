import { MainContainer, Title } from ".././MainStyles";
import { LeftArrow, Button, RightArrow, Container } from "./EmployeesStyles";
import EmployersComponents from "./EmployesComponents";
export default function Employes() {

    return (
        <MainContainer>
            <Title>Наши сотрудники</Title>
            <Container>
                <EmployersComponents />
            </Container>



            <LeftArrow>
                <Button> ← </Button>
            </LeftArrow>
            <RightArrow>
                <Button> → </Button>
            </RightArrow>
        </MainContainer >
    )
}
