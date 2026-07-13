"use client";

import React, { ReactNode } from 'react';
import styles from '@/app/presentation/presentation.module.css';
import { clsx } from 'clsx';

interface SlideProps {
  children: ReactNode;
  isActive?: boolean;
  isPrevious?: boolean;
  className?: string;
}

export default function Slide({ children, isActive = false, isPrevious = false, className }: SlideProps) {
  return (
    <div
      className={clsx(
        styles.slideContainer,
        {
          [styles.active]: isActive,
          [styles.previous]: isPrevious,
        },
        className
      )}
    >
      <div className={styles.slideInner}>
        {children}
      </div>
    </div>
  );
}
