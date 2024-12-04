import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const ImgToTextSummaryPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
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
      </div>
    </div>
  );
};

export default ImgToTextSummaryPage;
