import NavBar from "../components/Fragments/Navbar";
import Cards from "../components/Fragments/Card";

const Layanan = () => {
  return (
    <div>
      <NavBar />
      <h1 className="mt-[30px] text-2xl font-bold text-center">Layanan Kami</h1>
      <p className="mt-[30px] w-full text-xs font-body leading-4 text-black px-[12px] text-center">
        Hadirkan solusi digital untuk mendukung efisiensi dan produktivitas
        bisnis. Sambut era digital bersama <br /> inovasi kami
      </p>
      {/* <Cards
        image="../../public/images/aplikasi-web.png"
        title="Aplikasi Web"
        content="Step Up Project mitra terpercaya dalam pembuatan dan pengelolaan aplikasi website, dengan developer yang siap membantu mewujudkan ide anda menjadi aplikasi website yang fungsional, menarik, dan sesuai dengan kebutuhan bisnis Anda"
      /> */}
      <Cards />
      <section className="mt-20 bg-[#00ACC1] text-center text-white p-6 font-bold">
        NANTI FOOTER DISINI <br /> RAWRRR 🤷‍♂️🧟‍♂️🧟‍♀️🧟
      </section>
    </div>
  );
};
export default Layanan;
