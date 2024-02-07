import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import CardPortfolio from "../components/Fragments/CardPortfolio";


const Portfolio = () => {
  // object card portfolio
  const portfolios = [
    {
      id:1,
      image:"./images/portfolio-card-1.png",
      title:"Website Arsitek Rumah",
      subtitle:"Bank Central Indonesia",
      description:"Terinspirasi oleh estetika dan fungsionalitas, portofolio arsitektur kami mencerminkan keahlian dalam merancang rumah impian"
    },
    {
      id:2,
      image:"./images/portfolio-card-2.png",
      title:"Website Catering",
      subtitle:"Warung Makan Kokoh",
      description:"Terinspirasi oleh estetika dan fungsionalitas, portofolio arsitektur kami mencerminkan keahlian dalam merancang rumah impian"
    }
  ]

    return (
        <>
          <NavBar />
          <main className="px-2 mb-14 box-border">
            <h1 className="mt-[80px] text-2xl font-bold text-center">Portfolio</h1>
            <p className="mt-[30px] w-full text-xs font-body leading-4 text-black px-[12px] text-center">
              Jelajahi portofolio inovatif kami, solusi digital untuk efisiensi bisnis dan produktivitas maksimal. 
              <br /> Sambut era digital dengan inovasi kami
            </p> 
            {/* memanggil object portfolios */}
            {portfolios.map((portfolio)=>(
              <CardPortfolio key={portfolio.id} {...portfolio}/>
            ))}
          </main>
          <Footer />
        </>
    );
}

export default Portfolio