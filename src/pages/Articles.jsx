import Header from "../Components/Header/Header";
import BgCircles from "../Components/BackgroundCirclies/BgCircles";
import Top from "../Components/Articles/Top";
import LeftMenu from "../Components/Articles/leftMenu";
import MainArticle from "../Components/Articles/MainArticle";
export default function Articles() {
    return (
        <>
            <Header></Header>
            <Top></Top>
            <MainArticle></MainArticle>
            <LeftMenu></LeftMenu>
            <BgCircles></BgCircles>
        </>
    );
}