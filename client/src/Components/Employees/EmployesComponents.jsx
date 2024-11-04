import { Text, ContainerTitle, Link } from ".././MainStyles";
import { Img, Ul, EmployeeContainer, CarouselInner, ButtonLeft, ButtonRight } from "./EmployeesStyles";
export default function EmployersComponents() {
    return (
        <div >
            <CarouselInner className="carousel-inner">
                <EmployeeContainer className="carousel-item active">
                    <Img
                        src="https://i.ibb.co/6J7JFcZ/Haloween-V1.png"
                        alt="Аватар сотрудника ~vani~">
                    </Img>
                    <ContainerTitle>~vani~</ContainerTitle>
                    <Text style={{ marginLeft: "1rem" }}>
                        Я - Фронтенд-разработчик с более чем годом опыта в создании интуитивно понятных и отзывчивых веб-приложений.
                        Обладаю сильными навыками в HTML, CSS и JavaScript, а также опытом работы с React и Vite. Умею эффективно
                        работать в команде и стремлюсь к постоянному обучению и профессиональному развитию.
                    </Text>
                    <ContainerTitle>Опыт работы</ContainerTitle>
                    <Ul>
                        <li>Разработка и поддержка веб-приложений с использованием HTML, CSS и JavaScript.</li>
                        <li>Создание компонентов пользовательского интерфейса с использованием React.</li>
                        <li>Оптимизация производительности приложений с помощью Vite.</li>
                        <li>Участие в проектировании и реализации адаптивного дизайна с использованием Bootstrap.</li>
                        <li>Ведение контроля версий и совместная работа над проектами с использованием Git и GitHub.</li>
                    </Ul>
                    <ContainerTitle>Образование</ContainerTitle>
                    <Ul>
                        <li>Место: Новосибирский промышленно энергетический колледж</li>
                        <li>Специальность: обеспечение информационной безопасности</li>
                        <li>Год окончания: 2027г</li>
                    </Ul>
                    <ContainerTitle>Навыки</ContainerTitle>
                    <Ul>
                        <li>
                            Языки и технологии:
                            <Ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Vite</li>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>Bootstrap</li>
                                <li>Python</li>
                            </Ul>
                        </li>
                        <li>
                            Инструменты:
                            <Ul>
                                <li>Visual Studio Code</li>
                                <li>Figma</li>
                                <li>Chrome DevTools</li>
                            </Ul>
                        </li>
                        <li>
                            Дополнительные навыки:
                            <Ul>
                                <li>Адаптивный дизайн</li>
                                <li>Кроссбраузерная совместимость</li>
                                <li>Оптимизация производительности</li>
                            </Ul>
                        </li>
                    </Ul>

                    <ContainerTitle>Проекты</ContainerTitle>
                    <Ul>
                        <li>
                            Nya~Shop
                            <Ul>
                                <li>Описание: Интернет-магазин аниме товаров</li>
                                <li>Роль: Ведущий фрондтенд разработчик</li>
                                <li>Технологии: HTML, CSS, JS, BootStrap, Git, GitHub</li>
                            </Ul>
                        </li>
                        <li>
                            CodeCollector
                            <Ul>
                                <li>Описание: Сайт-сборник полезной информации о различных языках программирования</li>
                                <li>Роль: Ведущий фрондтенд разработчик</li>
                                <li>Технологии: HTML, CSS, JS, React, Vite, Git, GitHub</li>
                            </Ul>
                        </li>
                    </Ul>
                    <ContainerTitle>Дополнительная информация</ContainerTitle>
                    <Ul>
                        <li>Окончил курсы НАДиП с красным дипломом</li>
                    </Ul>
                    <ContainerTitle>Контактная информация</ContainerTitle>
                    <Ul>
                        <li>Телефон: <Link href="tel:89537732995">+7 953 773 29 95</Link></li>
                        <li>Почта: <Link href="mailto:aivanellok@gmail.com">aivanellok@gmail.com</Link></li>
                    </Ul>
                </EmployeeContainer>





                <EmployeeContainer className="carousel-item">
                    <Img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvN_w4CfnttZ7S-dBfzkk22TGESASOlsK71GfUEw9nsBWU76vpBrbDrhh0VrEv3-Ccfxg&usqp=CAU"
                        alt="Аватар сотрудника Bambaleyla">
                    </Img>
                    <ContainerTitle>Bambaleyla</ContainerTitle>
                    <Text style={{ marginLeft: "1rem" }}>
                        Я - не Фронтенд-разработчик с более чем годом опыта в создании интуитивно понятных и отзывчивых веб-приложений.
                        Обладаю сильными навыками в HTML, CSS и JavaScript, а также опытом работы с React и Vite. Умею эффективно
                        работать в команде и стремлюсь к постоянному обучению и профессиональному развитию.
                    </Text>
                    <ContainerTitle>Опыт работы</ContainerTitle>
                    <Ul>
                        <li>Разработка и поддержка веб-приложений с использованием HTML, CSS и JavaScript.</li>
                        <li>Создание компонентов пользовательского интерфейса с использованием React.</li>
                        <li>Оптимизация производительности приложений с помощью Vite.</li>
                        <li>Участие в проектировании и реализации адаптивного дизайна с использованием Bootstrap.</li>
                        <li>Ведение контроля версий и совместная работа над проектами с использованием Git и GitHub.</li>
                    </Ul>
                    <ContainerTitle>Образование</ContainerTitle>
                    <Ul>
                        <li>Место: Новосибирский промышленно энергетический колледж</li>
                        <li>Специальность: обеспечение информационной безопасности</li>
                        <li>Год окончания: 2027г</li>
                    </Ul>
                    <ContainerTitle>Навыки</ContainerTitle>
                    <Ul>
                        <li>
                            Языки и технологии:
                            <Ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Vite</li>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>Bootstrap</li>
                                <li>Python</li>
                            </Ul>
                        </li>
                        <li>
                            Инструменты:
                            <Ul>
                                <li>Visual Studio Code</li>
                                <li>Figma</li>
                                <li>Chrome DevTools</li>
                            </Ul>
                        </li>
                        <li>
                            Дополнительные навыки:
                            <Ul>
                                <li>Адаптивный дизайн</li>
                                <li>Кроссбраузерная совместимость</li>
                                <li>Оптимизация производительности</li>
                            </Ul>
                        </li>
                    </Ul>

                    <ContainerTitle>Проекты</ContainerTitle>
                    <Ul>
                        <li>
                            Nya~Shop
                            <Ul>
                                <li>Описание: Интернет-магазин аниме товаров</li>
                                <li>Роль: Ведущий фрондтенд разработчик</li>
                                <li>Технологии: HTML, CSS, JS, BootStrap, Git, GitHub</li>
                            </Ul>
                        </li>
                        <li>
                            CodeCollector
                            <Ul>
                                <li>Описание: Сайт-сборник полезной информации о различных языках программирования</li>
                                <li>Роль: Ведущий фрондтенд разработчик</li>
                                <li>Технологии: HTML, CSS, JS, React, Vite, Git, GitHub</li>
                            </Ul>
                        </li>
                    </Ul>
                    <ContainerTitle>Дополнительная информация</ContainerTitle>
                    <Ul>
                        <li>Окончил курсы НАДиП с красным дипломом</li>
                    </Ul>
                    <ContainerTitle>Контактная информация</ContainerTitle>
                    <Ul>
                        <li>Телефон: <Link href="tel:89537732995">+7 953 773 29 95</Link></li>
                        <li>Почта: <Link href="mailto:aivanellok@gmail.com">aivanellok@gmail.com</Link></li>
                    </Ul>
                </EmployeeContainer>
            </CarouselInner>
        </div>
    );
}
