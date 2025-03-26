import React from "react";

// Utility function to combine Tailwind classes
const cn = (...classes) => classes.filter(Boolean).join(" ");

const Button = ({ children, variant = "default", size = "default", className = "", ...props }) => {
  // Define styles for different button types
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    default: "bg-yellow-500 text-black hover:bg-yellow-400",
    outline: "border border-gray-300 text-black hover:bg-gray-100",
    destructive: "bg-red-600 text-white hover:bg-red-500",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    ghost: "hover:bg-gray-100 text-gray-700",
    link: "text-blue-600 underline-offset-4 hover:underline",
  };

  const sizeStyles = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
    icon: "h-10 w-10 flex items-center justify-center",
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
