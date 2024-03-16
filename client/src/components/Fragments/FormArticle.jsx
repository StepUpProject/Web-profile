import { useState, useRef, useMemo } from "react";
import HTMLReactParser from "html-react-parser";
import { InputArticle } from "../Elements/Input/Input";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import ImageUploader from "../Elements/Input/Image";
import DateInput from "../Elements/Input/DatePicker";
import Button from "../Elements/Button/Button";
import Editor from "../Elements/Input/Editor";
import { article } from "../../services/article.service";
// import {writeFileSync} from 'fs'
const FormArticle = () => {
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const editorRef = useRef(null);
  const handleAddArticle = (event) => {
    event.preventDefault();
    // const data = {
    //   title: event.target.title.value,
    //   content: editorRef.current?.value ?? "",
    //   published_at: event.target.published_at.value,
    //   selectedImage: event.target.image.value,
    // };
    // console.log(data);
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
    // const { name, value } = data.image
    // console.log(data.image);
  };
  const handleImageSelection = (selectedImage) => {
    // Lakukan sesuatu dengan gambar yang dipilih, misalnya mengirimkannya ke server
    // writeFileSync('./test.png', selectedImage, 'base64')
    setSelectedImage(selectedImage)
    console.log("Gambar yang dipilih:", typeof selectedImage);
  };

  return (
    <>
      <form onSubmit={handleAddArticle}>
        <div className="ps-4">
          <div className="pe-24 flex flex-col">
            <InputArticle
              type="text"
              name="title"
              label="Judul Artikel"
            ></InputArticle>
            <DateInput name="published_at" />
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
            // onClick={() => console.log(editorRef.current.value())}
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

// docker run -dp 4000:3000 --name todo-app \
// -w /app -v "$(pwd):/app" \
// --network todo-app \
// -e MYSQL_HOST=mysql \
// -e MYSQL_USER=root \
// -e MYSQL_PASSWORD=tcc2023 \
// -e MYSQL_DB=todo-db \
//  node:12-alpine \
//  sh -c "yarn install && yarn run dev"
