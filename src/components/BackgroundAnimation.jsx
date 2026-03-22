import React from "react";

function BackgroundAnimation({ theme = "light" }) {
  const bubbles = Array.from({ length: 25 }, () => ({
    size: Math.random() * 20 + 10,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <div className="background-animation">
      {bubbles.map((b, index) => (
        <div
          key={index}
          className="floating-shape"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            top: `${b.top}%`,
            left: `${b.left}%`,
            animationDuration: `${b.duration}s`,
            backgroundColor: theme === "light" ? "#d8c3a5" : "#d8c3a5",
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundAnimation;