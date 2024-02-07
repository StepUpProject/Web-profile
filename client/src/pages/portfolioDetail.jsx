import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import { useParams } from 'react-router-dom';
// import CardPortfolio from "../components/Fragments/CardPortfolio";


const PortfolioDetail = () => {
    let { id } = useParams(); 

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