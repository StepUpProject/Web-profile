import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../components/Elements/Button/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useVerifyUser from "../hooks/useVerifyUser";
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
    <div className="relative mt-24">
      <NavBar />
      <section className="h-auto">
        <div className="w-full text-center mt-10">
          <h1 className=" inline-block text-xl font-bold text-center">
            SELAMAT DATANG <br /> DEVELOPER !!
          </h1>
          {/* ini harusnya menampilkan card user nya */}
          <div>{user}</div>
        </div>
      </section>
      <section className="mt-16 font-body">
        <h2 className="mt-[75px] px-[12px] font-bold text-xl text-primary text-center">
          Layanan
        </h2>
        <section className="flex flex-col mb-[109px] items-center">
          {services.map((service) => (
            <CardLayanan key={service.title} {...service}></CardLayanan>
          ))}
        </section>
      </section>
      <form onSubmit={handleLogout} className="w-full mx-auto">
        <Button
          type="submit"
          classname="absolute bottom-[258px] right-[80px] py-2 px-10 bg-primary rounded-full"
        >
          Logout
        </Button>
      </form>
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
      className="block w-[230px] mt-[74px] text-center bg-[#F7F2FA] rounded-xl shadow-cardShadow"
    >
      <img src={images} alt={title} className="w-[136px] mx-auto mt-[21px]" />
      <h3 className="text-xl font-bold mt-[27px] mb-[38px]">{title}</h3>
    </Link>
  );
};

export default BerandaDev;
