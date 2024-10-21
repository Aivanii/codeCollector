import Header from "../Components/Header/Header";
import BgCircles from "../Components/BackgroundCirclies/BgCircles";
import PLBtns from "../Components/PLBtns/PLBtns";
export default function Catalog() {
    document.title = "Каталог";
    return (
        <>
        <Header></Header>
        
        <PLBtns></PLBtns>

        <BgCircles></BgCircles>
        </>
    );
}