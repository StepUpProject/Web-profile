import { useEffect, useState } from "react";
import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import SectionHead from "../components/Elements/SectionHead";
import TeamCard from "../components/Fragments/TeamCard";
import { teamLists } from "../data/teams.js";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";

AOS.init();

const Beranda = () => {
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
      // console.log(teamLists);
      setTeams(teamLists);
  }, [teams]);

  return (
    <div className="py-24">
      <NavBar />
      <section className="h-auto">
        <div
          className="flex flex-col ps-4"
          data-aos="fade-up"
          data-aos-duration="4000"
        >
          <SectionHead>Step Up Project</SectionHead>
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
            src="./images/mockup-2.png"
            className="w-full h-auto m-auto transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500"
            alt=""
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        </div>
      </section>
      <section className="h-auto">
        <div
          className="w-full ps-4 bg-slate-100 py-8"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <SectionHead>Layanan Kami</SectionHead>
          <div className="mt-7">
            {services.map((service) => (
              <CardLayanan key={service.title} {...service}></CardLayanan>
            ))}
          </div>
        </div>
      </section>
      <section className="h-auto">
        <div className="w-full ps-4 py-8">
          <SectionHead>Portfolio</SectionHead>
          <div className="mt-7 flex flex-col items-center">
            {portfolios.map((item) => (
              <Portfolio key={item.id} {...item}></Portfolio>
            ))}
          </div>
        </div>
      </section>
      <section className="h-auto">
        <div className="w-full ps-4 pt-8 bg-slate-100">
          <SectionHead>Pelanggan Kami</SectionHead>
          <div className="w-[564px] flex gap-4 overflow-x-auto no-scrollbar">
            {customers.map((item) =>(
              <img key={item.id} src={item.image} alt="" />
            ))}
          </div>
        </div>
      </section>

      <section className="h-auto">
        <div className="w-full ps-4 pt-8 pb-12 bg-slate-100">
          <SectionHead>Testimoni</SectionHead>
        <div className="flex flex-row items-center">
          <ReviewCard></ReviewCard>
        </div>
        </div>
      </section>
      
      <section className="h-auto">
        <div className="w-full ps-4 pt-14 pb-12 bg-white">
          <SectionHead>Tim Kami</SectionHead>
        <div className="grid grid-cols-2 gap-6 mt-6">
          {teams.map((item) => (
            <TeamCard key={item.id} {...item}></TeamCard>
          ))}
        </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};


const CardLayanan = (props) => {
  const { title, images, classname } = props;

  CardLayanan.propTypes = {
    title: PropTypes.string,
    images: PropTypes.string,
    classname: PropTypes.string,
  }

  return (
    <div className={`${classname}`}>
      <div className="flex flex-col h-[250px] w-[230px] rounded-2xl mb-8 shadow-md shadow-primary/50 hover:shadow-xl hover:shadow-primary/75 transition-all duration-700">
        <img src={images} alt={title} className="w-full h-[152px]" />
        <div className="flex m-auto">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
    </div>
  );
};
const Portfolio = (props) => {
  const { title, name, image, imgWidth, imgHeight, scale = "150" } = props;
  return (
    <div
      className="
    group flex flex-col pt-2 items-center justify-center mb-12 w-[285px] h-[286px] bg-[#E4FFFF] rounded-[50px]"
    >
      <div className="flex flex-col items-center mb-7">
        <img
          src={image}
          alt={name}
          className={`z-10 group-hover:scale-150 transition duration-1000`}
          style={{ width: `${imgWidth}px`, height: `${imgHeight}px` }}
        />
        <div className="w-[211px] h-[14px] bg-gradient-to-r from-white via-black to-white blur-[5px] rounded-full group-hover:translate-y-6 group-hover:blur-[7px] transition duration-1000"></div>
      </div>
      <div className="flex flex-col items-center group-hover:translate-y-3 transition duration-1000">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-primary">{name}</p>
      </div>
    </div>
  );
};
const OurCustomer = (props) => {
  const { image } = props;
  return (
    <div className="flex h-[100px] w-min-[100px] items-center justify-center">
      <img src={image} alt="" className="" />
    </div>
  );
};
const ReviewCard = () => {
  return (
    <div className="mx-auto mt-6 ps-6 pt-3 bg-white w-[292px] h-[168px] rounded-xl border-2 border-slate-500 relative 
    drop-shadow-[2px_17px_10px_rgba(0,172,193,0.4)] ">
      <div className="flex flex-col">
        <p className="font-bold text-2xl text-primary text-wrap">"</p>
        <p className="text-sm text-pale mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
        <div className="flex flex-row items-center min-h-7 max-h-7 h-full absolute bottom-4">
          <img src="./images/pelanggan-1.png" alt="" className="h-7 w-7" />
          <p className="text-sm font-bold">Cewek</p>
        </div>
      </div>
    </div>
  );
};


export default Beranda;
