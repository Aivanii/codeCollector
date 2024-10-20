import { useState, useEffect } from "react";
import {
    FilterSvg, FilterBtn, ContainerLeft, CloseSvg, CloseBtn, ElemsContainer, OuterListContainer
} from "./LeftMenuStyled";

import {
    ListElemLink, Button, DownBtn, ListContainer, ListElem
} from "../PLBtns/PLBtnsStyles";

export default function LeftMenu() {
    const [isDivActive, setIsDivActive] = useState(false);
    const divContainer = document.querySelector("#divContainer");
    let scriptSrc = "../../src/Components/PLBtns/HideAndShowLists.js";
    if (window.location.href.split('/').length === 7) {
        scriptSrc = '../' + scriptSrc;
    }
    useEffect(() => {
        if (divContainer) {
            divContainer.style.transform = `translate(${isDivActive ? 0 : '-100%'}, 0)`;
        }

    }, [isDivActive]);

    useEffect(() => {
        const createScript = async () => {
            const script = document.createElement('script');
            script.src = scriptSrc;
            script.async = true;
            script.type = "module";
            document.body.appendChild(script);
        }
        if (!document.querySelector(`script[src="${scriptSrc}"]`)) createScript();
    }, []);

    return (
        <>
            <FilterBtn onClick={() => { setIsDivActive(true) }}>
                <FilterSvg></FilterSvg>
            </FilterBtn>
            <ContainerLeft id="divContainer">
                <CloseBtn onClick={() => { setIsDivActive(false) }}>
                    <CloseSvg></CloseSvg>
                </CloseBtn>
                <ElemsContainer>



                    <Button className="ListButton">Задача
                        <DownBtn></DownBtn>
                    </Button>
                    <OuterListContainer>
                        <ListContainer className="ListContainer">
                            <ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem>
                        </ListContainer>
                    </OuterListContainer>
                    <Button className="ListButton">Задача
                        <DownBtn></DownBtn>
                    </Button>
                    <OuterListContainer>
                        <ListContainer className="ListContainer">
                            <ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem>
                        </ListContainer>
                    </OuterListContainer>
                    <Button className="ListButton">Задача
                        <DownBtn></DownBtn>
                    </Button>
                    <OuterListContainer>
                        <ListContainer className="ListContainer">
                            <ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem><ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem>
                        </ListContainer>
                    </OuterListContainer>
                    <Button className="ListButton">Задача
                        <DownBtn></DownBtn>
                    </Button>
                    <OuterListContainer>
                        <ListContainer className="ListContainer">
                            <ListElem> <ListElemLink className="ListElemLink">Web</ListElemLink></ListElem>
                        </ListContainer>
                    </OuterListContainer>




                </ElemsContainer>
            </ContainerLeft>
        </>);
}