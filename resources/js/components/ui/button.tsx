import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', children, ...props }) => {
    const baseStyle = "px-4 py-2 rounded focus:outline-none";
    const variantStyle = variant === 'outline' 
        ? "border border-gray-500 text-gray-500" 
        : "bg-blue-500 text-white";

    return (
        <button className={`${baseStyle} ${variantStyle}`} {...props}>
            {children}
        </button>
    );
};

export default Button;