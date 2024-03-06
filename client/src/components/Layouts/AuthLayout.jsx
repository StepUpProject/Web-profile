import HeadTitle from "../Elements/HeadTitle";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative">
      <div className="w-[218px] h-[200px] bg-[url('./images/bg-login-1.png')] bg-no-repeat absolute top-40"></div>
      <div className="w-[100px] h-[128px] bg-[url('./images/bg-login-2.png')] bg-no-repeat absolute bottom-0 right-0"></div>
      <div className="flex justify-center pt-10">
      <h1 className="font-bold text-3xl z-10 place-self-center">Halaman Login</h1>
      </div>
      <div className="flex flex-col items-center p-28 min-h-screen bg-white z-10">
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
