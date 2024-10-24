export default function SendAuthData(event, authType) {
    event.preventDefault();
    (authType == "log") ? LoginCheck() : RegisterCheck();
}

function LoginCheck() {
    const nameField = document.querySelector("#authUsername");
    const statusSpan = document.querySelector("#AuthStatusSpan");
    const nameStatus = UserNameCheck(nameField.value);
    if (nameStatus) {
        statusSpan.textContent = nameStatus;
        return;
    }
    const passField = document.querySelector("#authPassword");
    const passStatus = PasswordCheck(passField.value);
    if (passStatus) {
        statusSpan.textContent = passStatus;
        return;
    }
    DataSending(statusSpan, nameField.value, passField.value);
}

function RegisterCheck() {
    const nameField = document.querySelector("#SignUsername");
    const statusSpan = document.querySelector("#SignStatusSpan");
    const nameStatus = UserNameCheck(nameField.value);
    if (nameStatus) {
        statusSpan.textContent = nameStatus;
        return;
    }
    const passField = document.querySelector("#SignPassword");
    const passStatus = PasswordCheck(passField.value);
    if (passStatus) {
        statusSpan.textContent = passStatus;
        return;
    }
    const emailField = document.querySelector("#SignEmail");
    if (EmailCheck(emailField.value)) DataSending(statusSpan, nameField.value, passField.value, emailField.value);
    else statusSpan.textContent = "Вы ввели некорректную почту";
}

function EmailCheck(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function DataSending(span, name, password, email = null) {
    let data = {};
    data["name"] = name;
    data["password"] = password;
    if (email) data["email"] = email;
    let url = new URL(window.location.href).pathname;

    fetch(`${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            span.textContent = response;
            setTimeout(() => { location.reload() }, 1000);
        })
        .catch(e => {
            console.log('Catch block error:', e);
            span.textContent = "Произошла ошибка во время обработки запроса";
        });
}

function UserNameCheck(name) {
    name = name.trim();
    if (name.length < 3) return "Имя пользователя должно содержать не менее 3 символа"
    return;
}

function PasswordCheck(pass) {
    if (pass.length !== pass.trim().length) return "Пароль не может начинаться или заканчиваться на пробел";
    if (pass.length < 8) return "Пароль должен содержать не менее 8 символов";
    if (pass.length > 32) return "Пароль должен содержать не более 32 символов";
    const uniqueLetters = new Set(pass.split(''));
    if (uniqueLetters.size < 6) return "Пароль должен содержать не менее 6 уникальных символов";
    return;
}