import { useState } from "react";
// import { useNavigate } from "react-router-dom"
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/Input";
import RememberMe from "../Elements/RememberMe";
import { login } from "../../services/auth.service";
import { ToastContainer, toast } from "react-toastify";
// import { useState } from "react";

const FormLogin = (props) => {
  // const navigate = useNavigate()
  const generateError = (error) => {
    toast.error(error, {
      position: "bottom-right",
    });
  };
  const handleLogin = async (event) => {
    // const navigateTo = useNavigate();
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
      rememberMe: event.target.rememberMe.value,
    };
    login(data, async (success, res) => {
      try {
        if (success) {
          console.log(success);
          console.log(res);
          if (res.response && res.response.data.errors) {
            const { email, password } = res.response.data.errors;
            if (email) {
              generateError(email);
            } else if (password) {
              generateError(password);
            }
          } else {
            window.location.href = "/developer/dashboard";
          }
        }
      } catch (error) {
        console.log(error);
        console.log(res);
      }
    });
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[268px] backdrop-blur-md bg-white/25 rounded-xl shadow-[5px_5px_10px_rgba(0,0,0,0.4)]">
        <div className="w-full gap-2 flex justify-center items-center mt-6 ">
          <img
            src="../images/logo.png"
            alt="Logo Step Up"
            className="w-[28px]"
          />
          <h3 className="font-bold text-lg text-center">Step Up</h3>
        </div>
        <form onSubmit={handleLogin} className="px-5 w-full">
          <InputForm
            name="email"
            type="email"
            label="Email"
            classname="bg-transparent mt-8 mb-8"
          />
          <InputForm
            name="password"
            type="password"
            label="Password"
            classname="bg-transparent mb-5"
          />
          <RememberMe />
          <Button
            type="submit"
            classname="w-full mt-8 mb-10 p-2 bg-primary rounded-full shadow-buttonShadow active:shadow-none active:translate-y-1"
          >
            Masuk
          </Button>
          {/* { loginInfo && <p className="text-red-500 w-[50%] text-center mt-2">{loginInfo}</p>} */}
          {/* {loginFailed && <p className="text-lg text-red-500 text-center mt-2">{loginFailed}</p>} */}
          {/* {loginFailed && <p className="text-red-500 text-center mt-2">{loginFailed}</p>} */}
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default FormLogin;
