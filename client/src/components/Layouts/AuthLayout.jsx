import HeadTitle from "../Elements/HeadTitle";
import StylizedFrame from "../Elements/StylizedFrame";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative">
      <StylizedFrame
        urlImage="../images/bg-login-1.png"
        classname="absolute left-0 top-[172px]"
      ></StylizedFrame>
      <StylizedFrame
        urlImage="../images/bg-login-2.png"
        classname="absolute right-0 top-[450px]"
      ></StylizedFrame>
      <StylizedFrame
        urlImage="../images/bg-login-3.png"
        classname="absolute right-0 top-[0px]"
      ></StylizedFrame>
      <div className="flex justify-center pt-14">
        <h1 className="font-bold text-3xl z-10 mb-6 ">
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
