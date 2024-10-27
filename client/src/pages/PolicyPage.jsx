import Policy from "../Components/Policy";

import Header from "../Components/Header/Header";
import BgCircles from "../Components/BackgroundCirclies/BgCircles";
import Footer from "../Components/Footer/Footer";
document.title = "Политика конфиденциальности";

export default function PolicyPage() {
    return (
        <>
            <Header></Header>

            <Policy />

            <BgCircles></BgCircles>

            <Footer></Footer>
        </>
    );
}