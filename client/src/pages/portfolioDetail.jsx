import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import { useParams } from 'react-router-dom';
// import CardPortfolio from "../components/Fragments/CardPortfolio";


const PortfolioDetail = () => {
    let { id } = useParams(); 
    // object card portfolio
    const portfolios = [
    {
      id:1,
      imageCard:"./images/portfolio-card-1.png",
      imageDetail:"./images/portfolio-detail-1.png",
      title:"Website Arsitek Rumah",
      subtitle:"Bank Central Indonesia",
      color:"#D7F0FF",
      description:"Terinspirasi oleh estetika dan fungsionalitas, portofolio arsitektur kami mencerminkan keahlian dalam merancang rumah impian",
      descriptionDetail:"Terinspirasi oleh estetika dan fungsionalitas, portofolio arsitektur kami mencerminkan keahlian dalam merancang rumah impian. Setiap proyek kami adalah perwujudan kreativitas dan keunggulan teknis, menghasilkan ruang yang tidak hanya memukau secara visual tetapi juga memenuhi kebutuhan fungsional sehari-hari. Dari desain eksterior yang elegan hingga tata letak interior yang cerdas, setiap detail dipikirkan dengan seksama. Jelajahi portofolio kami untuk menemukan harmoni antara keindahan dan fungsionalitas dalam setiap proyek arsitektur kami.",
      teknologi:[
        {
          title:"react",
          image:"./images/react.png",
        },
        {
          title:"mysql",
          image:"./images/mysql.png",
        },
        {
          title:"nodejs",
          image:"./images/nodejs.png",
        },
        {
          title:"expressjs",
          image:"./images/expressjs.png",
        },
      ]
    },
    {
      id:2,
      imageCard:"./images/portfolio-card-2.png",
      imageDetail:"./images/portfolio-detail-2.png",
      title:"Website Catering",
      subtitle:"Warung Makan Kokoh",
      color:"#D7FFEE",
      description:"Terinspirasi oleh estetika dan fungsionalitas, portofolio arsitektur kami mencerminkan keahlian dalam merancang rumah impian",
      descriptionDetail:"Terinspirasi oleh estetika dan fungsionalitas, portofolio arsitektur kami mencerminkan keahlian dalam merancang rumah impian. Setiap proyek kami adalah perwujudan kreativitas dan keunggulan teknis, menghasilkan ruang yang tidak hanya memukau secara visual tetapi juga memenuhi kebutuhan fungsional sehari-hari. Dari desain eksterior yang elegan hingga tata letak interior yang cerdas, setiap detail dipikirkan dengan seksama. Jelajahi portofolio kami untuk menemukan harmoni antara keindahan dan fungsionalitas dalam setiap proyek arsitektur kami.",
      teknologi:[
        {
          title:"react",
          image:"./images/react.png",
        },
        {
          title:"mysql",
          image:"./images/mysql.png",
        },
        {
          title:"nodejs",
          image:"./images/nodejs.png",
        },
        {
          title:"expressjs",
          image:"./images/expressjs.png",
        },
      ]
    }
  ]
    return (
        <>
          <NavBar />
          <main className="px-2 mb-14 box-border">
            <h1 className="mt-[80px] text-2xl font-bold text-center">Portfolio</h1>
            <p className="mt-[30px] w-full text-xs font-body leading-4 text-black px-[12px] text-center">
              testing portfolio detail
            </p> 
            <h2>Portfolio Detail for ID: {id}</h2>
            
          </main>
          <Footer />
        </>
    );
}

export default PortfolioDetail