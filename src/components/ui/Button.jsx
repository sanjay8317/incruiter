import { forwardRef } from "react";

const Button = forwardRef(({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25",
    secondary:
      "bg-white text-slate-900 hover:bg-slate-50 border border-slate-200",
    outline:
      "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
  };

  const sizes = {
    sm: "rounded-lg px-4 py-2 text-sm",
    md: "rounded-full px-6 py-3 text-sm",
    lg: "rounded-full px-8 py-4 text-base",
  };

  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;