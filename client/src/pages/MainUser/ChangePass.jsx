import { Label, Input, Btn } from "./MainUserStyles";
import SendPass from "./SendPass";
import { useState } from "react";

const ChangePass = () => {
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");

    const dataPrepar = (e) => {
        e.preventDefault();
        const status = SendPass(oldPass, newPass);
        console.log(status);
        document.querySelector("#status_msg").textContent = status;
    }

    return (
        <form
            style={{ margin: "1rem" }}
            onSubmit={dataPrepar}>
            <div>
                <Label htmlFor="oldPass">Пароль:</Label>
                <br></br>
                <Input type="password" id="oldPass" name="oldPass" value={oldPass} onChange={(e) => setOldPass(e.target.value)} />
            </div>
            <div>
                <Label htmlFor="newPass">Новый пароль:</Label>
                <br></br>
                <Input type="password" id="newPass" name="newPass" value={newPass} onChange={(e) => setNewPass(e.target.value)} />
            </div>
            <span id="status_msg"></span>
            <Btn type="submit">Принять</Btn>
        </form >
    );
}

export default ChangePass;
