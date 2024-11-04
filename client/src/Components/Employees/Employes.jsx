import { MainContainer, Title } from ".././MainStyles";
import { Container, ButtonLeft, ButtonRight } from "./EmployeesStyles";
import { useEffect } from 'react';
import EmployersComponents from "./EmployesComponents";
export default function Employes() {

    useEffect(() => {
        let currentIndex = 0;
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;

        document.getElementById('nextBtn').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        });

        document.getElementById('prevBtn').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        });

        function updateCarousel() {
            const carouselInner = document.querySelector('.carousel-inner');
            const offset = -currentIndex * 100; // Сдвиг в процентах
            carouselInner.style.transform = `translateX(${offset}%)`;
        }

    }, []);

    return (
        <MainContainer>
            <Title>Наши сотрудники</Title>
            <Container>
                <EmployersComponents />
            </Container>
            <ButtonLeft id="prevBtn">❮</ButtonLeft>
            <ButtonRight id="nextBtn">❯</ButtonRight>
        </MainContainer >
    )
}
