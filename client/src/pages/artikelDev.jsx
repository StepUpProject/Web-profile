import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import HeadTitle from "../components/Elements/HeadTitle";
import FormArticle from "../components/Fragments/FormArticle";
import Navbar from "../components/Fragments/Navbar";
import axios from "axios";
import Button from "../components/Elements/Button/Button";
import useVerifyUser from "../hooks/useVerifyUser";

const ArticleDev = () => {
  const user = useVerifyUser();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();


  useEffect(() => {
    if (!cookies.jwt) {
      navigate("/login");
    }
  })

  const handleLogout = () => {
    removeCookie(["jwt"]);
    navigate("/login");
  };
  return (
    <div>
      {/* <form onSubmit={handleLogout} className="mt-10 w-full mx-auto">
        <Button type="submit" classname="w-full my-10 bg-primary rounded-full">
          Logout
        </Button>
      </form> */}
      <Navbar user={user}/>
      <HeadTitle>Buat Artikel - {user}</HeadTitle>
      <FormArticle ></FormArticle>
    </div>
  );
};

export default ArticleDev;
