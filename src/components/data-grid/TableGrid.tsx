import React, { useState, useMemo } from "react";
import "./styles.css";
import Pagination from "./Pagination";
import SearchIcon from "@mui/icons-material/Search"; // MUI Search icon
import { Input } from "../input"; // Import the custom Input component
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

interface RowData {
  [key: string]: string | number | undefined; // Key-value pairs for row data (flexible schema)
}

interface Column {
  id: string;
  label: string;
  renderCell?: (_row: RowData) => React.ReactNode;
}

interface TableGridProps {
  columns: Column[];
  data: RowData[];
  dataPerPage?: number;
}

const TableGrid: React.FC<TableGridProps> = ({
  columns,
  data,
  dataPerPage = 10,
}) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const requestSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = useMemo(() => {
    const sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        const aValue = a[sortConfig.key] as string | number;
        const bValue = b[sortConfig.key] as string | number;

        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const filteredData = useMemo(() => {
    return sortedData.filter((row) =>
      columns.some((column) => {
        const value = row[column.id]?.toString().toLowerCase() || "";
        return value.includes(filter.toLowerCase());
      }),
    );
  }, [sortedData, filter, columns]);

  const paginatedData = useMemo(() => {
    const startIndex = currentPage * dataPerPage;
    const endIndex = startIndex + dataPerPage;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, currentPage, dataPerPage]);

  const totalPages = Math.ceil(filteredData.length / dataPerPage);

  return (
    <div className="table-container">
      {/* Custom Input component with margin and correct icon positioning */}
      <Input
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
          setCurrentPage(0); // Reset pagination when filtering
        }}
        placeholder="Search..."
        variant="filled" /* You can change to "outlined" or "rounded" */
        icon={<SearchIcon />} // Add search icon
      />

      {/* Table */}
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                onClick={() => requestSort(column.id)}
                style={{ cursor: "pointer" }}
              >
                {column.label}
                <ArrowUpward
                  style={{
                    color:
                      sortConfig?.key === column.id &&
                      sortConfig.direction === "asc"
                        ? "#007bff"
                        : "#ccc",
                    fontSize: "16px",
                    marginLeft: "4px",
                  }}
                />
                <ArrowDownward
                  style={{
                    color:
                      sortConfig?.key === column.id &&
                      sortConfig.direction === "desc"
                        ? "#007bff"
                        : "#ccc",
                    fontSize: "16px",
                    marginLeft: "4px",
                  }}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.id}>
                  {column.renderCell
                    ? column.renderCell(row)
                    : row[column.id] || "N/A"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Numbered Pagination controls */}
      <div className="pagination-container">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default TableGrid;
