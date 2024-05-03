import { useEffect, useState } from "react";
import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import CardPortfolio from "../components/Fragments/CardPortfolio";
import StylizedFrame from "../components/Elements/StylizedFrame";
import { portfolioData } from "../data/portfolio";

const Portfolio = () => {
  // object card portfolio
  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    setPortfolios(portfolioData);
  }, [portfolios]);
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      {/* Style tambahan sesuai desain */}
      <StylizedFrame
        urlImage="../images/stylized-frame-2-right.png"
        classname="hidden absolute right-[90px] top-[0px] md:block md:w-[100px] lg:w-[159px] lg:right-[120px]"
      ></StylizedFrame>
      <StylizedFrame
        urlImage="../images/stylized-frame-1-right.png"
        classname="block absolute right-0 top-[400px] md:hidden"
      ></StylizedFrame>
      <main className="px-2 mb-14 box-border md:px-20">
        <h1 className="mt-[80px] text-2xl font-bold text-center md:mt-[140px] lg:text-4xl">
          Portfolio
        </h1>
        <p
          className="mt-[30px] w-full text-xs font-body leading-4 text-black px-[12px] text-center md:mt-[50px]
        lg:text-lg lg:mb-[30px]"
        >
          Jelajahi portofolio inovatif kami, solusi digital untuk efisiensi
          bisnis dan produktivitas maksimal.
          <br /> Sambut era digital dengan inovasi kami
        </p>
        {/* memanggil object portfolios */}
        <section className="md:relative md:z-30 md:grid md:grid-cols-2 md:gap-4 md:gap-y-0 lg:grid-cols-3 lg:gap-y-4">
          {portfolios.map((portfolio) => (
            <div key={portfolio.id}>
              <CardPortfolio {...portfolio} />
            </div>
          ))}
        </section>
      </main>
      <StylizedFrame
        urlImage="../images/stylized-frame-1-left.png"
        classname="block absolute left-0 bottom-[680px] md:hidden"
      ></StylizedFrame>
      <StylizedFrame
        urlImage="../images/stylized-frame-2-right.png"
        classname="hidden absolute left-[90px] bottom-[780px] md:z-10 md:block md:bottom-[740px] md:w-[100px] lg:w-[159px] lg:bottom-[1000px]"
      ></StylizedFrame>
      <Footer />
    </div>
  );
};

export default Portfolio;
