"use client";

import React, { useState, useEffect, ReactNode, Children } from 'react';
import styles from '@/app/presentation/presentation.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DeckProps {
  children: ReactNode;
}

export default function Deck({ children }: DeckProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = Children.toArray(children);
  const totalSlides = slides.length;

  const nextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const prevSlide = React.useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className={styles.presentationContainer}>
      {slides.map((child, index) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child as React.ReactElement<{ isActive?: boolean; isPrevious?: boolean }>, {
          isActive: index === currentSlide,
          isPrevious: index < currentSlide,
        });
      })}

      <div className={styles.controls}>
        <button 
          className={styles.controlBtn} 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          className={styles.controlBtn} 
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className={styles.progressContainer}>
        <div 
          className={styles.progressBar} 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
