import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const AudioToTextSummaryPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="video-summary-container">
      <div className="summary-card">
        <h2 className="summary-title">Audio to Text Summary</h2>
        <p className="summary-description">
          Convert audio to text and summarize it instantly with ease and precision.
        </p>

        <div className="upload-area">
          <Upload className="upload-icon" size={48} />
          <p>Drop your audio file here or</p>

          <label className="select-button">
            SELECT AUDIO
            <input
              type="file"
              className="hidden-input"
              accept="audio/*"
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

export default AudioToTextSummaryPage;
