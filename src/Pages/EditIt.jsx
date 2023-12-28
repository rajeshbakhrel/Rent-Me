import React, { useState } from "react";
// import "../Style/edit.css";

const EditIt = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();

      selectedImages.forEach((image, index) => {
        formData.append(`image_${index}`, image);
      });

      const response = await fetch(
        "https://parajuli11.pythonanywhere.com/photo/create/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload images");
      }

      console.log("Images uploaded successfully");
      // Handle success
    } catch (error) {
      console.error("Error uploading images:", error);
      // Handle error scenarios here
    }
  };
  return (
    <div>
      <div>
        <h2>Multiple Image Uploader</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          multiple
        />
        <br />
        <div>
          {imagePreviews.map((preview, index) => (
            <img
              key={index}
              src={preview}
              alt={`Image ${index}`}
              style={{ maxWidth: "200px", margin: "5px" }}
            />
          ))}
        </div>
        <button onClick={handleUpload}>Upload Images</button>
      </div>
    </div>
  );
};

export default EditIt;
