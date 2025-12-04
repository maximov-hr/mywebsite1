import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  href,
  onClick,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-bold font-heading uppercase tracking-wider transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-marsala hover:bg-marsala-hover text-white shadow-lg hover:shadow-xl focus:ring-marsala border border-transparent",
    outline: "bg-transparent border-2 border-marsala text-marsala hover:bg-marsala hover:text-white",
    white: "bg-white text-graphite hover:bg-gray-100 shadow-lg font-bold border border-transparent"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};