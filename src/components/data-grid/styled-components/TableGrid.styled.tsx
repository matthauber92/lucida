import { styled } from "@mui/material/styles";

// Container for the table
export const TableContainer = styled("div")(({ theme }) => ({
  width: "100%",
  margin: "20px 0",
  padding: "16px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  backgroundColor: theme.palette.background.paper,
}));

// Table styling
export const StyledTable = styled("table")(() => ({
  width: "100%",
  borderCollapse: "collapse",
  color: "#333",
}));

// Table headers
export const StyledTh = styled("th")(() => ({
  padding: "12px",
  backgroundColor: "#f5f5f5",
  cursor: "pointer",
  textAlign: "left",
  fontWeight: "bold",
  borderBottom: "1px solid #ddd",
  userSelect: "none",
  color: "#444",
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
}));

// Table rows and cells
export const StyledTd = styled("td")(() => ({
  padding: "12px",
  borderBottom: "1px solid #ddd",
  color: "#333",
  textAlign: "left",
  verticalAlign: "top",
  transition: "background-color 1.3s ease, color 0.3s ease",
}));

export const StyledTr = styled("tr")(() => ({
  transition: "background-color 0.3s ease, color 0.3s ease",
  "&:hover": {
    backgroundColor: "#f9f9f9",
    color: "#222",
  },
}));

// Pagination container
export const PaginationContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "20px",
}));
