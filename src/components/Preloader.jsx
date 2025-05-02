// src/components/Preloader.jsx
import React from 'react';
import StyledCircle from '../layout/Circle';  // Импортируем компонент круга

export function Preloader() {
  return (
    <div className="preloader-wrapper">
      <StyledCircle color="#00bcd4" />
    </div>
  );
}