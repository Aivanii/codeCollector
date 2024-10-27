import PrivacyMain from "../Components/Privacy/PrivacyMain";

import Header from "../Components/Header/Header";
import BgCircles from "../Components/BackgroundCirclies/BgCircles";
import Footer from "../Components/Footer/Footer";
document.title = "Условия пользования";

export default function Privacy() {
    return (
        <>
            <Header></Header>

            <PrivacyMain />

            <BgCircles></BgCircles>

            <Footer></Footer>
        </>
    );
}