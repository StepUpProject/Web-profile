import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticle } from "../services/article.service";
import HTMLReactParser from "html-react-parser";
import CardArtikel from "../components/Fragments/CardArtikel";
import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import useVerifyUser from "../hooks/useVerifyUser";
import { DateConverter } from "../components/Elements/DateConverter";

const ArtikelDetail = () => {
  let { id } = useParams();
  const [article, setArticle] = useState({});
  const [content, setContent] = useState("");
  const user = useVerifyUser();

  useEffect(() => {
    getArticle(id)
      .then((res) => {
        if (res) {
          setArticle(res.article);
          setContent(res.article.content);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      <Navbar user={user} />
      <main
        key={article.id}
        className="flex flex-col min-h-screen px-4 mb-14 box-border font-body"
      >
        <h1 className="mt-[80px] text-2xl font-bold text-center">Artikel</h1>
        <div className="w-full flex justify-center">
          <img src={article.image} className="w-[75%] " alt="" />
        </div>
        <h2 className="mt-[30px] text-[18px] font-bold">{article.title}</h2>
        <section className="flex gap-6 mt-3">
          <p className="text-xs text-[#616161] mb-3">
            By {article.author ? article.author : "Step-Up"}
          </p>
          <DateConverter
            className="text-xs text-[#616161]"
            date={article.published_at}
          />
        </section>
        <div>{HTMLReactParser(content)}</div>
        <section>
          <h2 className="mt-[50px] px-[12px] font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-primary from-40% to-black/80">
            Artikel Lainnya
          </h2>
          {/* Memanggil object semua artikel, kecuali yang sedang ditampilkan */}
          {/* {articles
                  .filter(otherArticle => otherArticle.id !== article.id)
                  .map(otherArticle => (
                    <CardArtikel key={otherArticle.id} {...otherArticle} />
                  ))} */}
        </section>
      </main>
      {/* ))} */}
      <Footer />
    </>
  );
};

export default ArtikelDetail;
