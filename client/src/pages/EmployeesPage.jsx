import Header from "../Components/Header/Header";
import BgCircles from "../Components/BackgroundCirclies/BgCircles";
import Footer from "../Components/Footer/Footer";
import Employes from "../Components/Employees/Employes";
export default function EmployeesPage() {
    document.title = "Наши сотрудники";
    return (
        <>
            <Header></Header>

            <Employes></Employes>
            <Footer></Footer>
            <BgCircles></BgCircles>
        </>
    );
}
