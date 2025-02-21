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
      // Get scroll position, handle different browser implementations
      const currentScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      
      // Get the total scrollable height, accounting for different browser implementations
      const docElement = document.documentElement;
      const docBody = document.body;
      const pageHeight = Math.max(
        docBody.scrollHeight,
        docBody.offsetHeight,
        docElement.clientHeight,
        docElement.scrollHeight,
        docElement.offsetHeight
      );
      const windowHeight = window.innerHeight || docElement.clientHeight || docBody.clientHeight;
      const scrollableHeight = pageHeight - windowHeight;
      
      // Calculate progress percentage, ensuring it's between 0 and 100
      const progressPercentage = Math.min(100, Math.max(0, (currentScroll / scrollableHeight) * 100)) || 0;
      setScrollProgress(progressPercentage);
    };

    // Initial update and add event listeners
    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress);
    window.addEventListener('resize', updateScrollProgress);

    return () => {
      // Remove event listeners on cleanup
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
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
