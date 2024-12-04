import React from "react";
import "./Card.css";

// Main Card Component
const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <span className="icon">{icon}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

// CardHeader Component
const CardHeader = ({ children }) => {
  return <div className="card-header">{children}</div>;
};

// CardTitle Component
const CardTitle = ({ children }) => {
  return <h2 className="card-title">{children}</h2>;
};

// CardContent Component
const CardContent = ({ children }) => {
  return <div className="card-content">{children}</div>;
};

// Export all components
export { Card, CardHeader, CardTitle, CardContent };
