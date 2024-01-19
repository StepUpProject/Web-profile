import NavBar from "../components/Fragments/Navbar";

const Beranda = () => {
  return (
    <div>
      <NavBar/>
      <div className="flex flex-col ps-4">
        <h1 className="font-bold text-xl mt-[42px] text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary to-white/25">
          Step Up Project
        </h1>
        <h3 className="text-2xl font-bold mt-5">Step Up, Code Up</h3>
        <p className="mt-6 pe-11">
          Step Up Project hadir sebagai digitalisasi bisnis, pengembangan dan
          pengelolaan aplikasi web, dan juga sebagai edukasi seputar dunia IT
        </p>
        <button className="w-[148px] h-[40px] text-sm font-normal mt-10 text-white bg-primary rounded-full transition hover:shadow-lg hover:shadow-primary/50 hover:bg-gradient-to-l from-primary to-[#2B3087] duration-300">Konsultasi Sekarang</button>
      </div>
      <div className="w-full h-80 bg-[url('./images/vector-1.png')] bg-no-repeat mt-10">
        <img src="./images/mockup-2.png" className="w-full h-auto m-auto transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500" alt="" />
      </div>
    </div>
  );
};

export default Beranda;
