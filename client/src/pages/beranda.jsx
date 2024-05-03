import { useEffect, useState } from "react";
import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import SectionHead from "../components/Elements/SectionHead";
import TeamCard from "../components/Fragments/TeamCard";
import { teamLists } from "../data/teams.js";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { portfolioData } from "../data/portfolio";

AOS.init();

const Beranda = () => {
  const services = [
    {
      title: "Aplikasi Web",
      images: "./images/layanan-website.png",
      value: "pembuatan dan pengelolaan aplikasi website",
      // classname: "ps-5",
    },
    {
      title: "Artikel",
      images: "./images/layanan-artikel.png",
      value: "artikel yang informatif dan berkualitas",
      // classname: "ps-20",
    },
    {
      title: "Konten Digital",
      images: "/images/layanan-sosmed.png",
      value: "konten sosial media yang  berkualitas",
      // classname: "ps-5",
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

  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    setPortfolios(portfolioData);
  }, [portfolios]);

  return (
    <div className="flex flex-col min-h-screen mt-24">
      <NavBar />
      <section className="h-auto md">
        <div className="md:flex md:flex-row md:ps-32 md:h-screen">
          <div
            className="flex flex-col ps-2 md:pt-32 w-full"
            // data-aos="fade-up"
            // data-aos-duration="4000"
          >
            <SectionHead classname="md:text-start md:text-3xl">
              Step Up Project
            </SectionHead>
            <h3 className="w-full text-2xl font-bold mt-5 md:text-[64px] md:mb-6">
              Step Up <span className="text-primary">Code Up.</span>
            </h3>
            <p className="mt-6 pe-11 md:w-10/12">
              Step Up Project hadir sebagai digitalisasi bisnis, pengembangan
              dan pengelolaan aplikasi web, dan juga sebagai edukasi seputar
              dunia IT
            </p>
            <button className="w-[148px] h-[40px] text-sm font-normal mt-10 text-white bg-primary rounded-full transition hover:shadow-lg hover:shadow-primary/50 hover:bg-gradient-to-l from-primary to-[#2B3087] duration-300">
              Konsultasi Sekarang
            </button>
          </div>
          <div className="w-full md:w-[90%] h-auto me-20 mb-[53px] bg-[url('./images/vector-2.png')] md:bg-[url('./images/vector-2-lg.png')] bg-contain md:scale-90 bg-no-repeat mt-10 md:mt-28 relative">
            <img
              src="./images/mockup-5.png"
              className="w-full h-auto m-auto md:scale-75 md:-mt-16"
              alt=""
              // data-aos="fade-left"
              // data-aos-duration="1000"
            />
            <img
              src="./images/frame-footer-2.png"
              className="m-auto -top-36 right-28 scale-125 transition ease-in-out hidden md:block absolute"
              alt=""
              // data-aos="fade-left"
              // data-aos-duration="1000"
            />
          </div>
        </div>
      </section>
      <section className="h-auto">
        <div
          className="w-full ps-4 md:px-4 bg-[#f8f8f8] py-8"
          // data-aos="fade-up"
          // data-aos-duration="3000"
        >
          <SectionHead>Layanan Kami</SectionHead>
          <div className="flex flex-col md:flex-row md:gap-14 md:ps-32 md:w-11/12 md:items-center md:justify-center items-center mt-7">
            {services.map((service) => (
              <CardLayanan key={service.title} {...service}></CardLayanan>
            ))}
          </div>
        </div>
      </section>
      <section className="h-auto pb-16 md:pb-24">
        <div className="w-full px-6 py-8">
          <SectionHead>Portfolio</SectionHead>
          <div className="mt-7 flex flex-col md:flex-row md:justify-center flex-wrap gap-[70px] md:gap-36 md:mt-16 items-center">
            {portfolios.map((item) => (
              <Portfolio key={item.id} {...item}></Portfolio>
            ))}
          </div>
        </div>
      </section>
      <section className="h-auto">
        <div className="w-full ps-4 py-8 bg-slate-100">
          <SectionHead>Pelanggan Kami</SectionHead>
          <div className="w-full flex justify-center items-center gap-4 overflow-x-scroll">
            {customers.map((item) => (
              <img key={item.id} src={item.image} alt="" />
            ))}
          </div>
        </div>
      </section>

      <section className="h-auto">
        <div className="w-full ps-4 pt-8 pb-12 bg-white">
          <SectionHead>Testimoni</SectionHead>
          <div className="flex flex-row items-center">
            <ReviewCard></ReviewCard>
          </div>
        </div>
      </section>

      <section className="h-auto">
        <div className="w-full pt-14 pb-12 bg-white ">
          <SectionHead>Tim Kami</SectionHead>
          <div
            className="grid grid-cols-2 justify-items-center mx-auto gap-6 gap-y-8 mt-4 md:grid-cols-3 md:mx-auto md:gap-8 md:gap-y-12 md:px-20
          lg:gap-20"
          >
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
  const { title, images, classname, value } = props;

  CardLayanan.propTypes = {
    title: PropTypes.string,
    images: PropTypes.string,
    classname: PropTypes.string,
  };

  return (
    <div className={`flex justify-center items-center w-[75%]`}>
      <div className="flex flex-col pe-5 h-[216px] w-full ps-9 pt-8 rounded-2xl mb-8 border-b-4 border-primary shadow-lg shadow-slate-400 hover:shadow-xl hover:shadow-primary/75 transition-all duration-700">
        <img src={images} alt={title} className="w-[45px] h-[45px] mb-3" />
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <p className="text-sm">{value}</p>
      </div>
    </div>
  );
};

const Portfolio = (props) => {
  const { subtitle, title, imageCard } = props;
  return (
    <div className="flex flex-col px-5 pt-4 relative shadow-lg shadow-slate-400 h-[216px] md:scale-110 rounded-lg">
      <h2 className="text-sm font-semibold">{subtitle}</h2>
      <h1 className="text-lg font-bold">{title}</h1>
      <div className="relative bottom-0 px-5 w-[267px] h-[182px]">
        <img
          src={imageCard}
          alt="mockup"
          className="w-full absolute -right-0.5 top-4"
        />
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
    <div
      className="mx-auto mt-6 ps-6 bg-white w-[292px] h-[168px] md:h-[342px] md:w-[75%] rounded-xl border-2 border-slate-500 relative 
    drop-shadow-[2px_17px_10px_rgba(0,172,193,0.4)] "
    >
      <div className="flex flex-row items-center w-full h-full py-4">
        <img
          src="./images/testimoni/pp-1.png"
          alt=""
          className="h-20 w-20 md:h-40 md:w-40"
        />
        <div className="flex flex-col">
          <p className="md:h-[50%] pe-1 md:pe-5 ps-7 text-xs md:text-sm text-pale mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Pariatur similique non
            vel. Lorem ipsum dolor sit,
            <span className="hidden md:block">
              amet consectetur adipisicing elit. Quas eligendi sunt recusandae
              est, doloribus laborum fugit, quia quod tempore error facere animi
              dolorem libero alias ducimus quisquam accusantium accusamus
              repellendus! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Aspernatur exercitationem debitis vero explicabo tempora
              dolores in iste quod enim. Fuga voluptatum sunt optio quaerat
              rerum expedita tenetur quam consequuntur commodi laudantium,
              officiis voluptatem odit. Facere magnam repudiandae dicta suscipit
              aspernatur voluptatem, dolores cum, necessitatibus incidunt, ut
              doloremque ullam laborum nostrum!
            </span>
          </p>
          <div className="flex flex-row items-center min-h-7 max-h-7 h-full absolute bottom-4">
            <p className="text-sm font-bold">Al Ikhsan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
