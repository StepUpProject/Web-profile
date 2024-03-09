// import Navbar from "../components/Fragments/Navbar";
import NavbarDev from "../components/Fragments/NavbarDev";
import Footer from "../components/Fragments/Footer";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getConsultations } from "../services/konsultasi.service";

const KonsultasiDev = () => {
  // // object layanan
  // const consultations = [
  //   {
  //     id: "1",
  //     name: "Muhammad Abdanul Ikhlas",
  //     email: "klaz@gmail.com",
  //     question:
  //       "Apa peran utama teknologi blockchain dalam industri IT saat ini ?",
  //     date: "30 Desember 2023",
  //     time: "03.21 AM",
  //   },
  //   {
  //     id: "2",
  //     name: "Muhammad Aditya Dwijaya",
  //     email: "ditz@gmail.com",
  //     question:
  //       "Apa langkah-langkah utama dalam merancang sebuah website yang responsif dan user-friendly?",
  //     date: "30 Januari 2024",
  //     time: "06.21 AM",
  //   },
  //   {
  //     id: "3",
  //     name: "Al Ikhsan Akbar Fatahillah",
  //     email: "sanz@gmail.com",
  //     question:
  //       "Bagaimana Anda mengukur keberhasilan sebuah website, dan alat apa yang biasa digunakan untuk menganalisis kinerja dan penggunaan pengguna?",
  //     date: "1 Februari 2024",
  //     time: "03.21 AM",
  //   },
  //   {
  //     id: "4",
  //     name: "Yoga Agatha Pasaribu",
  //     email: "yogz@gmail.com",
  //     question: "Apakah nanti AI bakal menguasai dunia?",
  //     date: "5 Februari 2024",
  //     time: "01.21 AM",
  //   },
  //   {
  //     id: "5",
  //     name: "Hadi Hasan Lubis",
  //     email: "hasanz@gmail.com",
  //     question: "Rawrrrrr",
  //     date: "10 Februari 2024",
  //     time: "08.21 AM",
  //   },
  //   {
  //     id: "6",
  //     name: "Muhammad Riyadhy ",
  //     email: "yaddz@gmail.com",
  //     question: "Tutor jago main epep dong kaks",
  //     date: "20 Februari 2024",
  //     time: "11.00 PM",
  //   },
  // ];

  // memanggil object konsultasi
  const [consultations, setConsultations] = useState([]);
  useEffect(() => {
    getConsultations((data) => {
      setConsultations(data);
    });
  }, []);

  return (
    <div>
      <NavbarDev />
      <main className="mt-16 font-body">
        <section className="relative text-center pt-10">
          <img
            src="../images/atribut-dev.png"
            alt="atribut developer"
            className="absolute right-0"
          />
          <h1 className=" inline-block text-2xl font-bold text-center">
            KONSULTASI
          </h1>
        </section>
        <h3 className="text-lg mt-10 px-4">List Konsultasi :</h3>
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
        <div className="w-[60%] box-border text-sm bg-white p-4 text-black ">
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
