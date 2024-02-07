import Navbar from "../components/Fragments/Navbar";
import HeadTitle from "../components/Elements/HeadTitle";
import FormKonsultasi from "../components/Fragments/FormKonsultasi";
import Footer from "../components/Fragments/Footer";

const Konsultasi = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
      <HeadTitle>Konsultasi</HeadTitle>
      <div className="flex px-4 mb-8 justify-center items-center">
        <p className="text-sm text-slate-950 text-center">
          Wujudkan ide brilian Anda dengan bantuan tim kami. kontak kami
          sekarang untuk memulai pencapaian sukses aplikasi Anda! 🚀
        </p>
      </div>
      <div className="flex justify-center w-full px-4">
        <div className="w-full p-2">
          <FormKonsultasi></FormKonsultasi>
        </div>
      </div>
        <div className="w-full mt-20">
          <Footer></Footer>
        </div>
      </div>
      
    </>
  );
};

export default Konsultasi;
