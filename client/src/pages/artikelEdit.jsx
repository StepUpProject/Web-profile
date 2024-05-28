import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import HeadTitle from "../components/Elements/HeadTitle";
import FormArticle from "../components/Fragments/FormArticle";
import Navbar from "../components/Fragments/Navbar";
import axios from "axios";
import Button from "../components/Elements/Button/Button";
import FormEditArticle from "../components/Fragments/FormEditArticle";
import useVerifyUser from "../hooks/useVerifyUser";


const ArticleEdit = () => {
  const user = useVerifyUser();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();


  useEffect(() => {
    if (!cookies.jwt) {
      navigate("/login");
    }
  })

  const handleLogout = () => {
    removeCookie("jwt");
    navigate("/login");
  };
  return (
    <div>
      <Navbar user={user}></Navbar>
      <HeadTitle>Buat Artikel-</HeadTitle>
      <FormEditArticle
      ></FormEditArticle>
    </div>
  );
};

export default ArticleEdit;
