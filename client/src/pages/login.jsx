import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    window.history.pushState({}, null, '/login')
  },[])
  return (
    <div className="">
      <AuthLayout>
        <FormLogin></FormLogin>
      </AuthLayout>
    </div>
  );
};

export default Login;
