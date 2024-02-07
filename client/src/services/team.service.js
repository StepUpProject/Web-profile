import axios from "axios";

const apiUrl = "http://localhost:3000/api/teams"
export const getTeams = async (callback) => {
    await axios.get(apiUrl)
    .then(res => {
        callback(res.data)
    }).catch(err => {
        console.log(err)
    })
}