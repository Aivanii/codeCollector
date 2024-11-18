import { useState, useEffect } from "react";
import {
    FilterSvg, FilterBtn, ContainerLeft, CloseSvg, CloseBtn,
    ElemsContainer, Span
} from "./LeftMenuStyles";
import { Link } from "./MainArticleStyles";

export default function LeftMenu() {
    const [isDivActive, setIsDivActive] = useState(false);
    const [sections, setSections] = useState([]);
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
    useEffect(() => {
        const headings = document.querySelectorAll('h2');
        console.log(headings);
        headings.forEach(heading => {
            const id = heading.textContent.trim().replace(/\s+/g, '_');
            heading.id = id;
        });
        setSections(Array.from(headings).map(
            (h2, index) => (
                <Link key={`LeftMenu${index}`} href={"#" + h2.id}>{h2.textContent}</Link>
            )
        ));
        console.log(sections);
    }, []);

    return (
        <>
            <FilterBtn id = "openLeftMenuBtn" onClick={() => { setIsDivActive(true) }}>
                <FilterSvg></FilterSvg>
            </FilterBtn>
            <ContainerLeft id="divContainer">
                <CloseBtn onClick={() => { setIsDivActive(false) }}>
                    <CloseSvg></CloseSvg>
                </CloseBtn>
                <ElemsContainer>
                    <Span>Разделы:</Span>
                    {sections}
                </ElemsContainer>
            </ContainerLeft>
        </>);
}