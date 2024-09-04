import { useRef } from "react";
import banner from "../assets/banner.png";
// import { uploadImage } from '../apis/apis.js';

function LandingPage({ handleFileChange }) {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="landing">
       <div className="main-wrapper">
          <img src={banner} className="banner-img" alt="banner" />
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
    </div>
  );
}

export default LandingPage;
