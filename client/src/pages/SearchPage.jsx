import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BgCircles from "../Components/BackgroundCirclies/BgCircles";
import Search from "../Components/SearchPage/Search";

document.title = "Поиск по сайту";
export default function SearchPage() {
    return (
        <>
            <Header></Header>
            <BgCircles></BgCircles>
            <Search></Search>
        </>
    );
}