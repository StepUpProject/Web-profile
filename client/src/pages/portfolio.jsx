import { useEffect, useState } from "react";
import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import CardPortfolio from "../components/Fragments/CardPortfolio";
import { getPortfolios } from "../services/portfolio.service";
import isEqual from "lodash.isequal";
import StylizedFrame from "../components/Elements/StylizedFrame";

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
      <div className="relative">
        <NavBar />
        {/* Style tambahan sesuai desain */}
        <StylizedFrame
          urlImage="../images/stylized-frame-1-right.png"
          classname="absolute right-0 top-[400px]"
        ></StylizedFrame>
        <main className="px-2 mb-14 box-border">
          <h1 className="mt-[80px] text-2xl font-bold text-center">
            Portfolio
          </h1>
          <p className="mt-[30px] w-full text-xs font-body leading-4 text-black px-[12px] text-center">
            Jelajahi portofolio inovatif kami, solusi digital untuk efisiensi
            bisnis dan produktivitas maksimal.
            <br /> Sambut era digital dengan inovasi kami
          </p>
          {/* memanggil object portfolios */}
          {portfolios.map((portfolio) => (
            <div key={portfolio.id}>
              <CardPortfolio {...portfolio}/>
            </div>
          ))}
        </main>
        <StylizedFrame
          urlImage="../images/stylized-frame-1-left.png"
          classname="absolute left-0 bottom-[500px]"
        ></StylizedFrame>
        <Footer />
      </div>
    );
}

export default Portfolio