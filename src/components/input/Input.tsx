import React from "react";
import {
  InputContainer,
  InputIcon,
  StyledInputField,
} from "./styled-components";

export interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  variant?: "filled" | "outlined" | "rounded";
  icon?: React.ReactNode; // Optional icon
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "",
  variant = "filled",
  icon,
}) => {
  return (
    <InputContainer variant={variant}>
      {icon && <InputIcon>{icon}</InputIcon>}
      <StyledInputField
        variant={variant}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};

export default Input;
