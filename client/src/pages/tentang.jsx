import { useEffect, useState } from "react";
import HeadTitle from "../components/Elements/HeadTitle";
import SectionHead from "../components/Elements/SectionHead";
import VideoPlayer from "../components/Elements/VideoPlayer";
import Footer from "../components/Fragments/Footer";
import Navbar from "../components/Fragments/Navbar";
import TeamCard from "../components/Fragments/TeamCard";
import { teamLists } from "../data/teams.js";
import PropTypes from "prop-types";
import StylizedFrame from "../components/Elements/StylizedFrame";

const Tentang = () => {
  const values = [
    "Mengutamakan kerjasama tim dalam segala proses pengembangan proyek",
    "Membangun lingkungan dengan poduktivitas yang konsisten",
    "Mengutamakan fokus dalam bekerja",
    "Menjalin komunikasi yang terbuka",
    "Mengembangkan skill individu & tim",
    "Memastikan tim berorientasi pada proses & hasil",
  ];
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    setTeams(teamLists);
  }, [teams]);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <main className="font-body md:relative">
        {/* perintilan tambahan untuk tampilan dekstop */}
        <StylizedFrame
          urlImage="../images/stylized-frame-3-left.png"
          classname="hidden md:block absolute left-0 md:top-[930px] lg:top-[1120px] w-[60px]"
        ></StylizedFrame>
        <StylizedFrame
          urlImage="../images/stylized-frame-2-right.png"
          classname="hidden md:block absolute md:right-[110px] md:bottom-[220px] md:w-[90px] lg:right-[170px] lg:bottom-[470px] lg:w-[110px]"
        ></StylizedFrame>
        <section className="md:px-20">
          <div className="md:mt-[125px]">
            <HeadTitle>Tentang Kami</HeadTitle>
          </div>
          {/* perintilan tambahan untuk tampilan dekstop */}
          <StylizedFrame
            urlImage="../images/stylized-frame-2-right.png"
            classname="hidden md:block absolute right-20 top-[-20px] w-[110px]"
          ></StylizedFrame>
          <div className="w-full flex justify-center items-center box-border ">
            <VideoPlayer></VideoPlayer>
          </div>
        </section>
        <div className="flex flex-col justify-center font-body">
          <article className="md:bg-[#F8F8F8] md:px-20 md:mt-8 md:pb-8 lg:pb-28">
            <SectionHead classname="mt-4 mb-8 md:mt-8">
              Step Up Project
            </SectionHead>
            <section className=" lg:flex lg:gap-12">
              <section className="px-5 pb-10  lg:w-[50%] lg:pb-0 lg:pe-14">
                <h3 className="hidden font-bold text-xl text-black font-body mb-2 lg:block lg:text-left">
                  Tentang Kami
                </h3>
                <div className="text-sm text-black/80 font-normal">
                  <p>
                    Step Up Project adalah sebuah komunitas yang bergerak untuk
                    digitalisasi bisnis dan organisasi melalui pengembangan dan
                    pengelolaan aplikasi web yang professional dan terpercaya.
                    Step Up Project juga hadir sebagai edukasi seputar dunia IT
                    dengan informasi terupdate yang disajikan dalam artikel dan
                    konten digital kami.
                  </p>
                  <p className="mt-4">
                    Semua itu kami capai dengan menggunakan teknologi dan proses
                    terbaik seuai dengan perkembangan dunia IT. Hal ini
                    memastikan layanan yang kami berikan adalah solusi terbaik
                    untuk anda.
                  </p>
                </div>
              </section>
              <section className="pt-8 pb-10 w-full ps-4 pe-12  lg:w-[50%] lg:pt-0 lg:pe-28 lg:pb-0">
                <h3
                  className="font-bold text-xl text-black text-center font-body mb-5 
                md:ps-11 lg:text-left lg:mb-2 lg:ps-0"
                >
                  Nilai Yang Kami Terapkan
                </h3>
                {values.map((value, index) => (
                  <div key={index} className="lg:mb-2">
                    <Value value={value} />
                    {index !== values.length - 1}
                  </div>
                ))}
              </section>
            </section>
          </article>
          <section className="mt-14 w-full ps-10 pe-12 md:px-20">
            <SectionHead classname="mb-5">Tim Kami</SectionHead>
          </section>
          <div
            className="grid grid-cols-2 mx-auto gap-6 gap-y-8 mt-4 md:grid-cols-3 md:mx-auto md:gap-8 md:gap-y-12 md:px-20
          lg:gap-20"
          >
            {teams.map((team, index) => (
              <TeamCard key={index} {...team} />
            ))}
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

const Value = ({ value }) => {
  Value.propTypes = {
    value: PropTypes.string.isRequired,
  };

  return (
    <div className="flex flex-row gap-3 justify-items-start">
      <img src="./svg/tick.svg" alt="" className="" />
      <p className="text-sm text-black/80">{value}</p>
    </div>
  );
};

export default Tentang;
