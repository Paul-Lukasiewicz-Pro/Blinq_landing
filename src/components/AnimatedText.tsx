import React, { useState, useEffect, useRef } from 'react';

interface AnimatedTextProps {
  words: string[];
  className?: string;
  interval?: number;
}

const ANIMATION_DURATION = 1000; // Durée de l'animation en ms

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  words, 
  className = '', 
  interval = 50000 // 2 secondes par défaut
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [nextIndex, setNextIndex] = useState(1);
  const slideRef = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Fonction pour lancer l'animation
    const startSlide = () => {
      setIsSliding(true);
      // Après l'animation, on met à jour l'index et on reset la position
      timeoutRef.current = setTimeout(() => {
        setIsSliding(false);
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setNextIndex((prev) => ((prev + 1) % words.length));
      }, ANIMATION_DURATION);
    };

    // Lancer l'animation à chaque intervalle
    intervalRef.current = setInterval(startSlide, interval);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [interval, words.length]);

  // Quand l'index change, on remet le slide à la position initiale
  useEffect(() => {
    if (!isSliding && slideRef.current) {
      slideRef.current.style.transition = 'none';
      slideRef.current.style.transform = 'translateY(0%)';
      // Forcer le reflow pour que la transition soit bien prise en compte au prochain slide
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      slideRef.current.offsetHeight;
    }
  }, [isSliding, currentIndex]);

  // Appliquer la transition uniquement pendant l'animation
  const slideStyle: React.CSSProperties = isSliding
    ? {
        transition: `transform ${ANIMATION_DURATION}ms cubic-bezier(0.4,0,0.2,1)`,
        transform: 'translateY(-50%)',
      }
    : {
        transition: 'none',
        transform: 'translateY(0%)',
      };

  return (
    <span
      className={`inline-block align-middle ${className}`}
      style={{
        height: '1.625em',
        verticalAlign: 'middle',
        overflow: 'hidden',
        display: 'inline-block',
        position: 'relative',
        minWidth: '4ch',
      }}
    >
      <span
        ref={slideRef}
        style={{
          display: 'block',
          ...slideStyle,
        }}
      >
        <span
          className="flex items-center justify-center"
          style={{ height: '1.5em', lineHeight: '1.0em' }}
        >
          {words[currentIndex]}
        </span>
        <span
          className="flex items-center justify-center"
          style={{ height: '1.625em', lineHeight: '1.625em' }}
        >
          {words[nextIndex]}
        </span>
      </span>
    </span>
  );
};

export default AnimatedText;