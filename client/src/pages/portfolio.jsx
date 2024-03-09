import { useEffect, useState } from "react";
import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import CardPortfolio from "../components/Fragments/CardPortfolio";
import { getPortfolios } from "../services/portfolio.service";
import isEqual from "lodash.isequal";

const Portfolio = () => {
  // object card portfolio
  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    getPortfolios((data) => {
      if (!isEqual(data, portfolios)) {
        setPortfolios(data);
      }
    });
  },[portfolios])
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
              <div key={portfolio.id} className={`bg-[${portfolio.backgroundColor}] p-8`}>
                <CardPortfolio {...portfolio}/>
              </div>
            ))}
          </main>
          <Footer />
        </>
    );
}

export default Portfolio