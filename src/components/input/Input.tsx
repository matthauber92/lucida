import React from "react";
import "./styles.css"; // Now using styles.css for the input styles

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  variant?: "filled" | "outlined" | "rounded"; // Supported styles
  icon?: React.ReactNode; // Optional search icon
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "",
  variant = "filled",
  icon,
}) => {
  return (
    <div className={`input-container ${variant}`}>
      {icon && <span className="input-icon">{icon}</span>}
      <input
        className={`input-field ${variant}`}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
