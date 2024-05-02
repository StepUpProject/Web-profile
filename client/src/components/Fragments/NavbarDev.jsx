import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { useParams } from "react-router-dom";

const menus = [
  {
    link: "/konsultasiDev",
    name: "KonsultasiDev",
    active: false,
  },
  {
    link: "/",
    name: "Beranda",
    active: false,
  },
  // {
  //   link: "/tentang",
  //   name: "Tentang Kami",
  //   active: false,
  // },
  // {
  //   link: "/layanan",
  //   name: "Layanan Kami",
  //   active: false,
  // },
  // {
  //   link: "/portfolio",
  //   name: "Portfolio",
  //   active: false,
  // },
  // {
  //   link: "/artikel",
  //   name: "Artikel",
  //   active: false,
  // },
  // {
  //   link: "/konsultasi",
  //   name: "Konsultasi",
  //   active: false,
  // },
  // {
  //   link: "/dashboardDev/2",
  //   name: "DashboardDev",
  //   active: false,
  // },
  // {
  //   link: "/artikelDev",
  //   name: "ArtikelDev",
  //   active: false,
  // },
  // {
  //   link: "/konsultasiDev",
  //   name: "KonsultasiDev",
  //   active: false,
  // },
];
const devMenus = [
  {
    link: "/berandaDev",
    name: "BerandaDev",
    active: false,
  },
  {
    link: "/konsultasiDev",
    name: "KonsultasiDev",
    active: false,
  },
  {
    link: "/",
    name: "Beranda",
    active: false,
  },
  {
    link: "/article",
    name: "Artikel",
    active: false,
  },
];

const NavbarDev = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="top-0">
      <div
        className={`h-[60px] flex justify-between w-full fixed bg-white
        -top-1 z-50 text-dark lg:py-5 px-5 py-4 flex-1 shadow-md shadow-black/50`}
      >
        <div className="flex items-center gap-1 flex-1">
          <img src="images/logo.png" alt="" className="h-[25px]" />
          <span className="font-bold text-lg text-black font-body">
            Step Up
          </span>
        </div>
        <WideContent />
        <div>{isMenuOpen && <SmallContent />}</div>
        <button
          className="block md:hidden transition"
          onClick={handleIsMenuOpen}
        >
          {isMenuOpen ? <IoClose size={30} /> : <IoIosMenu size={30} />}
        </button>
      </div>
    </nav>
  );
};

const WideContent = () => {
  const location = useLocation();
  let { id } = useParams();
  return (
    <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
      <div className="flex-10">
        <ul className="flex gap-4 mr-16 text-[18px]">
          {devMenus.map((devMenu) => (
            <li key={devMenu.link} className="my-4">
              <Link
                spy="true"
                smooth="true"
                to={`${devMenu.link}/${id}`}
                className={`block w-full py-3 hover:bg-primary hover:text-white rounded-md cursor-pointer ${
                  location.pathname === devMenu.link
                    ? "text-primary border-b border-primary"
                    : "text-dark bg-white"
                } transition cursor-pointer`}
              >
                {devMenu.name}
              </Link>
            </li>
          ))}
          {menus.map((menu) => (
            <li key={menu.link}>
              <Link
                spy="true"
                smooth="true"
                to={menu.link}
                className={`${
                  location.pathname === menu.link
                    ? "text-primary border-b border-primary"
                    : "text-dark bg-white"
                } transition cursor-pointer`}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const SmallContent = () => {
  const location = useLocation();
  let { id } = useParams();
  return (
    <>
      <div className="lg:hidden block absolute top-[60px] w-full left-0 right-0 bg-white transition">
        <ul className="text-center text-xl mb-2 px-3">
          {devMenus.map((devMenu) => (
            <li key={devMenu.link} className="my-4">
              <Link
                spy="true"
                smooth="true"
                to={`${devMenu.link}/${id}`}
                className={`block w-full py-3 hover:bg-primary hover:text-white rounded-md cursor-pointer ${
                  location.pathname === devMenu.link
                    ? "text-primary border-b border-primary"
                    : "text-dark bg-white"
                } transition cursor-pointer`}
              >
                {devMenu.name}
              </Link>
            </li>
          ))}
          {menus.map((menu) => (
            <Link key={menu.link} spy="true" smooth="true" to={menu.link}>
              <li
                className={`my-4 py-3 hover:bg-primary hover:text-white rounded-md cursor-pointer ${
                  location.pathname === menu.link
                    ? "text-white bg-primary"
                    : "text-dark bg-white"
                }`}
              >
                {menu.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};
// const SmallContent = () =>{
//     const [isActive, setIsActive] = useState(false);
//     const handleIsActive = () =>{
//         setIsActive(!isActive)
//     }
//     return (
//     <>
//       <div className="lg:hidden block absolute top-[60px] w-full left-0 right-0 bg-white transition">
//         <ul className="text-center text-xl mb-2 px-3">
//         {menus.map((menu) => (
//           <Link spy={true} smooth={true} to={menu.link}>
//             <li className={`${isActive ? "text-primary bg-primary" : "text-dark bg-white"} my-4 py-3  hover:bg-primary hover:text-white rounded-md cursor-pointer`} onClick={handleIsActive}>{menu.name}</li>
//           </Link>
//         ))}
//         </ul>
//       </div>
//     </>
//   );
// }

export default NavbarDev;
