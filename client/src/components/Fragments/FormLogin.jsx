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
        throw new Error(error);
      }
    });
  };
  return (
    <>
      <div
        className="font-body flex flex-col justify-center items-center w-[268px] backdrop-blur-md bg-white/25 rounded-xl shadow-[5px_5px_10px_rgba(0,0,0,0.4)]
      md:absolute md:right-10 md:top-16 md:w-[504px] md:px-16 md:pb-8 md:pt-4 
      lg:w-[824px] lg:right-24 lg:top-24 lg:px-14 lg:pb-12 lg:pt-6"
      >
        <div className="w-full gap-2 flex justify-center items-center mt-6 md:justify-end lg:mr-10">
          <img
            src="../images/logo.png"
            alt="Logo Step Up"
            className="w-[28px] lg:w-[60px]"
          />
          <h3 className="font-bold text-lg text-center lg:text-2xl">Step Up</h3>
        </div>
        {/* title yang tampil ketika mode dekstop dan tablet saja */}
        <div className="w-full flex justify-start items-center sm:hidden md:block lg:px-20 ">
          <h1 className="hidden font-bold text-xl mt-6 text-left md:block md:ps-4 lg:mt-10 lg:mb-2 lg:text-2xl">
            Halaman Login
          </h1>
        </div>
        <form onSubmit={handleLogin} className="px-5 w-full lg:px-24">
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
