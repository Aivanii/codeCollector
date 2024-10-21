import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
const ThemesValues = {
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
}
const Container = styled.main`
    margin: auto;
    width: 75%;
    margin-top: 10%;
    text-align: center;
    border: 1px solid #ffffff32;
    border-radius: .2rem;
`;
const NewElemBtn = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5rem;
    border-radius: .2rem;
    border: 1px solid #ffffffa6;
    float: right;
    color: #ffffffa6;
    transition: .2s;
    margin-top: 1rem;
    &:hover{
        border: 1px solid white;
    }
`;
const AddNewContainer = styled.button`
    color: #ffffffa6;
    border: 1px solid #ffffffa6;
    transition: .2s;
    background: none;
    padding: .2rem;
    margin: .2rem;
    border-radius: .2rem;
    cursor: pointer;
    &:hover{
        border: 1px solid white;
        color: white;
    }
`;
const ClipBoardBtn = styled(AddNewContainer)`
    
`;
const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const TitleArticle = styled.h1`
    color: white;
    text-align: left;
    border: none;
`;
const TitleInput = styled.input`
    font-size: 2rem;
    background: none;
    border: none;
    color: white;
    border-bottom: 1px solid white;
    float: left;
    max-width: 50%;
`;
const ArticleContainer = styled.article`
    display: flex;
    flex-direction: column;
`;
const Text = styled.p`
    margin-top: .5rem;
    text-align: left;
    color: white;
    cursor: pointer;
`;
const ArticleInput = styled.input`
    font-size: 1rem;
    background: none;
    border: none;
    color: white;
    border-bottom: 1px solid white;
    float: left;
    width: 100%;
    margin-top: .3rem;
    margin-bottom: .3rem;
`;
const CategoryContainer = styled.div`
`;
const Select = styled.select`
    background: none;
    float: left;
    color: #7392d1;
    cursor: pointer;
    border: none;
    transition: color .2s;
    font-size: 14px;
    &:hover{
        color: white;
    }
`;
const Option = styled.option`
    background: #1b1b1b;
    color: #ffffffa6;
    transition: color .2s;
    &:hover{
        color: white;
    }
`;
const SelectSpan = styled.span`
    float: left;
    margin:  .075rem .2rem 0 .2rem;
    color: white;
    font-size: 14px;
    cursor: default;
`;
const DateInput = styled.input`
    float: right;
    border: none;
    background: #1b1b1b;
    color: #ffffffa6;
    transition: color .2s;
    cursor: pointer;
    font-size: 14px;
    &:hover{
        color: white;
    }
    appearance: none;
    &::-webkit-calendar-picker-indicator {
        background-color: #ffffffa6;
        border-radius: .2rem;
        cursor: pointer;
        transition: background-color .2s;
    }
    &::-webkit-calendar-picker-indicator:hover{
        background-color: white;
    }
`;
const CodeText = styled.code`
    margin: 0 .25rem 0 .25rem;
    background: #393f3c45;
    border-radius: .2rem;
    padding: 0 .2rem 0 .2rem;
    color: #b5b5b5;
    font-size: 1rem;
`;
const CodeContainer = styled.div`
    overflow: auto;
    width: 100%;
    background: #393f3c45;
    border-radius: .2rem;
    display: flex;
    margin-top: 1rem;
