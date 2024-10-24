import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Main, LeftDiv, RightDiv, TitleElem } from "./UserStyles";
import LeftMenuItems from "./LeftMenuItems";
import BgCircles from "../BackgroundCirclies/BgCircles";
export default function User({ RightMenu, Title }) {
    return (
        <>
            <Header></Header>
            <Main>
                <LeftDiv>
                    <LeftMenuItems></LeftMenuItems>
                </LeftDiv>
                <RightDiv>
                    <TitleElem>
                        {Title}
                    </TitleElem>
                        {RightMenu}
                </RightDiv>
            </Main>
            <Footer></Footer>
            <BgCircles></BgCircles>
        </>
    );
}