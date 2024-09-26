import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "8px",
          fontSize: "18px",
        }}
      >
        &lt;
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page - 1)}
          style={{
            backgroundColor: currentPage === page - 1 ? "white" : "transparent",
            color: "#007bff",
            border: currentPage === page - 1 ? "1px solid #007bff" : "none", // Skinnier 1px border
            margin: "0 4px",
            padding: "8px 12px",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: currentPage === page - 1 ? "bold" : "normal",
            fontSize: "16px",
            transition: "background-color 0.3s ease", // Smooth transition
          }}
          // Add hover effect for non-current page buttons
          onMouseEnter={(e) => {
            if (currentPage !== page - 1) {
              (e.target as HTMLButtonElement).style.backgroundColor = "#f0f0f0"; // Light grey on hover
            }
          }}
          onMouseLeave={(e) => {
            if (currentPage !== page - 1) {
              (e.target as HTMLButtonElement).style.backgroundColor =
                "transparent"; // Revert back to transparent
            }
          }}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "8px",
          fontSize: "18px",
        }}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
