import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
const Container = styled.div`
    margin: auto;
    width: 75%;
    margin-top: 10%;
    text-align: center;
    border: 1px solid #ffffff32;
    border-radius: .2rem;
`;
const NewElemBtn = styled.div`
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

export default function Create() {

    const [titleName, setTitleName] = useState("title");
    const [isTitleEdititng, setIsTitleEditing] = useState(false);
    const [divs, setDivs] = useState([]);

    const divBlocks = divs.map(elem => {

        if (elem[0].type === "text") {
            return (
                <ArticleContainer key={elem[0].id}>
                    {
                        (!elem[0].isEditing)
                            ?
                            <Text onClick={() => { ArticleSetIsEdit(elem[0].id) }} id={elem[0].id}>
                                {elem[0].text}
                            </Text>
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
        return <></>
    });

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
                    "text": "new text",
                    "isEditing": false,
                }
            ]
        ];
        setDivs(newDiv);
    }

    return (
        <>
            <Container>
                <TitleContainer>
                    {(isTitleEdititng == false)
                        ?
                        <TitleArticle
                            onClick={() => setIsTitleEditing(true)}
                            style={{ cursor: "pointer" }}
                        >{titleName}</TitleArticle>
                        :
                        <TitleInput value={titleName}
                            onBlur={() => setIsTitleEditing(false)}
                            onChange={(event) => setTitleName(event.target.value)}
                        />
                    }
                </TitleContainer>

                {divBlocks}

                <NewElemBtn>
                    <span style={{ color: "white" }}>Добавить элемент:</span>
                    <br />
                    <AddNewContainer onClick={() => newElem("text")}>Параграф</AddNewContainer>
                </NewElemBtn>
            </Container>

        </>
    );
}