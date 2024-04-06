import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getArticle } from "../services/article.service";
import HTMLReactParser from "html-react-parser";
import CardArtikel from "../components/Fragments/CardArtikel";

const ArtikelDetail = () => {
    let { id } = useParams(); 
    const [article, setArticle] = useState([]);
    const [content , setContent] = useState("");

    useEffect(() => {
      getArticle(id, (res) => {
        if (res) {
          setArticle(res.article);
          setContent(res.article.content);
        } else {
          console.log(res);
        }
      })
    }, [id]);
    return (
      <>
        <NavBar />
            <main key={article.id} className="px-4 mb-14 box-border font-body">
              <h1 className="mt-[80px] text-2xl font-bold text-center">Artikel</h1>
              <h2 className="mt-[30px] text-[18px] font-bold">{article.title}</h2>
              <section className="flex gap-6 mt-3">
                <p className="text-xs text-[#616161]">{article.author ? article.author : "Step-Up"}</p>
                <p className="text-xs text-[#616161]">{article.published_at}</p>
              </section>
              <div>
                {HTMLReactParser(content)}
              </div>
              {/* Menampilkan content detail dari object articles */}
              {/* {article.contentDetail.map(content => ( */}
                  {/* <div key={content.title} className="mt-[30px]">
                    <h1 className="font-bold text-[18px]">{content.header}</h1>
                    <h1 className="mt-3 text-xs">{content.paragraf1}</h1>
                    <h1 className="mt-2 text-xs">{content.paragraf2}</h1>
                    <h1 className="mt-2 text-xs">{content.paragraf3}</h1>
                    {content.image && ( // Memeriksa apakah content.image ada dan tidak kosong
                      <img src={content.image} alt="Content Image" className="mx-auto mt-[26px]" />
                    )}
                  </div> */}
              {/* ))} */}
              {/* container artikel lainnya */}
              <section>
                <h2 className="mt-[50px] px-[12px] font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-primary from-40% to-black/80">Artikel Lainnya</h2>
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
}

export default ArtikelDetail