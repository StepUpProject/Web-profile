import { useState, useRef, useMemo } from "react";
import { InputArticle } from "../Elements/Input/Input";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import ImageUploader from "../Elements/Input/Image";
import DateInput from "../Elements/Input/DatePicker";
import Button from "../Elements/Button/Button";
import Editor from "../Elements/Input/Editor";
import { article } from "../../services/article.service";

const FormArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const editorRef = useRef(null);
  const handleAddArticle = (event) => {
    event.preventDefault();
    const formData = new FormData()
    formData.append('title', event.target.title.value)
    formData.append('content', editorRef.current?.value ?? "")
    formData.append('published_at', event.target.published_at.value)
    formData.append('image', selectedImage)
    article(formData, (status, res) => {
      if (status) {
        console.log(res);
      }else {
        console.log(res);
      }
    })
  };
  const handleImageSelection = (selectedImage) => {
    setSelectedImage(selectedImage)
    console.log("Gambar yang dipilih:", selectedImage);
  };

  return (
    <>
      <form onSubmit={handleAddArticle}>
        <div className="ps-4">
          <div className="pe-24 flex flex-col">
          <InputArticle
              name="title"
              type="text"
              value={title}
              label="Judul Artikel"
              setValue={setTitle}
            />
            <DateInput 
              name="published_at"
              />
            <ImageUploader
              labelText="Pilih Gambar"
              buttonText="Telusuri"
              onImageChange={handleImageSelection}
            />
          </div>
          <Editor
            editor={editorRef}
            content={content}
            setContent={setContent}
          />
        </div>
        <div className="px-6">
          <Button
            type="submit"
            classname="w-full my-10 bg-primary rounded-full"
          >
            Kirim
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormArticle;