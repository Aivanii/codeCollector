import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BgCircles from "../Components/BackgroundCirclies/BgCircles";
import FAQMain from "../Components/FAQComponents/FAQMain";

document.title = "Часто задаваемые вопросы";
export default function FAQ() {
    return (
        <>
            <Header></Header>
            <BgCircles></BgCircles>
            <FAQMain></FAQMain>
            <Footer></Footer>
        </>
    );
}