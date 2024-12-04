import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';  // Adjust the path according to the file location


const VideoSummaryPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="video-summary-container">
      <Card className="summary-card">
        <CardHeader>
          <CardTitle>Vid to Text Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="summary-description">
            Summarize text instantly and accurately with our easy-to-use text summarizer
          </p>
          
          <div className="upload-area">
            <Upload className="upload-icon" size={48} />
            <p>Drop your video file here or</p>
            
            <label className="select-button">
              SELECT VIDEO
              <input
                type="file"
                className="hidden-input"
                accept="video/*"
                onChange={handleFileSelect}
              />
            </label>
            
            {selectedFile && (
              <div className="selected-file">
                Selected file: {selectedFile.name}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoSummaryPage;