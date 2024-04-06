import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import { useParams } from "react-router-dom";
// import CardPortfolio from "../components/Fragments/CardPortfolio";
import { getPortfolios } from "../services/portfolio.service";
import { useEffect, useState } from "react";
import isEqual from "lodash.isequal";
import PropTypes from "prop-types";

const PortfolioDetail = () => {
  PortfolioDetail.propTypes = {
    backgroundColor: PropTypes.string,
  };

  let { id } = useParams();
  // object card portfolio
  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    getPortfolios((data) => {
      if (!isEqual(data, portfolios)) {
        setPortfolios(data);
      }
    });
  }, [portfolios]);

  // Filter portofolio berdasarkan id yang sesuai
  const filteredPortfolios = portfolios.filter(
    (portfolio) => portfolio.id === parseInt(id)
  );

  return (
    <>
      <NavBar />
      {/* Menampilkan data object portfolios*/}
      {filteredPortfolios.map((portfolio) => (
        <main
          key={portfolio.id}
          className={`bg-white mt-14 box-border border border-white font-body`}
        >
          {/* top background */}
          {/* kenpaa harus di pancing bg manual dlu, ahhhh */}
          <div className={`${portfolio.backgroundColor}`}>
            <div className={` h-[220px] w-full`}>
              <div className="hidden w-full h-[220px] bg-[#D7F0FF]"></div>
              {/* {portfolio.backgroundColor} */}
            </div>
          </div>
          {/* bagian mockup */}
          <section className="absolute z-30 inset-x-0 top-[140px]">
            <img
              src={portfolio.mockupLaptop}
              alt={portfolio.mockupLaptop}
              className="mx-auto"
            />
            <img
              src={portfolio.mockupHP}
              alt={portfolio.mockupHP}
              className="absolute top-4 right-10 mx-auto"
            />
            {/* under shadow blur */}
            <div className="w-[220px] h-[20px] mt-[-8px] mx-auto bg-gradient-to-r from-white via-black to-white blur-[15px] rounded-full "></div>
          </section>
          {/* border radius div */}
          <div className="absolute z-20 top-[235px] w-full h-20 bg-white rounded-customRounded"></div>
          {/* Deskripsi */}
          <section className="mt-1 pt-20 mb-9 bg-white px-[15px]">
            <h2 className="text-sm text-primary">{portfolio.subtitle}</h2>
            <h1 className="mt-2 font-bold text-lg">{portfolio.title}</h1>
            <p className="mt-4 text-xs">{portfolio.descriptionDetail}</p>
          </section>
          {/* teknologi */}
          <section className="bg-[#F4F4F4] p-4">
            <h1 className="font-bold text-base">Teknologi</h1>
            <div className="flex gap-2 mt-3">
              {portfolio.teknologi.map((tech) => (
                <div key={tech.title}>
                  {/* <img src="../images/react.png" alt={tech.title} /> */}
                  <img src={tech.image} alt={tech.title} />
                </div>
              ))}
            </div>
          </section>
        </main>
      ))}
      <Footer />
    </>
  );
};

export default PortfolioDetail;
