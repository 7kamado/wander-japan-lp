
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  href?: string; // For link-like buttons
  target?: string; // For href
  rel?: string; // For href
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  href,
  ...props
}) => {
  const baseStyles = "px-8 py-3 font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900";
  
  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles = 'bg-sky-500 hover:bg-sky-600 text-white focus:ring-sky-400';
      break;
    case 'secondary':
      variantStyles = 'bg-slate-700 hover:bg-slate-600 text-sky-100 focus:ring-slate-500';
      break;
    case 'outline':
      variantStyles = 'bg-transparent border-2 border-sky-400 text-sky-300 hover:bg-sky-400 hover:text-slate-900 focus:ring-sky-300';
      break;
  }

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variantStyles} ${className} inline-block text-center`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
