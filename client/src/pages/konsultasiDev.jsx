// import Navbar from "../components/Fragments/Navbar";
import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getConsultations } from "../services/konsultasi.service";
import StylizedFrame from "../components/Elements/StylizedFrame";

const KonsultasiDev = () => {
  // memanggil object konsultasi
  const [consultations, setConsultations] = useState([]);
  useEffect(() => {
    getConsultations((data) => {
      setConsultations(data);
    });
  }, []);

  return (
    <div className="font-body flex flex-col min-h-screen">
      <Navbar />
      <StylizedFrame
        urlImage="../images/stylized-frame-2-right.png"
        classname="hidden absolute right-[90px] top-[60px] lg:block md:w-[100px] lg:w-[159px] lg:right-[120px]"
      ></StylizedFrame>
      <main className="mt-16 font-body lg:px-28">
        <section className="relative text-center pt-10">
          <h1 className=" inline-block text-xl font-bold text-center lg:text-2xl lg:mt-20">
            KONSULTASI
          </h1>
        </section>
        <h3 className="text-lg mt-16 px-4 lg:text-xl">List Konsultasi :</h3>
        <article className="mt-9 mb-24">
          {/* header untuk tampilan dekstop */}
          <section className="hidden lg:flex">
            <div className="w-[43%] box-border text-sm border border-primary bg-primary p-4 text-white rounded-tl-2xl">
              Nama
            </div>
            <div className="w-[43%] box-border text-sm border border-primary bg-primary p-4 text-white">
              Email
            </div>
            <div className="w-[43%] box-border text-sm border border-primary bg-primary p-4 text-white">
              Pertanyaan
            </div>
            <div className="w-[43%] box-border text-sm border border-primary bg-primary p-4 text-white rounded-tr-2xl">
              Waktu Pengisian
            </div>
          </section>
          {/* Menampilkan daftar konsultasi */}
          {consultations.map((consultation) => (
            <CardKonsultasi key={consultation.id} {...consultation} />
          ))}
        </article>
      </main>
      <Footer />
    </div>
  );
};

const CardKonsultasi = ({ name, email, question, date, time }) => {
  CardKonsultasi.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    question: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
  };

  return (
    <section className="font-body flex-col flex gap-0">
      <section className="lg:flex">
        {/* nama */}
        <div className="flex lg:w-full">
          <div className="w-[43%] box-border text-sm border border-primary bg-primary p-4 text-white lg:hidden">
            Nama
          </div>
          <div className="w-[60%] box-border text-sm bg-white p-4 text-black  lg:w-full">
            {name}
          </div>
        </div>
        {/* email */}
        <div className="flex lg:w-full">
          <div className="w-[43%] box-border text-sm border border-primary bg-primary p-4 text-white lg:hidden">
            Email
          </div>
          <div className="w-[60%] box-border truncate text-sm bg-white p-4 text-black  lg:w-full">
            {email}
          </div>
        </div>
        {/* Pertanyaan */}
        <div className="flex lg:w-full">
          <div className="w-[43%] box-border text-sm border border-primary bg-primary p-4 text-white lg:hidden">
            Pertanyaan
          </div>
          <div className="w-[60%] box-border text-sm bg-white p-4 text-black  lg:w-full">
            {question}
          </div>
        </div>
        {/* Waktu Pengisian */}
        <div className="flex lg:w-full">
          <div className="w-[43%] box-border text-sm border border-primary bg-primary p-4 text-white lg:hidden">
            Waktu Pengisian
          </div>
          <div className="w-[60%] box-border text-sm bg-white p-4 text-black  lg:w-full">
            {date} <br />
            {time}
          </div>
        </div>
      </section>
      <div className="w-full h-1 bg-[#E9E9E9] lg:hidden"></div>
    </section>
  );
};

export default KonsultasiDev;
