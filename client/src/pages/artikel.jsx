import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import CardArtikel from "../components/Fragments/CardArtikel";
import Button from "../components/Elements/Button/Button";
import LatestCardArticle from "../components/Fragments/LatestCardArticle";
import axios from "axios";
import {
  getArticles,
  destroyArticle,
  getLatestArticle,
} from "../services/article.service";
import NavbarDev from "../components/Fragments/NavbarDev";
import Navbar from "../components/Fragments/Navbar";
import useVerifyUser from "../hooks/useVerifyUser";

const Artikel = () => {
  const [articles, setArticles] = useState([]);
  const [ids, setIds] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [latestArticle, setLatestArticle] = useState([]);
  const user = useVerifyUser();
  
  useEffect(() => {
    getArticles((res) => {
      if (res){
        setArticles(res.articles);
        setIds(res.articles.map((article) => article._id));
      } else {
        console.log(res);
      }
    });
  }, [articles]);

  useEffect(() => {
    getLatestArticle((res) => {
      if (res) {
        setLatestArticle(res.articles);
      } else {
        console.log(res);
      }
    });
  }, []);

  return (
    <>
      {/* {user ? <NavbarDev /> : <NavBar />} */}
      <Navbar user={user} />
      <main className="flex flex-col min-h-screen px-2 mb-14 box-border">
        <h1 className="mt-[80px] text-2xl font-bold text-center">Artikel</h1>
        <p className="mt-[30px] w-full text-xs font-body leading-4 text-black px-[12px] text-center">
          Jelajahi dunia teknologi terkini dengan artikel kami! Perkembangan
          terbaru, kecerdasan buatan, dan solusi paling inovatif menunggu untuk
          ditemukan
        </p>
        {user ? (
          <Link
            to="/developer/article/create"
            className="md:flex md:w-full md:justify-center"
          >
            <Button
              type="submit"
              classname={`w-full md:w-[50%] my-10 py-3 bg-primary rounded-full shadow-lg shadow-slate-500 hover:shadow-md hover:shadow-dark transition duration-300 `}
            >
              Buat Artikel
            </Button>
          </Link>
        ) : (
          <></>
        )}
        {/* <img src={`${image}`} alt="" /> */}
        <h2 className="mt-[30px] px-[12px] font-bold text-xl text-center">
          Postingan Terbaru
        </h2>
        {/* <LatestCardArticle /> */}
        <div className="w-full">
          {latestArticle.map((article, index) => (
            <LatestCardArticle key={ids} id={ids[index]} {...article} />
          ))}
        </div>
        {/* memanggil object semua artikel */}
        <h2 className="mt-[30px] px-[12px] font-bold text-xl text-center ">
          Postingan Lainnya
        </h2>
        <div className="md:grid md:grid-cols-3 md:gap-4">
          {articles.map((article, index) => (
            <CardArtikel key={ids[index]} id={ids[index]} {...article} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Artikel;
