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
  zIndex: 3, // Make sure fixed headers stay on top
}));

// Table rows and cells
export const StyledTd = styled("td")(() => ({
  padding: "12px",
  borderBottom: "1px solid #ddd",
  color: "#333",
  textAlign: "left",
  verticalAlign: "top",
  transition: "background-color 1.3s ease, color 0.3s ease",
  position: "relative", // Add relative positioning for z-index control
  zIndex: 1, // Ensure fixed column stays on top, but allow hover
  backgroundColor: "#fff", // Make sure fixed columns have a solid background
}));

export const StyledTr = styled("tr")(() => ({
  transition: "background-color 0.3s ease, color 0.3s ease",
  zIndex: 1, // Allow row hover effect to be visible under fixed columns
  "&:hover": {
    backgroundColor: "#f9f9f9",
    color: "#222",
  },
  // Ensure the hover effect works with fixed columns
  "&:hover td": {
    backgroundColor: "#f9f9f9",
    zIndex: 0, // Hovered cell gets higher z-index but is still below the fixed header
  },
}));

// Pagination container (make sure this is outside the table scroll container)
export const PaginationContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "20px",
}));
