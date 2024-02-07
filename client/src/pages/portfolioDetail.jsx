import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import { useParams } from 'react-router-dom';
// import CardPortfolio from "../components/Fragments/CardPortfolio";
import { getPortfolios } from "../services/portfolio.service";
import { useEffect, useState } from "react";
import CardPortfolio from "../components/Fragments/CardPortfolio";

const PortfolioDetail = () => {
    let { id } = useParams(); 
    // object card portfolio
    const [portfolios, setPortfolios] = useState([]);
    useEffect(() => {
      getPortfolios((data) => {
        setPortfolios(data);
      });
    })
    
    return (
        <>
          <NavBar />
          <main className="px-2 mb-14 box-border">
            <h1 className="mt-[80px] text-2xl font-bold text-center">Portfolio</h1>
            <p className="mt-[30px] w-full text-xs font-body leading-4 text-black px-[12px] text-center">
              testing portfolio detail
            </p> 
            <h2>Portfolio Detail for ID: {id}</h2>
            {portfolios.map((portfolio)=>(
              <CardPortfolio key={portfolio.id} {...portfolio}/>
            ))}
          </main>
          <Footer />
        </>
    );
}

export default PortfolioDetail