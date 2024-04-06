// import Navbar from "../components/Fragments/Navbar";
import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getConsultations } from "../services/konsultasi.service";

const KonsultasiDev = () => {
  // memanggil object konsultasi
  const [consultations, setConsultations] = useState([]);
  useEffect(() => {
    getConsultations((data) => {
      setConsultations(data);
    });
  }, []);

  return (
    <div>
      <Navbar/>
      <main className="mt-16 font-body">
        <section className="relative text-center pt-10">
          <h1 className=" inline-block text-xl font-bold text-center">
            KONSULTASI
          </h1>
        </section>
        <h3 className="text-lg mt-16 px-4">List Konsultasi :</h3>
        <article className="mt-9 mb-24">
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
    <section className="font-body flex flex-col gap-0">
      {/* nama */}
      <div className="flex">
        <div className="w-[43%] box-border text-sm border border-primary bg-primary p-4 text-white ">
          Nama
        </div>
        <div className="w-[60%] box-border text-sm bg-white p-4 text-black ">
          {name}
        </div>
      </div>
      {/* email */}
      <div className="flex">
        <div className="w-[43%] box-border text-sm border border-primary bg-primary p-4 text-white ">
          Email
        </div>
        <div className="w-[60%] box-border truncate text-sm bg-white p-4 text-black ">
          {email}
        </div>
      </div>
      {/* Pertanyaan */}
      <div className="flex">
        <div className="w-[43%] box-border text-sm border border-primary bg-primary p-4 text-white ">
          Pertanyaan
        </div>
        <div className="w-[60%] box-border text-sm bg-white p-4 text-black ">
          {question}
        </div>
      </div>
      {/* Waktu Pengisian */}
      <div className="flex">
        <div className="w-[43%] box-border text-sm border border-primary bg-primary p-4 text-white ">
          Waktu Pengisian
        </div>
        <div className="w-[60%] box-border text-sm bg-white p-4 text-black ">
          {date} <br />
          {time}
        </div>
      </div>
      <div className="w-full h-1 bg-[#E9E9E9]"></div>
    </section>
  );
};

export default KonsultasiDev;
