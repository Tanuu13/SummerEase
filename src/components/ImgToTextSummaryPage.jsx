import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const ImgToTextSummaryPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSummarize = () => {
    // Summarize logic goes here (currently a placeholder)
    alert("Summarizing image...");
  };

  return (
    <div className="video-summary-container">
      <div className="summary-card">
        <h2 className="summary-title">Img to Text Summary</h2>
        <p className="summary-description">
          Extract and summarize text from images in seconds with our efficient image-to-text summarizer.
        </p>

        <div className="upload-area">
          <Upload className="upload-icon" size={48} />
          <p>Drop your image file here or</p>

          <label className="select-button">
            SELECT IMAGE
            <input
              type="file"
              className="hidden-input"
              accept="image/*"
              onChange={handleFileSelect}
            />
          </label>

          {selectedFile && (
            <div className="selected-file">
              Selected file: <strong>{selectedFile.name}</strong>
            </div>
          )}
        </div>

        {/* Move the Summarize button outside the box and center it at the bottom */}
        {selectedFile && (
          <div className="summarize-button-container">
            <button className="select-button" onClick={handleSummarize}>
              SUMMARIZE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImgToTextSummaryPage;
