import Navbar from "../components/Fragments/Navbar";
import HeadTitle from "../components/Elements/HeadTitle";
import FormKonsultasi from "../components/Fragments/FormKonsultasi";
import Footer from "../components/Fragments/Footer";
import StylizedFrame from "../components/Elements/StylizedFrame";

const Konsultasi = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <StylizedFrame
        urlImage="../images/stylized-frame-2-right.png"
        classname="hidden absolute right-[90px] top-[80px] md:block md:w-[100px] lg:w-[139px]"
      ></StylizedFrame>
      <main className="w-full md:px-20 md:pt-6 lg:px-64">
        <HeadTitle>Konsultasi</HeadTitle>
        <div className="flex px-4 mb-8 justify-center items-center">
          <p className="text-sm text-slate-950 text-center lg:text-lg lg:px-16">
            Wujudkan ide brilian Anda dengan bantuan tim kami. kontak kami
            sekarang untuk memulai pencapaian sukses aplikasi Anda! 🚀
          </p>
        </div>
        <div className="flex justify-center w-full px-4">
          <div className="w-full p-2 lg:px-28">
            <FormKonsultasi></FormKonsultasi>
          </div>
        </div>
      </main>
      <StylizedFrame
        urlImage="../images/stylized-frame-3-left.png"
        classname="hidden absolute left-0 bottom-[380px] md:block md:w-[50px] lg:w-[210px]"
      ></StylizedFrame>
      <Footer></Footer>
    </div>
  );
};

export default Konsultasi;
