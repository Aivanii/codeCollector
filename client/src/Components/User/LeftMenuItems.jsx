import { LeftDivUl, Li, Link } from "./UserStyles";
export default function LeftMenuItems() {
    return (
        <LeftDivUl>
            <Li>
                <Link href="user/">
                    Страница пользователя
                </Link>
            </Li>
            <Li>
                <Link href="user/">
                    История
                </Link>

            </Li>
            <Li>
                <Link href="user/">
                    Фанфики
                </Link></Li>
        </LeftDivUl>
    );
}