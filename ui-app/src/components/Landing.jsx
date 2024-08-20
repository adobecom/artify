import { useRef } from "react";
import banner from "../assets/banner.png";

function LandingPage({ setFile }) {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  return (
    <>
       <div className="main-wrapper">
          <img src={banner} className="banner" alt="banner" />
        </div>
        <div className="info">
          <h2>Add magic and transform your images in one go</h2>
          <div className="upload-container">
            <div>
              <button className="upload-btn" onClick={handleButtonClick}>Choose a photo</button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <div className="upload-info">or Drag and Drop images</div>
            </div>
          </div>
        </div>
    </>
  );
}

export default LandingPage;
