import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

const Input = ({ id, ...inputProps }: InputProps) => (
  <input id={id} className="form-control" {...inputProps} />
);

export default Input;
