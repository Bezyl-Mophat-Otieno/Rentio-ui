import React from "react";

interface IconButtonProps extends React.HTMLAttributes<HTMLSpanElement> {
  iconClass: string;
}

const IconButton = ({ iconClass, ...spanProps }: IconButtonProps) => (
  <span
    className="position-absolute top-50 end-0 translate-middle-y p-0 mt-3"
    {...spanProps}
  >
    <i className={iconClass}></i>
  </span>
);

export default IconButton;
