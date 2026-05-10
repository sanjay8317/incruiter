import { forwardRef } from "react";

const Card = forwardRef(({ variant = "default", padding = "md", className = "", children, ...props }, ref) => {
  const variants = {
    default: "bg-white",
    bordered: "bg-white border border-slate-200",
    elevated: "bg-white shadow-lg shadow-slate-200/50",
  };

  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      ref={ref}
      className={`rounded-xl transition-all duration-300 card-hover ${variants[variant]} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;