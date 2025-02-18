import { useState, useEffect } from "react";
import NorthIcon from '@mui/icons-material/North';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div onClick={scrollToTop}className="fixed bottom-5 right-5 cursor-pointer">
      <svg width="70" height="70" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="6"
        />
        {/* Progress Circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#22c55e"  // Green color like your image
          strokeWidth="6"
          strokeDasharray="251.2"  // Full circumference
          strokeDashoffset={251.2 - (251.2 * scrollProgress) / 100}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
        {/* Arrow Icon */}
        <svg width="100" height="100">
  <foreignObject x="35" y="35" width="30" height="30">
    <NorthIcon style={{fontSize: "35px"}}className="text-green-500 w-full h-full" />
  </foreignObject>
</svg>
      </svg>
    </div>
  );
};

export default ScrollProgress;
