import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import CardArtikel from "../components/Fragments/CardArtikel";
import Button from "../components/Elements/Button/Button";
import axios from "axios";
import { getArticles, destroyArticle } from "../services/article.service";

const Artikel = () => {
  const [articles, setArticles] = useState([]);
  const [ids, setIds] = useState([]);
  const [user, setUser] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([]);

  // const verifyUser =
  useEffect(() => {
    const verifyUser = async () => {
      if (cookies.jwt) {
        const { data } = await axios.post(
          `http://localhost:3000/`,
          {},
          { withCredentials: true }
        );
        setUser(data.user);
        // if (!data.status) {
        //   removeCookie("jwt");
        //   navigate("/login");
        // }
      }
    };
    verifyUser();
  }, [cookies, removeCookie]);

  useEffect(() => {
    getArticles((res) => {
      if (res) {
        setArticles(res.articles);
        setIds(res.articles.map((article) => article._id));
      } else {
        console.log(res);
      }
    });
  }, [articles]);

  return (
    <>
      <NavBar />
      <main className="px-2 mb-14 box-border">
        <h1 className="mt-[80px] text-2xl font-bold text-center">Artikel</h1>
        <p className="mt-[30px] w-full text-xs font-body leading-4 text-black px-[12px] text-center">
          Jelajahi dunia teknologi terkini dengan artikel kami! Perkembangan
          terbaru, kecerdasan buatan, dan solusi paling inovatif menunggu untuk
          ditemukan
        </p>
        {user ? (
          <Link to="/developer/article/create">
            <Button
              type="submit"
              classname={`w-full my-10 bg-primary rounded-full`}
            >
              Buat Artikel
            </Button>
          </Link>
        ) : (
          <></>
        )}
        {/* <img src={`${image}`} alt="" /> */}
        {/* <h2 className="mt-[30px] px-[12px] font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-primary from-40% to-black/80">Postingan Terbaru</h2> */}
        {/* memanggil object semua artikel */}
        {articles.map((article, index) => (
          <CardArtikel
            key={ids[index]}
            id={ids[index]}
            {...article}
            // handleDeleteArticle={handleDeleteArticle(ids[index])}
          />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Artikel;
