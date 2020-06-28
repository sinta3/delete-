let putMethod = {
    method: "DELETE",
    headers: {
        "Content-type": "application/json",
    },
};
let urlD = `https://5ef168c41faf160016b4d5af.mockapi.io/api/email/12`;
fetch(urlD, putMethod)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
