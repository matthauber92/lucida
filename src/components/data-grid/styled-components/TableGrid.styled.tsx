import { styled } from "@mui/material/styles";

// Container for the table with horizontal scroll
export const TableContainer = styled("div")(({ theme }) => ({
  width: "100%",
  margin: "20px 0",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  backgroundColor: theme.palette.background.paper,
  overflowX: "auto", // Enable horizontal scrolling
  whiteSpace: "nowrap", // Prevent wrapping of columns
}));

// Table styling
export const StyledTable = styled("table")(() => ({
  width: "100%",
  borderCollapse: "collapse",
  color: "#333",
  minWidth: "1000px", // Ensure the table stretches horizontally when needed
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
  position: "sticky",
  zIndex: 3,
}));

// Table rows and cells
export const StyledTd = styled("td")(() => ({
  padding: "12px",
  borderBottom: "1px solid #ddd",
  color: "#333",
  textAlign: "left",
  verticalAlign: "top",
  transition: "background-color 1.3s ease, color 0.3s ease",
  position: "relative",
  zIndex: 1, // Ensure non-fixed cells have a lower z-index than fixed headers/cells
  backgroundColor: "#fff", // Ensure a solid background for all cells
  // Apply box-shadow for fixed columns to ensure scrolling content is not visible behind them
  "&[data-fixed='left']": {
    position: "sticky",
    left: 0,
    zIndex: 2,
    boxShadow: "2px 0 5px -2px rgba(0, 0, 0, 0.2)", // Right shadow to distinguish fixed columns
  },
  "&[data-fixed='right']": {
    position: "sticky",
    right: 0,
    zIndex: 2,
    boxShadow: "-2px 0 5px -2px rgba(0, 0, 0, 0.2)", // Left shadow for right fixed columns
  },
}));

export const StyledTr = styled("tr")(() => ({
  transition: "background-color 0.3s ease, color 0.3s ease",
  "&:hover": {
    backgroundColor: "#f9f9f9",
    color: "#222",
  },
  "&:hover td": {
    backgroundColor: "#f9f9f9", // Apply hover effect uniformly across all cells
  },
}));

// Pagination container (make sure this is outside the table scroll container)
export const PaginationContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "20px",
}));
