import React, { useEffect, useState, JSX } from "react";


export interface TopScrollProgressBarProps {
  height?: number;
  color?: string;
}

const TopScrollProgressBar = ({
  height = 4,
  color = "#FF0000"
}: TopScrollProgressBarProps): JSX.Element => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress((scrollTop / scrollHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: `${height}px`,
        backgroundColor: color,
        transition: "width 0.2s ease-out",
        zIndex: 9999
      }}
    />
  );
};

export default TopScrollProgressBar;
