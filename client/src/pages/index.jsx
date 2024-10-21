import Header from "../Components/Header/Header";
import BgCircles from "../Components/BackgroundCirclies/BgCircles";
import Find from "../Components/FindBar/Find";
export default function index() {
    document.title = "DWS CodeCollector";
    return (
        <>
            <Header></Header>

            <Find></Find>

            <BgCircles></BgCircles>
        </>
    );
}