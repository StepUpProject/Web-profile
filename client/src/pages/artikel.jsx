import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import CardArtikel from "../components/Fragments/CardArtikel";
import { useEffect } from "react";

const Artikel = () => {

    // object card articles
    const newArticles = [
        {
          id:1,
          imageCard:"../images/article-image-1.png",
          title:"Mengenal Apa Itu HTML ?",
          author:"Cristiano Ronaldo",
          shortDescription:"Buat kamu yang pernah membuat sebuah website pastinya sudah tidak asing lagi dengan yang namanya HTML. Sebenarnya apa sih HTML itu ? Kenapa menggunakan HTML untuk membuat website?",
          date:"07 Februari 2024",
          contentDetail: 
          [
            {
              header: "Apa Itu HTML ?",
              paragraf1: "Buat kamu yang pernah membuat sebuah website pastinya sudah tidak asing lagi dengan yang namanya HTML. Sebenarnya apa sih HTML itu ? Kenapa menggunakan HTML untuk membuat website ?",
            },
            {
              header: "Pengertian",
              paragraf1: "HTML merupakan singkatan dari Hyper Text Markup Language, merupakan bahasa markup standard yang digunakan untuk menampilkan dokumen ke Web Browser seperti Google Chrome dan Edge. HTML biasanya digunakan bersama teknologi lainya, seperti Cascading Style Sheets (CSS) dan bahasa scripting",
              paragraf2: "Struktur di dalam HTML terdiri dari serangkaian elemen, elemen tersebut berfungsi untuk memberi informasi kepada Web Browser tentang cara menampilkan konten. Elemen dalam HTML memiliki banyak jenis dan memiliki fungsinya masing-masing, seperti elemen paragraf , input, judul dan lainya. Pada umumnya elemen terdiri dari tag pembuka, konten dan tag penutup, ada juga sebagian elemen yang tidak memiliki tag penutup dan konten.",
              paragraf3: "Sedangkan tag itu sendiri ditulis dengan cara diapit tanda kurung sudut dan untuk tag penutup diberi garis miring sebelum nama tagnya, sebagai contoh <p> </p>. Sedangkan untuk elemen yang hanya menggunakan satu tag, cara penulisanya diberi garis miring setelah nama tag ",
              image:"../images/article-detail-1.png",
            },
            {
              header: "Penutup",
              paragraf1: "HTML pertama kali dicetus pada tahun 1980 oleh Tim Berners-Lee, pada saat itu dia sedang bekerja di salah satu perusahaan yang bernama CERN (European Organization for Nuclear Research), dia mengusulkan untuk membuat sebuah sistem yang bernama ENQUIRE yang berfungsi untuk mengelola dokumen perusahaan.",
            },
            
          ]
        },
    ]

    // object card articles
    const articles = [
        // {
        //   id:1,
        //   imageCard:"../images/article-image-1.png",
        //   title:"Mengenal Apa Itu HTML ?",
        //   author:"Cristiano Ronaldo",
        //   shortDescription:"Buat kamu yang pernah membuat sebuah website pastinya sudah tidak asing lagi dengan yang namanya HTML. Sebenarnya apa sih HTML itu ? Kenapa menggunakan HTML untuk membuat website?",
        //   date:"07 Februari 2024",
        //   contentDetail: 
        //   [
        //     {
        //       header: "Apa Itu HTML ?",
        //       paragraf1: "Buat kamu yang pernah membuat sebuah website pastinya sudah tidak asing lagi dengan yang namanya HTML. Sebenarnya apa sih HTML itu ? Kenapa menggunakan HTML untuk membuat website ?",
        //     },
        //     {
        //       header: "Pengertian",
        //       paragraf1: "HTML merupakan singkatan dari Hyper Text Markup Language, merupakan bahasa markup standard yang digunakan untuk menampilkan dokumen ke Web Browser seperti Google Chrome dan Edge. HTML biasanya digunakan bersama teknologi lainya, seperti Cascading Style Sheets (CSS) dan bahasa scripting",
        //       paragraf2: "Struktur di dalam HTML terdiri dari serangkaian elemen, elemen tersebut berfungsi untuk memberi informasi kepada Web Browser tentang cara menampilkan konten. Elemen dalam HTML memiliki banyak jenis dan memiliki fungsinya masing-masing, seperti elemen paragraf , input, judul dan lainya. Pada umumnya elemen terdiri dari tag pembuka, konten dan tag penutup, ada juga sebagian elemen yang tidak memiliki tag penutup dan konten.",
        //       paragraf3: "Sedangkan tag itu sendiri ditulis dengan cara diapit tanda kurung sudut dan untuk tag penutup diberi garis miring sebelum nama tagnya, sebagai contoh <p> </p>. Sedangkan untuk elemen yang hanya menggunakan satu tag, cara penulisanya diberi garis miring setelah nama tag ",
        //       image:"../images/article-detail-1.png",
        //     },
        //     {
        //       header: "Penutup",
        //       paragraf1: "HTML pertama kali dicetus pada tahun 1980 oleh Tim Berners-Lee, pada saat itu dia sedang bekerja di salah satu perusahaan yang bernama CERN (European Organization for Nuclear Research), dia mengusulkan untuk membuat sebuah sistem yang bernama ENQUIRE yang berfungsi untuk mengelola dokumen perusahaan.",
        //     },
            
        //   ]
        // },
        {
          id:2,
          imageCard:"../images/article-image-2.png",
          title:"Mengenal Apa Itu Artificial Intelegence ?",
          author:"Cristiano Ronaldo",
          shortDescription:"Apa itu HTML ? Buat kamu yang pernah membuat sebuah website pastinya sudah tidak...",
          date:"10 Februari 2024",
          contentDetail: 
          [
            {
              header: "Apa Itu Ai ?",
              paragraf1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perferendis molestiae error facilis, itaque tenetur?",
            },
            {
              header: "Pengertian",
              paragraf1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sapiente minus vel ratione ullam reprehenderit doloribus aliquam libero beatae optio praesentium illo, maiores, tempora fuga, similique architecto neque aliquid assumenda? Ea eaque doloremque quibusdam iure dolore vel at obcaecati ad?",
              image:"./images/article-detail-2.png",
            },
            {
              header: "Penutup",
              paragraf1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nobis fugit a praesentium aspernatur corrupti minima adipisci non et vero.",
            },
            
          ]
        },
    ]

    useEffect(() => {
      const userId = localStorage.getItem("id");
      
      if(userId){
        setUsername(username)
      }else{
        window.location.href = '/login';
      }
    },[])

    return (
      <>
        <NavBar />
          <main className="px-2 mb-14 box-border">
            <h1 className="mt-[80px] text-2xl font-bold text-center">Artikel</h1>
            <p className="mt-[30px] w-full text-xs font-body leading-4 text-black px-[12px] text-center">
              Jelajahi dunia teknologi terkini dengan artikel kami! 
              Perkembangan terbaru, kecerdasan buatan, 
              dan solusi paling inovatif menunggu untuk ditemukan
            </p> 
            <h2 className="mt-[30px] px-[12px] font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-primary from-40% to-black/80">Postingan Terbaru</h2>
            { /* memanggil object artikel terbaru */}
            {newArticles.map((newArticle)=>(
              <CardArtikel key={newArticle.id} {...newArticle}/>
            ))}
            <h2 className="mt-[30px] px-[12px] font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-primary from-40% to-black/80">Artikel Lainnya</h2>
            { /* memanggil object semua artikel */}
            {articles.map((article)=>(
              <CardArtikel key={article.id} {...article}/>
            ))}
          </main>
        <Footer />
      </>
    );
}

export default Artikel