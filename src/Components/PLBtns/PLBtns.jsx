import { useEffect } from "react";
import { Container, Button, ListContainer, ListElem, ListElemLink, DownBtn } from "./PLBtnsStyles";

const BtnLists =
{
    "Frontend Development":
        [
            "JS",
            "React"
        ],
    "Backend Development":
        [
            "Python",
            "Java",
            "Ruby",
            "Fortran"
        ],
    "Game Development":
        [
            "C#",
            "C++",
            "Lua"
        ],
    "AI":
        [
            "Python"
        ],
};

export default function PLBtns() {
    let BtnsObjs = [];

    for (let elem in BtnLists) {
        BtnsObjs.push(
            <Container key={elem}>
                <Button className="ListButton" aria-expanded="false" aria-controls="list">
                    {elem}
                    <DownBtn></DownBtn>
                </Button>

                <ListContainer className="ListContainer" aria-hidden="true">

                    {BtnLists[elem].map(newLi => {
                        return (
                            <ListElem key={newLi}>
                                <ListElemLink className = "ListElemLink">
                                    {newLi}
                                </ListElemLink>
                            </ListElem>
                        );
                    })}


                </ListContainer>
            </Container>
        );
    }

    useEffect(() => {
        const createScript = async () => {
            const script = document.createElement('script');
            script.src = "src/Components/PLBtns/HideAndShowLists.js";
            script.async = true;
            script.type = "module";
            document.body.appendChild(script);
        }
        if(!document.querySelector(`script[src="src/Components/PLBtns/HideAndShowLists.js"]`)) createScript();
    }, []);

    return (
        <Container>
            {BtnsObjs}
        </Container>
    );
}