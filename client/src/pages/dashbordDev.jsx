import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import { useParams } from 'react-router-dom';
import { getTeams } from "../services/team.service";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

const DashboardDev = () => {
  let { id } = useParams(); 
    // object card team
    const [teams, setTeams] = useState([]);
    useEffect(() => {
      getTeams((data) => {
        setTeams(data);
      });
    });
    
    // Filter portofolio berdasarkan id yang sesuai
    const filteredTeams = teams.filter(team => team.id === parseInt(id));

    // object layanan
    const services = [
      {
        title: "Artikel",
        image: "../images/dashboardDev-layanan-artikel.png",
        link:"../pages/artikelDev",
      },
      {
        title: "Konsultasi",
        image: "../images/dashboardDev-layanan-konsultasi.png",
        link:"../pages/konsultasiDev",
      },
    ];

  return (
    <div>
      <NavBar />
      <main className="mt-16">
        <section className="relative text-center pt-10">
          <img src="../images/atribut-dev.png" 
              alt="atribut developer" 
              className="absolute right-0"
          />
          <h1 className=" inline-block text-2xl font-bold text-center">SELAMAT DATANG <br /> DEVELOPER !!</h1>
        </section>
        {/* menmpilkan card profil */}
        {filteredTeams.map(team => (
          <section key={team.id} className="w-[208px] mx-auto items-center mt-[61px]">
            <img src={team.image} 
            alt="team image" 
            className="w-[205px] rounded-[10px] shadow-lg"
            />
            <h1 className="mt-4 text-xl font-bold text-center">{team.name}</h1>
            <h2 className="mt-2 text-lg text-center">{team.role}</h2>
          </section>
        ))}
        <h2 className="mt-[75px] px-[12px] font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-primary from-40% to-black/80">
          Layanan
        </h2>
        <section className="flex flex-col mb-[109px] items-center">
            {services.map((service) => (
              <CardLayanan key={service.title} {...service}></CardLayanan>
            ))}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const CardLayanan = ({ image, title, link}) => {
  return (
    <Link to={link} className="block w-[230px] mt-[74px] text-center bg-[#F7F2FA] rounded-xl shadow-cardShadow">    
      <img src={image} alt={title} className="w-[136px] mx-auto mt-[21px]" />    
      <h3 className="text-xl font-bold mt-[27px] mb-[38px]">{title}</h3>
    </Link>
  );
};

export default DashboardDev;

