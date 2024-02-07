import axios from "axios";

const URL_API = "http://localhost:3000/api/konsultasi";

export const konsultasi = async (data, callback) => {
    await axios.post(URL_API, data)
    .then((res) => {
        callback(true, res.data)
    })
    .catch((err) =>{
        callback(false, err)
    })

}