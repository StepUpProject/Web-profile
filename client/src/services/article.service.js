import axios from "axios";

const URL_API = "http://localhost:3000/developer/article";

export const article = async (data, callback) => {
    await axios.post(URL_API, data)
    .then((res) => {
        callback(true, res.data)
    })
    .catch((err) =>{
        callback(false, err)
    })
}

export const getArticles = async (callback) => {
    await axios.get(apiUrl)
        .then(res => {
            callback(res.data)
        }).catch(err => {
            console.log(err)
        })
}