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
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useVerifyUser from "../hooks/useVerifyUser";
import StylizedFrame from "../components/Elements/StylizedFrame";
AOS.init();

const BerandaDev = () => {
  const user = useVerifyUser();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);


  useEffect(() => {
    if (!cookies.jwt) {
      navigate("/login");
    }
  })
  const handleLogout = () => {
    removeCookie("jwt");
    navigate("/login");
  };

  // Ngambil data team card
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    getTeams((data) => {
      setTeams(data);
    });
  }, []);

  // Filter tim berdasarkan email pengguna
  const userTeam = teams.find((team) => team.email === user);

  const services = [
    {
      title: "Artikel",
      images: "../images/dashboardDev-layanan-artikel.png",
      classname: "ps-20",
      link: "../article",
    },
    {
      title: "Konsultasi",
      images: "../images/dashboardDev-layanan-konsultasi.png",
      classname: "ps-5",
      link: "/developer/konsultasi",
    },
  ];

  return (
    <div className="font-body flex flex-col min-h-screen mt-24 md:mt-0">
      <NavBar />
      <StylizedFrame
        urlImage="../images/stylized-frame-2-right.png"
        classname="hidden absolute right-[90px] top-[-60px] md:block md:w-[100px] lg:w-[159px] lg:right-[120px]"
      ></StylizedFrame>
      <section className="h-auto">
        <div className="w-full text-center mt-10 md:mt-0">
          <h1 className="inline-block text-xl font-bold text-center mb-16 md:hidden">
            SELAMAT DATANG <br /> DEVELOPER !!
          </h1>
          {/* Menampilkan data developer */}
          {userTeam && (
            <div className="md:mt-[178px] md:px-20">
              <div className="md:flex md:justify-center md:items-center md:gap-10 lg:justify-start lg:ps-28">
                <img
                  src={userTeam.image}
                  alt={userTeam.name}
                  className="w-[210px] h-[200px] mx-auto rounded-xl shadow-buttonShadow mb-5
              md:m-0 lg:w-[400px] lg:h-[390px]"
                />
                <div className="md:flex md:flex-col md:gap-5 md:items-start md:text-left box-border">
                  <p className="font-bold text-lg md:text-xl md:overflow-wrap-normal lg:text-4xl">
                    {userTeam.name}
                  </p>
                  <p className="lg:text-2xl lg:text-primary lg:font-medium">
                    {userTeam.role}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="mt-16 font-body">
        <h2 className="mt-[75px] px-[12px] font-bold text-xl text-primary text-center md:text-2xl lg:text-3xl lg:text-black">
          Layanan
        </h2>
        <section className="flex flex-col mb-[109px] items-center md:flex-row md:px-20 md:justify-center md:gap-20 lg:gap-40">
          {services.map((service) => (
            <CardLayanan key={service.title} {...service}></CardLayanan>
          ))}
        </section>
      </section>
      <form onSubmit={handleLogout} className="w-full mx-auto">
        <Button
          type="submit"
          classname="absolute z-50 bottom-[274px] right-[80px] py-2 px-10 bg-primary rounded-full
          md:right-[450px] md:bottom-[88px] lg:right-[1130px] lg:bottom-[98px]"
        >
          Logout
        </Button>
      </form>
      <StylizedFrame
        urlImage="../images/stylized-frame-3-left.png"
        classname="hidden absolute left-[0px] top-[240px] md:z-10 md:block md:w-[60px] lg:w-[80px] lg:top-[420px]"
      ></StylizedFrame>
      <Footer />
    </div>
  );
};

const CardLayanan = ({ images, title, link }) => {
  CardLayanan.propTypes = {
    images: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
  };

  return (
    <Link
      to={link}
      className="block w-[230px] mt-[74px] text-center bg-[#F7F2FA] rounded-xl shadow-cardShadow lg:w-[360px] lg:h-[400px]"
    >
      <img
        src={images}
        alt={title}
        className="w-[136px] mx-auto mt-[21px] lg:w-[200px] lg:mt-[30px]"
      />
      <h3 className="text-xl font-bold mt-[27px] mb-[38px] lg:text-3xl lg:mt-[34px]">
        {title}
      </h3>
    </Link>
  );
};

export default BerandaDev;
