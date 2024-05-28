import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { useCookies } from "react-cookie";
import { logout } from "../../services/auth.service";

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
    link: "/developer/konsultasi",
    name: "Konsultasi",
    active: false,
  },
  {
    link: "/logout",
    name: "Logout",
    active: false,
  },
];
const Navbar = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
  const navigate = useNavigate();

  const handleLogout = async () => {
    console.log(cookies.jwt);
    if (cookies.jwt) {
      await logout((isSuccess, res) => {
        if(isSuccess) {
          // navigate("/");
      } else {
        console.log(res);
      }
    });
  }
  };
  
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
        -top-1 z-50 text-dark lg:py-5 px-5 py-4 shadow-md shadow-black/50 md:shadow-none`}
      >
        <div className="flex items-center justify-center lg:justify-around gap-1">
          <img src="../../images/logo.png" alt="" className="h-[50px]" />
          <span className="font-bold text-xl text-black font-body">
            Step Up
          </span>
        </div>
        <WideContent user={user} handleLogout={handleLogout}/>
        <div>{isMenuOpen && <SmallContent user={user} handleLogout={handleLogout} />}</div>
        <button
          className="block lg:hidden transition"
          onClick={handleIsMenuOpen}
        >
          {isMenuOpen ? <IoClose size={30} /> : <IoIosMenu size={30} />}
        </button>
      </div>
    </nav>
  );
};

const WideContent = ({ user, handleLogout }) => {
  const location = useLocation();
  return (
    <div className="lg:flex items-center justify-end md:justify-center ms-20 font-[450] hidden">
      <div className="flex-10">
        <ul className="flex gap-6 mr-16 text-[18px]">
          {
            user ? (
              <>
              {menus.map((menu) => (
                <li key={menu.link}>
                  {
                    menu.link === "/logout" ? (
                      <button onClick={handleLogout} className="text-dark bg-white transition cursor-pointer">
                        {menu.name}
                      </button>
                    ) : (
                      <Link spy="true" smooth="true" to={menu.link}
                        className=
                        {`${
                          location.pathname === menu.link
                            ? "text-dark border-b-[3px] border-primary"
                            : "text-dark bg-white"
                        } transition cursor-pointer`}>
                        {menu.name}
                      </Link>
                    )
                  }
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
                        ? "text-dark border-b-[3px] border-primary"
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

const SmallContent = ({ user, handleLogout }) => {
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

