// import HeadTitle from "../Elements/HeadTitle";
import StylizedFrame from "../Elements/StylizedFrame";
import PropTypes from "prop-types";

const AuthLayout = ({ children }) => {
  AuthLayout.propTypes = {
    children: PropTypes.string,
  };
  return (
    <div className="relative lg:overflow-hidden">
      {/* syle ketika tampilan tablet dan dekstop */}
      <StylizedFrame
        urlImage="../images/bg-login-big-1.png"
        classname="hidden absolute left-0 top-0 md:block md:w-[460px] lg:w-[1009px] lg:h-auto"
      ></StylizedFrame>
      <StylizedFrame
        urlImage="../images/bg-login-big-2.png"
        classname="hidden absolute right-0 top-[320px] md:block md:w-[200px] lg:w-[320px] lg:top-[260px]"
      ></StylizedFrame>
      {/* syle ketika tampilan mobile */}
      <StylizedFrame
        urlImage="../images/bg-login-1.png"
        classname="absolute left-0 top-[172px] md:hidden"
      ></StylizedFrame>
      <StylizedFrame
        urlImage="../images/bg-login-2.png"
        classname="absolute right-0 top-[450px] md:hidden"
      ></StylizedFrame>
      <StylizedFrame
        urlImage="../images/bg-login-3.png"
        classname="absolute right-0 top-[0px]"
      ></StylizedFrame>
      <div className="flex justify-center pt-14 md:pt-0">
        <h1 className="font-bold text-3xl z-10 mb-6 md:hidden">
          Halaman Login
        </h1>
      </div>
      <div className="flex flex-col items-center p-28 min-h-screen bg-white z-10">
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
