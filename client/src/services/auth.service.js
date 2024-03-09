import axios from "axios";

export const login = async (data, callback) => {
    await axios.post("http://localhost:3000/login", data, {withCredentials: true})
    .then( async (res) => {
        await callback(true, res)
        console.log(res.data.user._id)
    })
    .catch((err) =>{
        callback(true, err)
        console.log(err)
        console.log(data)
    })
}

export const getUsername = (id) => {
    
} 