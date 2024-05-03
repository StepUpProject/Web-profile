import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import CardLayanan from "../components/Fragments/CardLayanan";
import StylizedFrame from "../components/Elements/StylizedFrame";

const Layanan = () => {
  // object card layanan
  const services = [
    {
      id: 1,
      image: "./images/layanan-website.png",
      title: "Aplikasi Web",
      content:
        "Step Up Project mitra terpercaya dalam pembuatan dan pengelolaan aplikasi website, dengan developer yang siap membantu mewujudkan ide anda menjadi aplikasi website yang fungsional, menarik, dan sesuai dengan kebutuhan bisnis Anda",
    },
    {
      id: 2,
      image: "./images/layanan-artikel.png",
      title: "Artikel",
      content:
        "Kami juga menyediakan layanan artikel yang informatif dan berkualitas untuk mendukung keberhasilan online Anda. Mari bersama, ciptakan kehadiran online yang tak terlupakan dan sukses",
    },
    {
      id: 3,
      image: "./images/layanan-sosmed.png",
      title: "Konten Digital",
      content:
        "Tidak hanya itu, kami juga spesialis dalam pembuatan konten digital. Konten berkualitas tinggi untuk memperkuat kehadiran online Anda. Mari tingkatkan kualitas dan daya tarik bisnis Anda bersama kami",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      {/* Style tambahan sesuai desain */}
      <StylizedFrame
        urlImage="../images/stylized-frame-1-right.png"
        classname="absolute right-0 top-[380px]"
      ></StylizedFrame>
      <h1 className="mt-[80px] text-2xl font-bold text-center md:mt-[140px] md:mb-[60px] lg:text-4xl">
        Layanan Kami
      </h1>
      <p
        className="mt-[30px] w-full text-xs font-body leading-4 text-black px-[12px] text-center
      md:mb-[60px] lg:text-lg"
      >
        Hadirkan solusi digital untuk mendukung efisiensi dan produktivitas
        bisnis. Sambut era digital bersama <br /> inovasi kami
      </p>
      {/* memanggil object services */}
      {services.map((service) => (
        <CardLayanan key={service.id} {...service} />
      ))}
      <StylizedFrame
        urlImage="../images/stylized-frame-1-left.png"
        classname="absolute left-0 bottom-[700px] md:bottom-[530px]"
      ></StylizedFrame>
      <Footer />
    </div>
  );
};
export default Layanan;
