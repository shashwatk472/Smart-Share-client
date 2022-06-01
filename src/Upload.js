import React, { useEffect, useState } from "react";
import "./Upload.css";
function Upload() {
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [selectedImagefile, setSelectedImagefile] = useState(null);
  const [imageClass, setImageClass] = useState("selectedImageBlank");

  const retrieveFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      const data = e.target.files[0];
      setSelectedImageUrl(URL.createObjectURL(data));
      const reader = new window.FileReader();
      reader.readAsArrayBuffer(data);
      reader.onloadend = () => {
        setSelectedImagefile(reader.result);
      };
    }
    e.preventDefault();
  };

  useEffect(() => {
    if (selectedImageUrl) {
      setImageClass("selectedImageShow");
    }
  }, [selectedImageUrl]);

  return (
    <div className="upload">
      <div className="uploadBox">
        <img src={selectedImageUrl} alt="" className={imageClass} />
        <form>
          <input type="file" className="file" onChange={retrieveFile} />
          <input
            type="text"
            placeholder="Enter file Name"
            className="fileName"
          />
          <button type="submit" className="uploadButton">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default Upload;
