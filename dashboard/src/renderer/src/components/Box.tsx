import React from 'react';
import './Box.css';

interface BoxProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ title, description, className, children }) => {
  return (
    <div className={`box ${className}`}>
      <h2 className="box-title">{title}</h2>
      <p className="box-description">{description}</p>
      <div className="box-content">{children}</div>
    </div>
  );
};

export default Box;