import { useState, useRef, useEffect } from "react";
import { InputArticle } from "../Elements/Input/Input";
import { useParams } from "react-router-dom";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { article, getArticle, updateArticle } from "../../services/article.service";
import ImageUploader from "../Elements/Input/Image";
import DateInput from "../Elements/Input/DatePicker";
import Button from "../Elements/Button/Button";
import Editor from "../Elements/Input/Editor";
import axios from "axios";

const FormEditArticle = ({  }) => {
    const [articleData, setArticleData] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const { id } = useParams();

  const editorRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getArticle(id);
      setArticleData(result.article);
      setSelectedImage(result.image);
      setTitle(result.article.title);
      setImageUrl(URL.createObjectURL(result.image));
      setContent(result.article.content);
    };
    fetchData();
  }, [id]);

  const handleEditArticle = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", event.target.title.value);
    formData.append("content", editorRef.current?.value ?? "");
    formData.append("published_at", event.target.published_at.value);
    formData.append("image", selectedImage);
    updateArticle(id, formData, (status, res) => {
      if (status) {
        console.log(res);
      } else {
        console.log(res);
      }
    });
  };


  const handleImageSelection = (selectedImage) => {
    setSelectedImage(selectedImage);
    console.log("Gambar yang dipilih:", selectedImage);
  };
  return (
    <>
      <form onSubmit={handleEditArticle}>
        <div className="ps-4">
          <div className="pe-24 flex flex-col">
            <InputArticle
              name="title"
              type="text"
              value={title}
              label="Judul Artikel"
              classname="mb-6"
              setValue={setTitle}
            />
            <DateInput
              name="published_at"
              value={articleData.published_at}
            />
            <ImageUploader
              labelText="Pilih Gambar"
              buttonText="Telusuri"
              onImageChange={handleImageSelection}
            />
            <img className="w-[30%]" src={`${articleData.image}`} alt="" />
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
            Ubah
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormEditArticle;
