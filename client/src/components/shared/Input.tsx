import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'light' | 'dark';
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  variant = 'light',
  className = '',
  ...props
}) => {
  const baseInputClasses = 'w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2';
  
  const variantClasses = {
    light: `
      ${error ? 'border-red-500' : 'border-gray-300'} 
      bg-white text-gray-900 focus:ring-blue-500
    `,
    dark: `
      ${error ? 'border-red-500' : 'border-gray-600'} 
      bg-gray-700 text-gray-200 focus:ring-red-500 focus:border-red-500
    `,
  };

  const labelClasses = variant === 'dark' 
    ? 'block text-sm font-bold text-gray-400 mb-1' 
    : 'block text-sm font-medium text-gray-700 mb-1';

  const inputClasses = `${baseInputClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div className="w-full">
      {label && (
        <label className={labelClasses} htmlFor={props.id}>
          {label}
        </label>
      )}
      <input className={inputClasses} {...props} />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-600">{helperText}</p>
      )}
    </div>
  );
};