`;
const SpanCodeboxLine = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: .1rem solid #ffffff47;
    height: 100%;
    backdrop-filter: blur(5rem);
    padding: .1rem .4rem .4rem .4rem;
`;
const CodeboxCode = styled.pre`
    line-height: 1.2;
    padding: 0 0 0 .4rem;
    color: #ffffffca;
    font-size: 1rem;
    text-align: left;
    min-width: auto;
    width: -webkit-fill-available;
    cursor: pointer;
`;
const CodeTextArea = styled.textarea`
    background: transparent;
    color: white;
    width: 100%;
    background: none;
    outline: none;
    min-height: 1.71rem;
    font-size: 1rem;
    resize: none;
    line-height: 1.2;
    padding-left: .26rem;
`;
const SpanLine = styled.div`
    color: #ffffffca;
    font-size: 0.85rem;
    line-height: 1.416;
`;
const ThemeTitle = styled.h2`
    margin-top: 1rem;
    font-size: 1.25rem;
    color: white;
    text-align: left;
    cursor: pointer;
`;
const SubTitleHolder = styled.div`
    text-align: left;
    width: 100%;
`;
const SubTitleInput = styled(TitleInput)`
    margin-top: 1rem;
    height: 1.5rem;
    font-size: 1.25rem;
    float: none;
    text-align: left;
    width: 100%;
`;
const DelBtn = styled(AddNewContainer)`
    width: fit-content;
    margin-top: .5rem;
    font-size: 1rem;
`;
const ClipBoardSpan = styled.span`
    display: none;
`;
const Link = styled.a`
    color: #7392d1;
`;
export default function Create() {
    const date = new Date();
    const [titleName, setTitleName] = useState("title");
    const [isTitleEdititng, setIsTitleEditing] = useState(false);
    const [divs, setDivs] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState(["Frontend Development", "JavaScript"]);
    const [dateToday, setDayToday] = useState(`${date.getFullYear()}-${(date.getMonth() + 1 > 9) ? date.getMonth() + 1 : "0" + date.getMonth()}-${(date.getDay() > 9) ? (date.getDay()) : "0" + date.getDay()}`);
    const SelectBlock1 = [];

    for (let key in ThemesValues) {
        const newElem = (<Option value={key} key={key} >{key}</Option>);
        SelectBlock1.push(newElem);
    }
    const SelectBlock2 = ThemesValues[selectedFilters[0]].map(element => {
        return <Option value={element} key={element}>{element}</Option>
    });
    function createDelBtn(id) {
        return (
            <DelBtn onClick={() => deleteDiv(id)}>
                delete
            </DelBtn>);
    }
    const divBlocks = divs.map(elem => {
        if (elem[0].type === "text") {
            const formattedText = elem[0].text
                .replace(/<c>/g, `<code class = "CodeText">`)
                .replace(/<\/c>/g, '</code>')
                .replace(/<a/g, '<a class = "Link"')
                .replace(/<\/a>/g, '</a>');
            return (
                <ArticleContainer key={elem[0].id}>
                    {
                        (!elem[0].isEditing)
                            ?
                            <>
                                <Text onClick={() => { ArticleSetIsEdit(elem[0].id) }} id={elem[0].id} dangerouslySetInnerHTML={{ __html: formattedText }}>
                                </Text>
                                {createDelBtn(elem[0].id)}
                            </>
                            :
                            <>
                                <ArticleInput
                                    value={elem[0].text}
                                    onChange={(event) => changeArticleText(event, elem[0].id)}
                                    onBlur={() => clearIsEditOnBlur()}
                                ></ArticleInput>
                                <br></br>
                            </>
                    }
                </ArticleContainer>
            );
        }
        else if (elem[0].type === "code") {
            let spanLines = [];
            for (let i = 1; i < elem[0].text.split('\n').length + 1; i++) {
                const elem = <SpanLine key={i}>{i}</SpanLine>
                spanLines.push(elem);
            }
            return (
                <div key={elem[0].id} style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    {
                        (!elem[0].isEditing)
                            ?
                            <>
                                <CodeContainer key={elem[0].id}>
                                    <SpanCodeboxLine>
                                        {spanLines}
                                    </SpanCodeboxLine>

                                    <CodeboxCode id={elem[0].id}
                                        onClick={(() => { ArticleSetIsEdit(elem[0].id); })}
                                    >
                                        {elem[0].text}
                                    </CodeboxCode>

                                </CodeContainer>

                                {createDelBtn(elem[0].id)}
                            </>
                            :
                            <CodeContainer key={elem[0].id}>
                                <SpanCodeboxLine>
                                    {spanLines}
                                </SpanCodeboxLine>
                                <CodeTextArea
                                    style={{ height: elem[0].text.split('\n').length * 24 }}
                                    value={elem[0].text}
                                    onChange={(event) => changeArticleText(event, elem[0].id)}
                                    onBlur={() => clearIsEditOnBlur()}
                                ></CodeTextArea>
                            </CodeContainer>
                    }

                </div>
            );
        }
        else if (elem[0].type === "subtitle") {
            return (
                <SubTitleHolder key={elem[0].id}>
                    {
                        (!elem[0].isEditing)
                            ?
                            <>
                                <ThemeTitle id={elem[0].id}
                                    onClick={(() => { ArticleSetIsEdit(elem[0].id); })}>{elem[0].text}</ThemeTitle>

                                {createDelBtn(elem[0].id)}
                            </>
                            :
                            <SubTitleInput value={elem[0].text}
                                onBlur={() => clearIsEditOnBlur()}
                                onChange={(event) => changeArticleText(event, elem[0].id)}
                            />
                    }
                </SubTitleHolder>
            )
        }
        return <></>
    });
    function deleteDiv(id) {
        setDivs(divs.filter((elem) => elem[0].id !== id));
    }
    function clearIsEditOnBlur() {
        setDivs(
            divs.map(element => {
                let newElem = element[0];
                newElem.isEditing = false;
                return [newElem];
            })
        );
    }

    function changeArticleText(event, id) {
        setDivs(
            divs.map(element => {
                let newElem = element[0];
                if (newElem.id === id) {
                    newElem.text = event.target.value;
                }
                return [newElem];
            })
        );
    }

    function ArticleSetIsEdit(id) {
        setDivs(
            divs.map(element => {
                let newElem = element[0];
                if (newElem.id === id) {
                    newElem.isEditing = true;
                } else {
                    newElem.isEditing = false;
                }
                return [newElem];
            })
        )
    }
    function newElem(type) {
        const newDiv = [
            ...divs,
            [
                {
                    "id": uuidv4(),
                    "type": type,
                    "text": type,
                    "isEditing": false,
                }
            ]
        ];
        setDivs(newDiv);
    }
    function saveCode() {
        document.querySelector("#ClipBoardSpan").style.display = "block";
        setTimeout(() => { document.querySelector("#ClipBoardSpan").style.display = "none" }, 3500);
        let FinalDivs = ``;
        for (let i = 0; i < divs.length; i++) {
            FinalDivs += "\n"
            let elem = divs[i][0];
            if (elem.type === "subtitle") {
                FinalDivs += `<h2 class="ThemeTitle">${elem.text}</h2>`;
            }
            else if (elem.type === "text") {
                FinalDivs += `<p class="Text">${elem.text
                    .replace(/<c>/g, `<code class="CodeText>`)
                    .replace(/<\/c>/g, '</code>')
                    .replace(/<a link/g, '<a class = "Link" href')
                    .replace(/<\/a>/g, '</a>')
                    }</p>\n`;
            }
            else if (elem.type === "code") {
                FinalDivs += '<div class="CodeContainer">\n';
                FinalDivs += '<div class="SpanCodeboxLine">\n';
                for (let j = 1; j < elem.text.split('\n').length + 1; j++) {
                    FinalDivs += `<span class="SpanLine">${j}</span>\n`;
                }
                FinalDivs += '</div>\n';
                FinalDivs += `<pre class="CodeboxCode">\n${elem.text}\n</pre>
                </div>
                `;

            }
        }
        let TheFinalCode = `

        <title>${titleName}</title>
        <link rel="stylesheet" href="../../src/articlesStyles.css">
        <div class="TopContainer">
    <div class="FlexContainer">
        <ul class="TopUl">
            <li class="TopLi">
                <a class="TopLiLink" href="/home">Home</a>
            </li>
            <li class="TopLi">
                <a class="TopLiLink" href="/${selectedFilters[0]}">${selectedFilters[0]}</a>
            </li>
            <li class="TopLi">
                <a class="TopLiLink" href="/${selectedFilters[0]}/${selectedFilters[1]}">${selectedFilters[1]}</a>
            </li>
        </ul>
        <span class="DateSpan">${dateToday}</span>
    </div>
    <h1 class="TitleText">${titleName}</h1>
</div>
            ${FinalDivs}
        `;
        navigator.clipboard.writeText(TheFinalCode);
    }
    return (
        <>
            <span style={{ color: "white" }}>Для того, чтобы добавить текст вида: <CodeText>Text</CodeText>, добавьте его внутрь парного тега &lt;c&gt; (<CodeText>Text</CodeText> == &lt;c&gt;Text&lt;/c&gt;)</span>
            <br></br>
            <span style={{ color: "white" }}>Для того, чтобы вставить ссылку, оберните текст внутрь парного тега &lt;a&gt;
                и укажите атрибут "link" со значением ссылки (<Link link="123">Text</Link> == &lt;a link = "123"&gt;Text&lt;/a&gt;)</span>
            <br></br>
            <span style={{ color: "white" }}>ВАЖНО!: После &lt;/a нужен обязательно ОДИН пробел, после которого идёт link</span>
            <br></br><br></br>
            <span style={{ color: "white" }}>ОБЯЗАТЕЛЬНО: У каждого заголовка должен быть уникальный текст</span>
            <br></br>
            <span style={{ color: "white" }}>Желательно: Называть файл также, как и его первый заголовок</span>
            <Container id="main">
                <TitleContainer>
                    <CategoryContainer>
                        <SelectSpan style={{ color: "#7392d1" }}>Home</SelectSpan>
                        <SelectSpan>&gt;</SelectSpan>
                        <Select name="filter1" id="filter1Input" onChange={event => setSelectedFilters([event.target.value, ThemesValues[event.target.value][0]])} className="borderer">
                            {SelectBlock1}
                        </Select>
                        <SelectSpan>&gt;</SelectSpan>
                        <Select name="filter2" id="filter2Input" onChange={event => setSelectedFilters([selectedFilters[0], event.target.value])} className="borderer">
                            {SelectBlock2}
                        </Select>
                        <DateInput type="date" id="dateInput" value={dateToday} max={`${date.getFullYear()}-${(date.getMonth() + 1 > 9) ? date.getMonth() + 1 : "0" + date.getMonth()}-${(date.getDay() > 9) ? (date.getDay()) : "0" + date.getDay()}`}
                            onChange={event => { setDayToday(event.target.value) }} className="borderer"></DateInput>
                    </CategoryContainer>
                    {(isTitleEdititng == false)
                        ?
                        <TitleArticle
                            onClick={() => setIsTitleEditing(true)}
                            style={{ cursor: "pointer" }}
                            className="borderer"
                        >{titleName}</TitleArticle>
                        :
                        <TitleInput value={titleName}
                            onBlur={() => setIsTitleEditing(false)}
                            onChange={(event) => setTitleName(event.target.value)}
                            className="borderer"
                        />
                    }
                </TitleContainer>

                {divBlocks}

                <NewElemBtn>
                    <span style={{ color: "white", cursor: "default" }}>Добавить элемент:</span>
                    <br />
                    <AddNewContainer onClick={() => newElem("text")}>Параграф</AddNewContainer>
                    <AddNewContainer onClick={() => newElem("code")}>Скрипт</AddNewContainer>
                    <AddNewContainer onClick={() => newElem("subtitle")}>Заголовок</AddNewContainer>
                    <br></br>
                    <hr style={{ color: "#ffffffa6" }}></hr>
                    <br></br>
                    <ClipBoardBtn onClick={(event) => saveCode(event.target)} id="ClipBoardBtn">Скопировать код файла</ClipBoardBtn>
                    <ClipBoardSpan id="ClipBoardSpan" style={{ fontSize: "0.7rem" }}>скопировано в буфер обмена</ClipBoardSpan>
                </NewElemBtn>

            </Container>

        </>
    );
}
