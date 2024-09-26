import React, { useState, useMemo } from "react";
import Pagination from "./Pagination";
import { Input } from "../input";
import { Search, ArrowDropUp, ArrowDropDown } from "@mui/icons-material";
import "./styles.css";

interface RowData {
  [key: string]: string | number | undefined;
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
  enableQuickFilter?: boolean;
}

const TableGrid: React.FC<TableGridProps> = ({
  columns,
  data,
  dataPerPage = 10,
  enableQuickFilter = true,
}) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc" | null;
  } | null>(null);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [originalData] = useState([...data]);

  const requestSort = (key: string) => {
    if (sortConfig?.key === key) {
      let nextDirection: "asc" | "desc" | null = "asc";
      if (sortConfig.direction === "asc") nextDirection = "desc";
      else if (sortConfig.direction === "desc") nextDirection = null;

      setSortConfig({ key, direction: nextDirection });
    } else {
      setSortConfig({ key, direction: "asc" });
    }
  };

  const sortedData = useMemo(() => {
    if (!sortConfig || sortConfig.direction === null) {
      return [...originalData];
    }
    const sortableData = [...data];
    sortableData.sort((a, b) => {
      const aValue = a[sortConfig.key] as string | number;
      const bValue = b[sortConfig.key] as string | number;

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
    return sortableData;
  }, [data, sortConfig, originalData]);

  const filteredData = useMemo(() => {
    if (!enableQuickFilter) return sortedData;
    return sortedData.filter((row) =>
      columns.some((column) => {
        const value = row[column.id]?.toString().toLowerCase() || "";
        return value.includes(filter.toLowerCase());
      }),
    );
  }, [sortedData, filter, columns, enableQuickFilter]);

  const paginatedData = useMemo(() => {
    const startIndex = currentPage * dataPerPage;
    const endIndex = startIndex + dataPerPage;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, currentPage, dataPerPage]);

  const totalPages = Math.ceil(filteredData.length / dataPerPage);

  return (
    <div className="table-container">
      {enableQuickFilter && (
        <Input
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(0);
          }}
          placeholder="Search..."
          variant="rounded"
          icon={<Search />}
        />
      )}

      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                onClick={() => requestSort(column.id)}
                style={{
                  cursor: "pointer",
                  textAlign: "left",
                  fontSize: "14px",
                  padding: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {column.label}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <ArrowDropUp
                      style={{
                        color:
                          sortConfig?.key === column.id &&
                          sortConfig.direction === "asc"
                            ? "#007bff"
                            : "#ccc",
                        fontSize: "16px",
                      }}
                    />
                    <ArrowDropDown
                      style={{
                        color:
                          sortConfig?.key === column.id &&
                          sortConfig.direction === "desc"
                            ? "#007bff"
                            : "#ccc",
                        fontSize: "16px",
                      }}
                    />
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.id} style={{ padding: "8px" }}>
                  {column.renderCell
                    ? column.renderCell(row)
                    : row[column.id] || "N/A"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

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
