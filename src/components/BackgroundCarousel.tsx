
import { useState, useEffect } from "react";

// Array of background images showing servers and computers
const backgroundImages = [
  "https://www.curvature.com/wp-content/uploads/2023/11/dell-poweredge-servers.webp",
  "https://images.unsplash.com/photo-1588382472578-8d8b337b277a?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573164574001-518958d9bab2?auto=format&fit=crop&q=80"
];

export function BackgroundCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to change background image every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out will-change-opacity ${
            index === currentImageIndex ? "opacity-40" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url("${image}")`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C]/60 to-[#111827]/70 dark:from-slate-900/70 dark:to-slate-950/80 z-10"></div>
    </div>
  );
}
