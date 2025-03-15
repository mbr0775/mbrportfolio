import React, { useState } from "react";
import "./ResumeDownload.css";

const ResumeDownload = () => {
  const [buttonText, setButtonText] = useState("Get Resume");

  const handleDownload = () => {
    const resumeUrl = process.env.PUBLIC_URL + "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "MBR_Resume.pdf"; // Change this to your desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Change button text after download
    setButtonText("Resume Downloaded ✅");

    // Reset button text after 3 seconds
    setTimeout(() => {
      setButtonText("Get Resume");
    }, 10000);
  };

  return (
    <button onClick={handleDownload} className="resume-button">
      {buttonText}
    </button>
  );
};

export default ResumeDownload;
