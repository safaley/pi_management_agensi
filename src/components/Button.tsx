import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  className = '',
  type = 'button'
}) => {
  const baseClasses = 'font-semibold rounded-full transition-all duration-200 cursor-pointer inline-block text-decoration-none text-center border-none';
  
  const variantClasses = {
    primary: 'bg-[var(--primary)] text-[var(--text-inverse)] hover:bg-[var(--primary-hover)] hover:transform hover:translate-y-[-2px]',
    secondary: 'bg-[var(--secondary)] text-[var(--text-inverse)] hover:bg-[var(--secondary-hover)]',
    outline: 'bg-transparent text-[var(--primary)] border-2 border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--text-inverse)]'
  };
  
  const sizeClasses = {
    small: 'py-2 px-4 text-sm',
    medium: 'py-3 px-6 text-base',
    large: 'py-4 px-8 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;