import axios from "axios";

export const login = async (data, callback) => {
    await axios.post("http://localhost:3000/login", data, {withCredentials: true})
    .then(async (res) => {
        await callback(true, res)
    })
    .catch((err) =>{
        callback(true, err)
    })
}