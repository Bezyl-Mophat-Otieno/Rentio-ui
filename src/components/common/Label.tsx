import React from "react";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label = ({ htmlFor, children }: LabelProps) => (
  <label className="form-label" htmlFor={htmlFor}>
    {children}
  </label>
);

export default Label;
