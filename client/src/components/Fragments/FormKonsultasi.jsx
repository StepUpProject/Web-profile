import { useState } from "react";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/Input";
import TextArea from "../Elements/Input/TextArea";
import { konsultasi } from "../../services/konsultasi.service";
import { ToastContainer, toast } from "react-toastify";


const FormKonsultasi = () => {
  const [konsulFailed, setKonsulFailed] = useState("");
  const handleAddQuestion = (event) => {
    event.preventDefault();
    const data = {
      name: event.target.fullname.value,
      email: event.target.email.value,
      question: event.target.pertanyaan.value,
    };
    konsultasi(data, (status, res) => {
      if (status) {
        generateSuccess(res.message);
      } else {
        generateError(res.message);
      }
    });
  };
  const generateError = (error) => {
    toast.error(error, {
      position: "bottom-right",
    });
  };
  const generateSuccess = (success) => {
    toast.success(success, {
      position: "bottom-right",
    });
  }
  return (
    <>
    <form onSubmit={handleAddQuestion}>
      <div className="mb-6">
        <InputForm name="fullname" type="text" label="Nama Lengkap" />
      </div>
      <div className="mb-6">
        <InputForm name="email" type="email" label="Email" />
      </div>
      <TextArea name="pertanyaan" htmlFor="pertanyaan" label="Pertanyaan" />
      <Button type="submit" classname="p-2 mt-6 w-full bg-primary rounded-full">
        Kirim
      </Button>
    </form>
    <ToastContainer />
    </>

  );
};

export default FormKonsultasi;
