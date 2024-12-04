import React, { useState } from 'react';
import VideoSummaryPage from './components/VideoSummaryPage';
import ImgToTextSummaryPage from './components/ImgToTextSummaryPage';  // Import Img to Text Summary Page
import AudioToTextSummaryPage from './components/AudioToTextSummaryPage';  // Import Audio to Text Summary Page
import TextToTextSummaryPage from './components/TextToTextSummaryPage';  // Import Text to Text Summary Page
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  const cards = [
    {
      icon: "📹",
      title: "Vid to Text Summary",
      description: "Summarize text instantly and accurately with our easy-to-use text summarizer.",
      page: 'video'
    },
    {
      icon: "🖼️",
      title: "Img to Text Summary",
      description: "Extract and summarize text from images in seconds with our efficient image-to-text summarizer.",
      page: 'image'
    },
    {
      icon: "🎵",
      title: "Audio to Text Summary",
      description: "Convert audio to text and summarize it instantly with ease and precision.",
      page: 'audio'
    },
    {
      icon: "📄",
      title: "Text to Text Summary",
      description: "Summarize lengthy texts into concise and clear insights effortlessly.",
      page: 'text'
    },
  ];

  const handleCardClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      <div className="navbar">
        <h1 onClick={() => setCurrentPage('home')} className="logo">SummerEase</h1>
        <nav>
          <ul className="nav-links">
            {cards.map((card, index) => (
              <li key={index} onClick={() => handleCardClick(card.page)}>
                {card.title}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {currentPage === 'home' ? (
        <main className="card-container">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="card"
              onClick={() => handleCardClick(card.page)}
            >
              <span className="icon">{card.icon}</span>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </main>
      ) : currentPage === 'video' ? (
        <VideoSummaryPage />
      ) : currentPage === 'image' ? (
        <ImgToTextSummaryPage />
      ) : currentPage === 'audio' ? (
        <AudioToTextSummaryPage />
      ) : currentPage === 'text' ? (
        <TextToTextSummaryPage />
      ) : null}
    </div>
  );
}

export default App;
