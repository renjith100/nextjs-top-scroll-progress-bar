import React, { useEffect, useState } from "react";

export interface TopScrollProgressBarProps {
  height?: number;
  color?: string;
}

const TopScrollProgressBar = ({
  height = 4,
  color = "#FF0000"
}: TopScrollProgressBarProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const windowHeight = document.documentElement.clientHeight;
      const scrollableHeight = pageHeight - windowHeight;
      
      const progressPercentage = (currentScroll / scrollableHeight) * 100;
      setScrollProgress(progressPercentage);
    };

    // Update progress when page loads and on scroll
    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: `${height}px`,
        backgroundColor: color,
        transition: "width 0.2s ease-out",
        zIndex: 9999
      }}
    />
  );
};

export default TopScrollProgressBar;
