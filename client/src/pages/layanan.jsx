import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import CardLayanan from "../components/Fragments/CardLayanan";

const Layanan = () => {
  // object card layanan
  const services = [
    {
      id:1,
      image:"./images/layanan-aplikasi-web.png",
      title:"Aplikasi Web",
      content:"Step Up Project mitra terpercaya dalam pembuatan dan pengelolaan aplikasi website, dengan developer yang siap membantu mewujudkan ide anda menjadi aplikasi website yang fungsional, menarik, dan sesuai dengan kebutuhan bisnis Anda"
    },
    {
      id:2,
      image:"./images/layanan-artikel.png",
      title:"Artikel",
      content:"Kami juga menyediakan layanan artikel yang informatif dan berkualitas untuk mendukung keberhasilan online Anda. Dengan tim penulis berpengalaman, kami membantu membangun konten yang relevan dan menarik . Mari bersama, ciptakan kehadiran online yang tak terlupakan dan sukses"
    },
    {
      id:3,
      image:"./images/layanan-sosmed.png",
      title:"Konten Digital",
      content:"Tidak hanya itu, kami juga spesialis dalam pembuatan konten digital. Konten berkualitas tinggi untuk memperkuat kehadiran online Anda. Mari tingkatkan kualitas dan daya tarik bisnis Anda bersama kami"
    },

  ]
  return (
    <div>
      <NavBar />
      <h1 className="mt-[80px] text-2xl font-bold text-center">Layanan Kami</h1>
      <p className="mt-[30px] w-full text-xs font-body leading-4 text-black px-[12px] text-center">
        Hadirkan solusi digital untuk mendukung efisiensi dan produktivitas
        bisnis. Sambut era digital bersama <br /> inovasi kami
      </p> 
      {/* memanggil object services */}
      {services.map((service)=>(
        <CardLayanan key={service.id} {...service}/>
      ))}
      <Footer />
    </div>
  );
};
export default Layanan;

