import { useEffect, useState } from "react";
import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import SectionHead from "../components/Elements/SectionHead";
import TeamCard from "../components/Fragments/TeamCard";
import { teamLists } from "../data/teams.js";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import useVerifyUser from "../hooks/useVerifyUser";

AOS.init();

const Beranda = () => {
  const user = useVerifyUser();
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    setTeams(teamLists);
  }, [teams]);

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
  const portfolios = [
    {
      id: 1,
      client: "Bank Central Indonesia",
      title: "Website Arstitek Rumah",
      image: "./images/portfolio-card-1.png",
    },
    {
      id: 2,
      client: "Warung Makan Kokoh",
      title: "Website Catering",
      image: "./images/portfolio-card-2.png",
    },
    {
      id: 3,
      client: "Bank Central Indonesia",
      title: "Website Arstitek Rumah",
      image: "./images/portfolio-card-1.png",
    },
    {
      id: 4,
      client: "Warung Makan Kokoh",
      title: "Website Catering",
      image: "./images/portfolio-card-2.png",
    },
  ];
  const customers = [
    {
      id: 1,
      image: "./images/pelanggan-1.png",
    },
    {
      id: 2,
      image: "./images/pelanggan-2.png",
    },
    {
      id: 3,
      image: "./images/pelanggan-3.png",
    },
    {
      id: 4,
      image: "./images/pelanggan-4.png",
    },
    {
      id: 5,
      image: "./images/pelanggan-5.png",
    },
  ];
  const testimonies = [
    {
      id: 1,
      image: "./images/testimoni/pp-1.png",
      reviewer: "Al Ikhsan",
      review:
        "Saya sangat senang dengan jasa yang diberikan oleh StepUp Project, proses penggunaannya sangat mudah dan cepat. Selamat kerja dan terus membantu klien-klien yang membutuhkan bantuan.",
      longReview:
        "StepUp Project sudah membantu saya dan keluarga dalam berbagai kebutuhan, dari konsultasi bisnis, hingga konsultasi teknis. Proses yang dilakukannya sangat mudah dan cepat. Saya sangat puas dengan layanan yang diberikan dan akan selalu menggunakan jasa StepUp Project.",
    },
    {
      id: 2,
      image: "./images/testimoni/pp-2.png",
      reviewer: "Ikhlas",
      review:
        "Layanan StepUp Project sangat membantu saya dalam konsultasi bisnis, jasa yang diberikan sangat bagus dan sesuai dengan kebutuhan.",
      longReview:
        "Saya sangat puas dengan layanan yang diberikan oleh StepUp Project, proses penggunaannya sangat mudah dan cepat. Jasa yang diberikan sangat sesuai dengan kebutuhan dan kami sangat senang dengan pelayanan yang diberikan. Kami akan terus menggunakan jasa StepUp Project.",
    },
    {
      id: 3,
      image: "./images/testimoni/pp-3.png",
      reviewer: "Yoga",
      review:
        "Layanan StepUp Project sangat membantu saya dalam konsultasi teknis, jasa yang diberikan sangat bagus dan sesuai dengan kebutuhan.",
      longReview:
        "Saya sangat puas dengan layanan yang diberikan oleh StepUp Project, proses penggunaannya sangat mudah dan cepat. Jasa yang diberikan sangat sesuai dengan kebutuhan dan kami sangat senang dengan pelayanan yang diberikan. Kami akan terus menggunakan jasa StepUp Project.",
    },
  ];

  return (
    <div className="py-24">
      <NavBar user={user} />
      <section className="h-auto md">
        <div className="md:flex md:flex-row md:ps-16 lg:ps-32 md:h-screen">
          <div className="flex flex-col ps-2 md:pt-32 w-full">
            <SectionHead classname="md:text-start md:text-3xl">
              Step Up Project
            </SectionHead>
            <h3 className="w-full text-2xl font-bold mt-5 md:text-[52px] lg:text-[64px] lg:mb-6 md:flex md:flex-col md:gap-8 lg:gap-2 lg:flex-row">
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
          <div className="w-full md:w-full lg:w-[90%] h-auto me-20 mb-[53px] bg-[url('./images/vector-2.png')] md:bg-[url('./images/vector-2-lg.png')] bg-contain md:scale-90 bg-no-repeat mt-10 md:mt-52 lg:mt-28 relative ">
            <img
              src="./images/mockup-5.png"
              className="w-full h-auto m-auto md:scale-125 lg:scale-75 lg:-mt-16"
              alt=""
            />
            <img
              src="./images/frame-footer-2.png"
              className="m-auto -top-36 right-28 scale-125 transition ease-in-out hidden md:block absolute"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="h-auto">
        <div className="w-full ps-4 md:px-4 bg-[#f8f8f8] py-8">
          <SectionHead>Layanan Kami</SectionHead>
          <div className="flex flex-col md:col-span-2 lg:flex-row md:gap-14 md:ps-32 md:w-11/12 md:items-center md:justify-center items-center mt-7">
            {services.map((service) => (
              <CardLayanan key={service.title} {...service}></CardLayanan>
            ))}
          </div>
        </div>
      </section>
      <section className="h-auto pb-16 md:pb-24">
        <div className="w-full px-6 py-8">
          <SectionHead>Portfolio</SectionHead>
          <div className="mt-7 flex flex-col md:grid md:grid-cols-2 md:place-items-center lg:flex lg:flex-row lg:grid-cols-none md:justify-center flex-wrap gap-[70px] md:gap-x-12 md:gap-y-32 lg:gap-36 md:mt-16 items-center">
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
          <div className="flex flex-row items-center justify-start gap-4 overflow-x-scroll">
            {testimonies.map((item) => (
              <ReviewCard key={item.id} {...item}></ReviewCard>
            ))}
          </div>
        </div>
      </section>

      <section className="h-auto">
        <div className="w-full ps-4 pt-14 pb-12 bg-white">
          <SectionHead>Tim Kami</SectionHead>
          <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-6 mt-6">
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
  const { client, title, image } = props;
  return (
    <div className="flex flex-col px-5 pt-4 relative shadow-lg shadow-slate-400 md:max-w-[312px] h-[216px] lg:scale-110 rounded-lg">
      <h2 className="text-sm font-semibold">{client}</h2>
      <h1 className="text-lg font-bold">{title}</h1>
      <div className="relative bottom-0 px-5 w-[267px] h-[182px]">
        <img
          src={image}
          alt="mockup"
          className="w-full absolute -right-0.5 top-4"
        />
      </div>
    </div>
  );
};
const ReviewCard = ({ image, reviewer, review, longReview }) => {
  return (
    <div
      className="mx-auto mt-6 ps-6 bg-white min-w-[319px] md:min-w-[700px] lg:min-w-[1087px] h-[168px] md:h-[342px] md:w-[75%] rounded-xl border-2 border-slate-500 relative 
      drop-shadow-[2px_17px_10px_rgba(0,172,193,0.4)] "
    >
      <div className="flex flex-row items-center w-full h-full py-4">
        <img src={image} alt="" className="h-20 w-20 md:h-40 md:w-40" />
        <div className="flex flex-col ps-4">
          <p className="md:h-[50%] pe-1 md:pe-5 text-xs md:text-lg text-pale mb-3 overflow-y-hidden">
            {review}
            <span className="hidden md:block lg:hidden">{longReview.slice(0, 100)}...</span>
            <span className="hidden lg:block">{longReview.slice(0, 200)}...</span>
          </p>
            <p className="text-sm md:text-2xl font-bold">{reviewer}</p>
        </div>
      </div>
    </div>
  );
};
export default Beranda;
