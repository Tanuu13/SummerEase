import React, { useState } from 'react';

const TextToTextSummaryPage = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSummarize = () => {
    // Logic to summarize the text
    setSummary(text);  // Replace with actual summary logic
  };

  return (
    <div className="video-summary-container">
      <div className="summary-card">
        <h2 className="summary-title">Text to Text Summary</h2>
        <p className="summary-description">
          Summarize lengthy texts into concise and clear insights effortlessly.
        </p>

        <div className="upload-area">
          <textarea
            value={text}
            onChange={handleTextChange}
            placeholder="Paste text here..."
            rows="10"
            cols="50"
            style={{ width: '100%', padding: '10px' }}
          />
        </div>
        
        {/* Center the SUMMARIZE button */}
        {text && (
          <div className="summarize-button-container">
            <button className="select-button" onClick={handleSummarize}>
              SUMMARIZE
            </button>
          </div>
        )}
        
        {summary && (
          <div className="selected-file">
            <h3>Summary:</h3>
            <p>{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextToTextSummaryPage;
