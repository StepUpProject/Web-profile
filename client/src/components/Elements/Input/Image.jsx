import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import Button from "../Button/Button";

const ImageUploader = ({ labelText, buttonText, onImageChange, currentImage }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    // Additional logic for image upload or processing can be added here
    if (onImageChange) {
      onImageChange(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (onImageChange) {
      onImageChange(null);
    }
  };

  return (
    <>
      <label htmlFor="content" className="labelArticle text-md">
        {labelText || "Pilih Thumbnail"}
      </label>
      <div className="flex flex-row items-center border-2 py-3 ps-3 w-full md:w-[525px]">
        
        <input
          type="file"
          accept="image/*"
          value={currentImage}
          onChange={handleImageChange}
          className="hidden"
          id="imageInput"
          name="image"
        />

        <label
          htmlFor="imageInput"
          className="cursor-pointer flex-1 flex flex-row-reverse justify-between"
        >
          <ImageIcon className="w-6 h-6 mr-2 text-gray-500" />
          <span className="text-gray-700">
            {selectedImage ? selectedImage.name : "Select an image"}
          </span>
          <span className="text-blue-500">{buttonText || "Browse"}</span>
        </label>
      </div>
      <div>
        
      {selectedImage && (
          <div className="flex items-center justify-center p-2">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected Image"
              className="w-[25%] h-full mr-2"
            />
            <Button
              type="button"
              classname="bg-red-500 text-sm rounded-xl px-5 h-8"
              onClick={handleRemoveImage}
            >
              Remove
            </Button>
          </div>
        )}
      </div>
    </>
  );
};


export default ImageUploader;
