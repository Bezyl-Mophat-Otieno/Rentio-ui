import React from "react";

interface SocialButtonProps {
  platform: "Google" | "Facebook";
  iconClass: string;
  onClick: () => void;
}

const SocialButton = ({ platform, iconClass, onClick }: SocialButtonProps) => (
  <a href="#" className="btn btn-light mb-0" onClick={onClick}>
    <i className={`fab fa-fw ${iconClass} me-2`}></i>
    Sign in with {platform}
  </a>
);

export default SocialButton;
