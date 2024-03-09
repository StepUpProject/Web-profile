import axios from "axios";

export const isAuth = axios.get("http://localhost:3000/berandaDev", {withCredentials: true})
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })