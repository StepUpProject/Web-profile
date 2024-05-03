import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import { useParams } from "react-router-dom";
// import CardPortfolio from "../components/Fragments/CardPortfolio";
import { getPortfolios } from "../services/portfolio.service";
import { useEffect, useState } from "react";
import isEqual from "lodash.isequal";
import PropTypes from "prop-types";
import StylizedFrame from "../components/Elements/StylizedFrame";

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
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <StylizedFrame
        urlImage="../images/stylized-frame-2-right.png"
        classname="hidden absolute z-[100] right-[90px] bottom-[320px] md:block md:w-[80px] lg:w-[120px] lg:bottom-[500px]"
      ></StylizedFrame>
      {/* Menampilkan data object portfolios*/}
      {filteredPortfolios.map((portfolio) => (
        <main
          key={portfolio.id}
          className={` bg-white mt-14 box-border border border-white font-body `}
        >
          <article className="relative z-20 md:px-20">
            {/* top background */}
            {/* kenpaa harus di pancing bg manual dlu, ahhhh */}

            <div
              className={` h-[220px] w-full bg-[#${portfolio.backgroundColor}] md:h-[312px] lg:h-[579px]`}
            >
              {/* <div className="hidden w-full h-[220px] bg-[#D7F0FF]"></div> */}
              {/* {portfolio.backgroundColor} */}
            </div>

            {/* bagian mockup */}
            <section className="absolute  z-[90] inset-x-0 top-[85px]">
              <img
                src={portfolio.mockupLaptop}
                alt={portfolio.mockupLaptop}
                className="mx-auto w-[226px]  md:w-[340px] lg:w-[742px]"
              />
              <img
                src={portfolio.mockupHP}
                alt={portfolio.mockupHP}
                className="absolute w-[60px] top-4 right-10 mx-auto md:right-44 md:w-[100px] lg:right-64 lg:w-[220px] lg:top-8"
              />
              {/* under shadow blur */}
              <div className="w-[220px] h-[20px] mt-[-8px] mx-auto bg-gradient-to-r from-white via-black to-white blur-[15px] rounded-full "></div>
            </section>
            {/* border radius div */}
            <div
              className="absolute z-40 top-[180px] w-full h-20 bg-white rounded-customRounded
            md:h-[270px] md:w-round lg:h-[500px] lg:top-[325px]"
            ></div>
            <section className="relative z-50">
              {/* Deskripsi */}
              <div className="mt-1 pt-20 mb-9 bg-white px-[15px] md:px-0 md:pt-14 md:mb-6">
                <h2 className="text-sm text-primary lg:text-2xl lg:mb-4">
                  {portfolio.subtitle}
                </h2>
                <h1 className="mt-2 font-bold text-lg lg:text-3xl">
                  {portfolio.title}
                </h1>
                <p className="mt-4 text-xs lg:text-lg">
                  {portfolio.descriptionDetail}
                </p>
              </div>
            </section>
          </article>
          {/* teknologi */}
          <section className="bg-[#F4F4F4] p-4 md:px-20 md:pt-4 md:pb-10 lg:relative lg:z-[60] lg:pb-28">
            <h1 className="font-bold text-base lg:text-3xl lg:my-6">
              Teknologi
            </h1>
            <div className="flex items-center gap-2 mt-3 lg:gap-4 lg:mt-10">
              {portfolio.teknologi.map((tech) => (
                <div key={tech.title}>
                  {/* <img src="../images/react.png" alt={tech.title} /> */}
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-[28px] lg:w-[68px]"
                  />
                </div>
              ))}
            </div>
          </section>
        </main>
      ))}
      <Footer />
    </div>
  );
};

export default PortfolioDetail;
