import { useState } from "react";
import { Link } from "react-scroll";
import { IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleIsMenuOpen = () =>{
        setIsMenuOpen(!isMenuOpen)
    }
  
  return (
    <nav>
      <div className="h-[60px] flex justify-between z-50 text-dark lg:py-5 px-5 py-4 flex-1 shadow-md shadow-primary/50">
        <div className="flex items-center flex-1">
          <span className="font-bold text-3xl">Logo</span>
        </div>
        <WideContent/> 
        <div>
            {isMenuOpen && <SmallContent/>}
        </div>
        <button className="block md:hidden transition" onClick={handleIsMenuOpen}>
            {isMenuOpen ? <IoClose size={30}/> : <IoIosMenu size={30}/>}
        </button>
      </div>
    </nav>
  );
};

const menus = [
    {
        link: "/",
        name: "Beranda",
        active: false,
    },
    {
        link: "/tentang",
        name: "Tentang Kami",
        active: false,
    },
    {
        link: "/layanan",
        name: "Layanan Kami",
        active: false,
    },
    {
        link: "/portfolio",
        name: "Portfolio",
        active: false,
    },
    {
        link: "/artikel",
        name: "Artikel",
        active: false,
    },
    {
        link: "/konsultasi",
        name: "Konsultasi",
        active: false,
    },
]
const WideContent = () => {
    const [isActive, setIsActive] = useState(false);
    const handleIsActive = () =>{
        setIsActive(!isActive)
    }
    return (
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-4 mr-16 text-[18px]">
            {menus.map((menu) => (
              <Link spy={true} smooth={true} to={menu.link}>
                <li className={`${isActive ? "text-primary bg-primary" : "text-dark bg-white"} transition cursor-pointer`} onClick={handleIsActive}>{menu.name}</li>
              </Link>
            ))}
            </ul>
          </div>
        </div>
    )
}

const SmallContent = () => {
    const [menusState, setMenusState] = useState(menus);
  
    const handleIsActive = (index) => {
      const updatedMenus = menusState.map((menu, i) => {
        if (i === index) {
          return { ...menu, active: !menu.active };
        } else {
          return { ...menu, active: false };
        }
      });
  
      setMenusState(updatedMenus);
    };
  
    return (
      <>
        <div className="lg:hidden block absolute top-[60px] w-full left-0 right-0 bg-white transition">
          <ul className="text-center text-xl mb-2 px-3">
            {menusState.map((menu, index) => (
              <Link
                key={index}
                spy={true}
                smooth={true}
                to={menu.link}
                onClick={() => handleIsActive(index)}
              >
                <li
                  className={`my-4 py-3 hover:bg-primary hover:text-white rounded-md cursor-pointer ${
                    menu.active
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

export default Navbar;
