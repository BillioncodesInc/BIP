import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'blue' | 'accent';
  padding?: 'normal' | 'large' | 'none';
}

export const Section = ({
  children,
  className = '',
  id,
  background = 'white',
  padding = 'normal',
}: SectionProps) => {
  // Background classes
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-50',
    accent: 'bg-orange-50',
  };

  // Padding classes
  const paddingClasses = {
    normal: 'py-12 md:py-16',
    large: 'py-16 md:py-24',
    none: '',
  };

  return (
    <section
      id={id}
      className={`${bgClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

export default Section;