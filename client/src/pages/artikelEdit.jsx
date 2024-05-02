import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import HeadTitle from "../components/Elements/HeadTitle";
import FormArticle from "../components/Fragments/FormArticle";
import Navbar from "../components/Fragments/Navbar";
import axios from "axios";
import Button from "../components/Elements/Button/Button";
import FormEditArticle from "../components/Fragments/FormEditArticle";


const ArticleEdit = () => {
//   const navigate = useNavigate();
//   const [cookies, setCookie, removeCookie] = useCookies([]);
//   const [user, setUser] = useState("");

//   useEffect(() => {
//     const verifyUser = async () => {
//       if (!cookies.jwt) {
//         navigate("/login");
//       } else {
//         const { data } = await axios.post(
//           `http://localhost:3000/`,
//           {},
//           { withCredentials: true }
//         );
//         setUser(data.user);
//         if (!data.status) {
//           removeCookie("jwt");
//           navigate("/login");
//         }
//       }
//     };
//     verifyUser();
//   }, [cookies, navigate, removeCookie]);

  const handleLogout = () => {
    removeCookie("jwt");
    navigate("/login");
  };
  return (
    <div>
      <form onSubmit={handleLogout} className="mt-10 w-full mx-auto">
        <Button type="submit" classname="w-full my-10 bg-primary rounded-full">
          Logout
        </Button>
      </form>
      <Navbar></Navbar>
      <HeadTitle>Buat Artikel-</HeadTitle>
      <FormEditArticle
      ></FormEditArticle>
    </div>
  );
};

export default ArticleEdit;
