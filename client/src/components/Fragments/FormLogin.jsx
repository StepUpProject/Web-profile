import { useState } from "react"
// import { useNavigate } from "react-router-dom"
import Button from "../Elements/Button/Button"
import InputForm from "../Elements/Input/Input"
import RememberMe from "../Elements/RememberMe"
import { login } from "../../services/auth.service";
// import { useState } from "react";

const FormLogin = (props) => {
    const [loginInfo, setLoginInfo] = useState("");

    const handleLogin = async (event) => {
        // const navigateTo = useNavigate();
            event.preventDefault();
            const data = {
                username : event.target.username.value,
                password: event.target.password.value,
                rememberMe: event.target.rememberMe.value
            }
            login(data, async (success, res)=>{
                if(success){
                    // navigateTo("/berandaDev")
                    if(res.data){
                        localStorage.setItem("id", res.data.user._id)
                        localStorage.setItem("username", res.data.user.username)
                        window.location.href = "/berandaDev"
                        // setLoginInfo(res.data.message)
                    //  console.log(res)   
                    }else{
                        setLoginInfo(res.response.data.error)
                    }
                }else{
                    setLoginInfo(res.response.error)
                }
            })
    }
    return (
        <div className="flex flex-col justify-center items-center w-[268px] backdrop-blur-md bg-white/25 rounded-xl shadow-[5px_5px_10px_rgba(0,0,0,0.4)]">
        <h3 className="font-bold text-2xl text-center mb-6">Login</h3>
        <form onSubmit={handleLogin}>
            <InputForm
                name="username"
                type="text"
                label="Username"
                classname="bg-transparent mt-8 mb-6"
            />
            <InputForm
                name="password"
                type="password"
                label="Password"
                classname="bg-transparent mb-6"
            />
            <RememberMe />
            <Button type="submit" classname="w-full my-10 bg-primary rounded-full">Kirim</Button>
            { loginInfo && <p className="text-red-500 w-[50%] text-center mt-2">{loginInfo}</p>}
            {/* {loginFailed && <p className="text-lg text-red-500 text-center mt-2">{loginFailed}</p>} */}
            {/* {loginFailed && <p className="text-red-500 text-center mt-2">{loginFailed}</p>} */}
        </form>
        </div>
    )
}

export default FormLogin