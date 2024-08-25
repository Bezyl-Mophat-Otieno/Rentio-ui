import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = ({ label, ...buttonProps }: ButtonProps) => (
  <button className="btn btn-primary w-100 mb-0" {...buttonProps}>
    {label}
  </button>
);

export default Button;
