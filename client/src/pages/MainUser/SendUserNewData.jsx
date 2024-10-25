export default function SendUserNewData(userId, userField, userValue){
    const Data = {
        "id": userId,
        [userField] : userValue
    }
    fetch("/123", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(Data)
    });
    alert("успешно");
    console.log(Data);
}