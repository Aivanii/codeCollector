import Header from "../Components/Header/Header";
import BgCircles from "../Components/BackgroundCirclies/BgCircles";
import Footer from "../Components/Footer/Footer";
import About from "../Components/About/About";
export default function AboutPage() {
    document.title = "О нас";
    return (
        <>
            <Header></Header>
            <BgCircles></BgCircles>
            <About></About>
            <Footer></Footer>
        </>
    );
}