import Header from "../Components/Header/Header";
import BgCircles from "../Components/BackgroundCirclies/BgCircles";
import Find from "../Components/FindBar/Find";
export default function index() {

    return (
        <>
        <Header></Header>
        
        <Find></Find>

        <a href = "articles/DevOps/Docker/test_article">text</a>

        <BgCircles></BgCircles>
        </>
    );
}