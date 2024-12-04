import React from "react";
import "./Card.css";

// Main Card Component
const Card = ({ icon, title, description, className }) => {
  return (
    <div className={`card ${className}`}>
      <span className="icon">{icon}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

// CardHeader Component
const CardHeader = ({ children, className }) => {
  return <div className={`card-header ${className}`}>{children}</div>;
};

// CardTitle Component
const CardTitle = ({ children, className }) => {
  return <h2 className={`card-title ${className}`}>{children}</h2>;
};

// CardContent Component
const CardContent = ({ children, className }) => {
  return <div className={`card-content ${className}`}>{children}</div>;
};

// Export all components
export { Card, CardHeader, CardTitle, CardContent };
