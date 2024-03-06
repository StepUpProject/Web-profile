import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";

const ImageUploader = ({ labelText, buttonText, onImageChange }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    // Additional logic for image upload or processing can be added here

    const imagePath = "./thumbnail";

    // Menyusun path lengkap untuk menyimpan gambar
    const imagePathWithFileName = `${imagePath}/${file.name}`;
    // Call the provided callback function with the selected image
    if (onImageChange) {
      onImageChange(file, imagePathWithFileName);
    }
  };

  return (
    <>
      <label htmlFor="content" className="labelArticle text-md">
        {labelText || "Pilih Thumbnail"}
      </label>
      <ImageUpload
        buttonText={buttonText}
        selectedImage={selectedImage}
        handleImageChange={handleImageChange}
      />
    </>
  );
};

export const ImageUpload = ({ buttonText, selectedImage, handleImageChange }) => {
  return (
    <div className="flex flex-row items-center border-2 py-3 ps-3">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        id="imageInput"
        name="image"
      />

      <label htmlFor="imageInput" className="cursor-pointer flex flex-row-reverse justify-between w-full">
        <ImageIcon className="w-6 h-6 mr-2 text-gray-500" />
        <span className="text-gray-700">
          {selectedImage ? selectedImage.name : "Select an image"}
        </span>
        <span className="text-blue-500">{buttonText || "Browse"}</span>
      </label>
    </div>
  );
};

export default ImageUploader;
