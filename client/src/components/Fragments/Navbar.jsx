import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";

const menus = [
  {
    link: "/",
    name: "Beranda",
    active: false,
  },
  {
    link: "/about",
    name: "Tentang Kami",
    active: false,
  },
  {
    link: "/services",
    name: "Layanan Kami",
    active: false,
  },
  {
    link: "/portfolio",
    name: "Portfolio",
    active: false,
  },
  {
    link: "/article",
    name: "Artikel",
    active: false,
  },
  {
    link: "/konsultasi",
    name: "Konsultasi",
    active: false,
  },
];
const devMenus = [
  {
    link: "/developer/dashboard",
    name: "Beranda",
    active: false,
  },
  {
    link: "/article",
    name: "Artikel",
    active: false,
  },
  {
    link: "/developer/konsultasi",
    name: "Konsultasi",
    active: false,
  },
  {
    link: "/login",
    name: "Logout",
    active: false,
  },
  // {
  //   link: "/artikelDev",
  //   name: "ArtikelDev",
  //   active: false,
  // },
];
const Navbar = ({ user }) => {
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
        className={`h-[60px] flex justify-between md:justify-around md:items-center w-full fixed bg-white
        -top-1 z-50 text-dark lg:py-5 px-5 py-4 mt-3 shadow-md shadow-black/50 md:shadow-none`}
      >
        <div className="flex items-center gap-1 flex-1">
          <img src="../../images/logo.png" alt="" className="h-[25px]" />
          <span className="font-bold text-lg text-black font-body">
            Step Up
          </span>
        </div>
        <WideContent user={user}/>
        <div>{isMenuOpen && <SmallContent user={user}/>}</div>
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

const WideContent = ({ user }) => {
  const location = useLocation();
  return (
    <div className="md:flex items-center justify-end md:justify-center font-normal hidden">
      <div className="flex-10">
        <ul className="flex gap-4 mr-16 text-[18px]">
          {
            user ? (
              <>
              {menus.map((menu) => (
                <li key={menu.link}>
                  <Link spy="true" smooth="true" to={menu.link}
                    className=
                    {`${
                      location.pathname === menu.link
                        ? "text-primary border-b border-primary"
                        : "text-dark bg-white"
                    } transition cursor-pointer`}>
                    {menu.name}
                  </Link>
                  </li>
              ))}
              </>
            ) : (
              <>
              {menus.map((menu) => (
                <li key={menu.link}>
                  <Link spy="true" smooth="true" to={menu.link}
                    className=
                    {`${
                      location.pathname === menu.link
                        ? "text-primary border-b border-primary"
                        : "text-dark bg-white"
                    } transition cursor-pointer`}>
                    {menu.name}
                  </Link>
                  </li>
              ))}
              </>
            )
          }
        </ul>
      </div>
    </div>
  );
};

const SmallContent = ({ user }) => {
  const location = useLocation();
  return (
    <>
      <div className="lg:hidden block absolute top-[60px] w-full left-0 right-0 bg-white transition">
        <ul className="text-center text-xl mb-2 px-3">
          { user ? (
            <>
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
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
