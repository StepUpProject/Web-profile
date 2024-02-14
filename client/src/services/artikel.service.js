import axios from "axios";

const apiUrl = "http://localhost:3000/api/article"
export const getArticles = async (callback) => {
    await axios.get(apiUrl)
        .then(res => {
            callback(res.data)
        }).catch(err => {
            console.log(err)
        })
}