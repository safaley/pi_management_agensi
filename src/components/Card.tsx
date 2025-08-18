import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'surface' | 'elevated';
  className?: string;
  padding?: 'small' | 'medium' | 'large';
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  padding = 'medium'
}) => {
  const baseClasses = 'rounded-3xl transition-all duration-300 relative overflow-hidden';
  
  const variantClasses = {
    default: 'bg-[var(--background)] border border-[var(--border)] shadow-sm',
    surface: 'bg-[var(--surface)] border border-[var(--border-light)]',
    elevated: 'bg-[var(--background)] shadow-lg border border-[var(--border)]'
  };
  
  const paddingClasses = {
    small: 'p-4',
    medium: 'p-8',
    large: 'p-12'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`;
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;