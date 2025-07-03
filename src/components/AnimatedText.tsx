import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  words: string[];
  className?: string;
  interval?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  words, 
  className = '', 
  interval = 2000 // 2 secondes par défaut (1s visible + 1s transition)
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span 
      className={`inline-block overflow-hidden align-middle ${className}`} 
      style={{ 
        height: '1.625em',
        verticalAlign: 'middle'
      }}
    >
      <div 
        className="transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateY(-${currentIndex * 100}%)`,
        }}
      >
        {words.map((word, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center"
            style={{ height: '1.625em', lineHeight: '1.625em' }}
          >
            {word}
          </div>
        ))}
      </div>
    </span>
  );
};

export default AnimatedText;