import { useEffect } from "react";
import { Container, Button, ListContainer, ListElem, ListElemLink, DownBtn } from "./PLBtnsStyles";

const BtnLists =
{
    "Frontend Development": [
        "JavaScript",
        "React",
        "Vue.js",
        "Angular",
        "HTML",
        "CSS",
        "Sass",
        "TypeScript"
    ],
    "Backend Development": [
        "Python",
        "Java",
        "Ruby",
        "Fortran",
        "Node.js",
        "PHP",
        "Go",
        "C#",
        "Rust"
    ],
    "Game Development": [
        "C#",
        "C++",
        "Lua",
        "Unity",
        "Unreal Engine",
        "Godot",
        "GameMaker"
    ],
    "AI": [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Keras",
        "Scikit-learn",
        "OpenAI Gym"
    ],
    "Mobile Development": [
        "Swift",
        "Kotlin",
        "React Native",
        "Flutter"
    ],
    "DevOps": [
        "Docker",
        "Kubernetes",
        "Ansible",
        "Terraform"
    ],
    "Database Management": [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "SQLite"
    ],
    "Cloud Computing": [
        "AWS",
        "Azure",
        "Google Cloud Platform"
    ]
};


let url;

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
                        url = "/articles/" + elem.replace(" ", "_") + "/" + newLi;
                        return (
                            <ListElem key={newLi}>
                                <ListElemLink className="ListElemLink" href={url}>
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
        if (!document.querySelector(`script[src="src/Components/PLBtns/HideAndShowLists.js"]`)) createScript();
    }, []);

    return (
        <main>
            <Container style = {{marginTop: "0"}}>
                {BtnsObjs}
            </Container>
        </main>
    );
}