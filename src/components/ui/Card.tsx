import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({
  children,
  className = '',
  hover = true,
}: CardProps) => {
  return (
    <div className={`card ${hover ? 'hover:shadow-lg' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;