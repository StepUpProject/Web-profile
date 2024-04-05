import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import { getTeams } from "../services/team.service";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../components/Elements/Button/Button";
AOS.init();

const BerandaDev = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      }else{
        const { data } = await axios.post(
          `http://localhost:3000/`,
          {},
          { withCredentials: true, },
        );
        setUser(data.user);
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        }
      }
    }
    verifyUser()
  },[cookies, navigate, removeCookie])

  const handleLogout = () => {
    removeCookie("jwt");
    navigate("/login");
  }

  const services = [
    {
      title: "Aplikasi Web",
      images: "./images/layanan-appweb.png",
      classname: "ps-5",
    },
    {
      title: "Artikel",
      images: "./images/layanan-artikel.png",
      classname: "ps-20",
    },
    {
      title: "Konten Digital",
      images: "/images/layanan-sosmed.png",
      classname: "ps-5",
    },
  ];
  const portfolios = [
    {
      id: 1,
      title: "E-Commerce",
      name: "Shopee",
      image: "./images/mockup-3.png",
      imgHeight: 153,
      imgWidth: 74,
      scale: 150,
    },
    {
      id: 2,
      title: "E-Commerce",
      name: "Shopee",
      image: "./images/mockup-4.png",
      imgHeight: 122,
      imgWidth: 200,
      scale: 125,
    },
  ];
  const customers = [
    {
      id: 1,
      image: "./images/pelanggan-1.png",
    },
    {
      id: 2,
      image: "./images/pelanggan-1.png",
    },
    {
      id: 3,
      image: "./images/pelanggan-1.png",
    },
    {
      id: 4,
      image: "./images/pelanggan-1.png",
    },
    {
      id: 5,
      image: "./images/pelanggan-1.png",
    },
    {
      id: 6,
      image: "./images/pelanggan-1.png",
    },
    {
      id: 7,
      image: "./images/pelanggan-1.png",
    },
  ];
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    getTeams((data) => {
      setTeams(data);
    });
  }, []);
  
  

  return (
    <div className="py-24">
      <NavBar />
      
      <section className="h-auto">
        <div
          className="flex flex-col ps-4"
          data-aos="fade-up"
          data-aos-duration="4000"
        >
            <form onSubmit={handleLogout} className="mt-10 w-full mx-auto">
              <Button type="submit" classname="w-full my-10 bg-primary rounded-full">
                Logout
              </Button>
            </form>
            <SectionHead>Step Up Project - {user}</SectionHead>
            <h3 className="text-2xl font-bold mt-5">Step Up, Code Up</h3>
            <p className="mt-6 pe-11">
              Step Up Project hadir sebagai digitalisasi bisnis, pengembangan dan
              pengelolaan aplikasi web, dan juga sebagai edukasi seputar dunia IT
            </p>
            <button className="w-[148px] h-[40px] text-sm font-normal mt-10 text-white bg-primary rounded-full transition hover:shadow-lg hover:shadow-primary/50 hover:bg-gradient-to-l from-primary to-[#2B3087] duration-300">
              Konsultasi Sekarang
            </button>
        </div>
        <div className="w-full h-80 mb-[53px] bg-[url('./images/vector-1.png')] bg-no-repeat mt-10">
          <img
            src="../images/atribut-dev.png"
            alt="atribut developer"
            className="absolute right-0"
          />
          <h1 className=" inline-block text-2xl font-bold text-center">
            SELAMAT DATANG <br /> DEVELOPER !!
          </h1>
        </div>
        </section>
        {/* menmpilkan card profil */}
        {teams.map((team) => (
          <section
            key={team.id}
            className="w-[208px] mx-auto items-center mt-[61px]"
          >
            <img
              src={team.image}
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
      <Footer />
    </div>
  );
};

const CardLayanan = ({ image, title, link }) => {
  CardLayanan.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
  };

  return (
    <Link
      to={link}
      className="block w-[230px] mt-[74px] text-center bg-[#F7F2FA] rounded-xl shadow-cardShadow"
    >
      <img src={image} alt={title} className="w-[136px] mx-auto mt-[21px]" />
      <h3 className="text-xl font-bold mt-[27px] mb-[38px]">{title}</h3>
    </Link>
  );
};

export default BerandaDev;
