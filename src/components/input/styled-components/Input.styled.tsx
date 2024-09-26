import { styled } from "@mui/material/styles";
import Input, { InputProps } from "../Input"; // Import both Input and InputProps

export const FilterInput = styled(Input)<InputProps>(() => ({
  width: "100%",
  padding: "10px",
  marginBottom: "20px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  color: "#333",
}));

// Styled container for the input with variants
export const InputContainer = styled("div")<{
  variant: "filled" | "outlined" | "rounded";
}>(({ variant }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  maxWidth: "250px",
  marginBottom: "20px",

  // Variant styles
  backgroundColor:
    variant === "filled" || variant === "rounded" ? "#f0f0f0" : "transparent",
  borderBottom: variant === "outlined" ? "1px solid #ccc" : "none",
  borderRadius: variant === "rounded" ? "50px" : "4px",
}));

export const StyledInputField = styled("input")<{
  variant: "filled" | "outlined" | "rounded";
}>(({ variant }) => ({
  width: "100%",
  padding: variant === "rounded" ? "10px 14px" : "8px 12px", // Custom padding for "rounded" variant
  fontSize: "14px",
  border: "none",
  outline: "none",
  backgroundColor: "transparent", // Common background for all variants
}));

// Styled icon container
export const InputIcon = styled("span")({
  marginRight: "4px",
  marginLeft: "8px",
  color: "rgba(0, 0, 0, 0.54)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
