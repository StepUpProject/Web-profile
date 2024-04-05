import { useEffect, useState } from "react";
import HeadTitle from "../components/Elements/HeadTitle";
import SectionHead from "../components/Elements/SectionHead";
import VideoPlayer from "../components/Elements/VideoPlayer";
import Footer from "../components/Fragments/Footer";
import Navbar from "../components/Fragments/Navbar";
import TeamCard from "../components/Fragments/TeamCard";
import { getTeams } from "../services/team.service";
import PropTypes from "prop-types";

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
    getTeams((data) => {
      setTeams(data);
    });
  });
  return (
    <>
      <Navbar></Navbar>
      <HeadTitle>Tentang Kami</HeadTitle>
      <div className="flex flex-col justify-center font-body">
        <div className="w-full flex justify-center items-center box-border ">
          <VideoPlayer></VideoPlayer>
        </div>
        <section className="px-5 pb-10">
          <SectionHead classname="mt-4 mb-8">Step Up Project</SectionHead>
          <div className="text-sm text-black/80 font-normal">
            <p>
              Step Up Project adalah sebuah komunitas yang bergerak untuk
              digitalisasi bisnis dan organisasi melalui pengembangan dan
              pengelolaan aplikasi web yang professional dan terpercaya. Step Up
              Project juga hadir sebagai edukasi seputar dunia IT dengan
              informasi terupdate yang disajikan dalam artikel dan konten
              digital kami.
            </p>
            <p className="mt-4">
              Semua itu kami capai dengan menggunakan teknologi dan proses
              terbaik seuai dengan perkembangan dunia IT. Hal ini memastikan
              layanan yang kami berikan adalah solusi terbaik untuk anda.
            </p>
          </div>
        </section>
        <section className="pt-8 pb-10 w-full ps-4 pe-12">
          <SectionHead classname="mb-5">Nilai Yang Kami Terapkan</SectionHead>
          {values.map((value, index) => (
            <Value key={index} value={value} />
          ))}
        </section>
        <section className="mt-14 w-full ps-10 pe-12">
          <SectionHead classname="mb-5">Tim Kami</SectionHead>
        </section>
        <div className="grid grid-cols-2 mx-auto gap-6 gap-y-8 mt-4">
            {teams.map((team, index) => (
              <TeamCard key={index} {...team} />
            ))}
          </div>
      </div>
      <Footer></Footer>
    </>
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
