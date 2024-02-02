import HeadTitle from "../components/Elements/HeadTitle";
import SectionHead from "../components/Elements/SectionHead";
import VideoPlayer from "../components/Elements/VideoPlayer";
import Footer from "../components/Fragments/Footer";
import Navbar from "../components/Fragments/Navbar";

const Tentang = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeadTitle>Tentang Kami</HeadTitle>
      <div className="flex flex-col justify-center ps-5 ">
        <VideoPlayer></VideoPlayer>
        <SectionHead classname="py-8">Step Up Project</SectionHead>
      </div>
      <p className="text-sm font-light">
        Step Up Project adalah sebuah komunitas yang bergerak untuk digitalisasi
        bisnis dan organisasi melalui pengembangan dan pengelolaan aplikasi web
        yang professional dan terpercaya. Step Up Project juga hadir sebagai
        edukasi seputar dunia IT dengan informasi terupdate yang disajikan dalam
        artikel dan konten digital kami. 
      </p>
      <p>
            Semua itu kami capai dengan menggunakan
        teknologi dan proses terbaik seuai dengan perkembangan dunia IT. Hal ini
        memastikan layanan yang kami berikan adalah solusi terbaik untuk anda.
      </p>
      <Footer></Footer>
    </>
  );
};

export default Tentang;
