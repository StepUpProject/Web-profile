import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const Login = () => {
  return (
    <div className="">
      <AuthLayout>
        <FormLogin></FormLogin>
      </AuthLayout>
    </div>
  );
};

export default Login;
