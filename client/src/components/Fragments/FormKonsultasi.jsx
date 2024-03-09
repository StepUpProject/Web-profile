import { useState } from "react";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/Input";
import TextArea from "../Elements/Input/TextArea";
import { konsultasi } from "../../services/konsultasi.service";

const FormKonsultasi = () => {
    const [konsulFailed, setKonsulFailed] = useState("");
    const handleAddQuestion = (event)=>{
        event.preventDefault();
        const data = {
            name: event.target.fullname.value,
            email: event.target.email.value,
            question: event.target.pertanyaan.value
        }
        konsultasi(data, (status, res)=>{
            if(status){
                console.log(res)
            }else{
                setKonsulFailed(res.response.data)
            }
        })
    }
    return (
        <form onSubmit={handleAddQuestion}>
            <InputForm
                name="fullname"
                type="text"
                label="Nama Lengkap"
            />
            <InputForm
                name="email"
                type="email"
                label="Email"
            />
            <TextArea
                name="pertanyaan" 
                htmlFor="pertanyaan" 
                label="Pertanyaan"/>
            <Button type="submit" classname="w-full bg-primary rounded-full">Kirim</Button>
            {konsulFailed && <p className="text-red-500 text-center mt-2">{konsulFailed}</p>}
        </form>
    )
}

export default FormKonsultasi