import React, { useEffect, useState } from "react";
import {
  Table,
  Text,
  useMantineTheme,
  Divider,
  Pagination,
  Select,
  Button,
  Modal,
  Paper,
  Group,
  Center
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import Sample from "../PIT_cardsmainpage";
import Pit_details from "./Pit_details";

const Usertable = ({ data, columns, visibleColumns, filterStatus }) => {
  console.log("filterdataaaaa",filterStatus)
  const theme = useMantineTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDateColumn, setSelectedDateColumn] = useState("");
  const [selectedRow, setSelectedRow] = useState(null); // To store the selected row data
  const [isModalOpen, setIsModalOpen] = useState(false); // To control modal visibility

   // Apply status filter when the filterStatus prop changes
  useEffect(() => {
    handleFilterChange("status", filterStatus);
  }, [filterStatus]);



  const handleDatePickerButtonClick = (column) => {
    setShowDatePicker((prev) => !prev);
    setSelectedDateColumn(column);
  };

  const handleDatePickerChange = (date) => {
    handleFilterChange(selectedDateColumn, date ? date.toISOString() : "");
    setShowDatePicker(false);
  };

  const handleClearButtonClick = () => {
    handleFilterChange(selectedDateColumn, "");
    setShowDatePicker(false);
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const filteredData = applyFilters(data);
    return filteredData.slice(startIndex, endIndex);
  };

  const applyFilters = (data) => {
    return data.filter((row) =>
      Object.entries(filters).every(([column, filterValue]) => {
        if (!filterValue) return true; // Return true if filter is not set

        const rowValue = row[column];

        if (column.endsWith("_date")) {
          // Check if the date is equal to the filter value
          const formattedRowDate = new Date(rowValue).toLocaleDateString();
          const formattedFilterDate = new Date(
            filterValue
          ).toLocaleDateString();
          return formattedRowDate === formattedFilterDate;
        }

        // Check if the non-date value (or formatted date) is equal to the filter value
        const formattedRowValue =
          typeof rowValue === "object"
            ? rowValue.toLocaleDateString()
            : rowValue;
        return String(formattedRowValue) === filterValue;
      })
    );
  };

  const handleFilterChange = (column, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [column]: value }));
    setCurrentPage(1); // Reset to the first page when filter changes
  };

  const rowsPerPage = 13;
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const generateFilterOptions = (column) => {
    const uniqueValues = Array.from(new Set(data.map((row) => row[column])));
    // If there's only one unique value, return an empty array to omit rendering the filter button
    if (uniqueValues.length === 1) {
      return [];
    }
    return [
      { label: "All", value: "" },
      ...uniqueValues.map((value) => ({
        label: String(value),
        value: String(value),
      })),
    ];
  };
  const activePageStyle = {
    backgroundImage:
      theme.colorScheme === "dark"
        ? "linear-gradient(45deg, #FFC0CB, violet)"
        : theme.colors.blue[6],
    border: 0,
  };

  // Function to handle cell click and display modal
  const handleCellClick = (rowData, column) => {

    // Check if the clicked cell is the one that should trigger the modal
    if (column === "PIT") {
      setSelectedRow(rowData);
      setIsModalOpen(true);
    }
  };

  return (
    <div>
       <div style={{ position: "absolute", top:"40px", right:"40px" }}>
        <Button
         mt="xl"
         radius="xl"
         ml="xl"
         variant="gradient"
          style={{ position: "absolute", top: 0, right: 0 }}
          onClick={() => {
            // Add your export functionality here
            console.log("Export button clicked");
          }}
        >
          Export
        </Button>
      </div>
      <Divider size="lg" />
      <Table    
        mt="xl"
        striped
        highlightOnHover
        withColumnBorders
        withBorder
        verticalSpacing="xs"
        // horizontalSpacing="xs"
        columnWidth="content"
        data={data}
      >
        <thead>
          <tr>
            {visibleColumns.map((column) => (
              <th key={column}>
                {columns[column]}
                <br />
                {column.endsWith("_date") ? (
                  <div>
                    <Button
                      variant="outline"
                      size="xs"
                      radius="xl"
                      onClick={() => handleDatePickerButtonClick(column)}
                    >
                      {showDatePicker && selectedDateColumn === column
                        ? "close"
                        : "Filter"}
                    </Button>
                    {showDatePicker && selectedDateColumn === column && (
                      <DatePicker
                        value={
                          filters[column] ? new Date(filters[column]) : null
                        }
                        onChange={handleDatePickerChange}
                        placeholder="Select date"
                        withSelect
                      />
                    )}
                  </div>
                ) : (
                  <Select
                    placeholder="Filter"
                    clearable
                    searchable
                    data={generateFilterOptions(column)}
                    value={filters[column] || ""}
                    onChange={(value) =>
                      handleFilterChange(column, value)
                    }
                    placement="bottom-start" // Set the placement to "bottom-start"
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {getPaginatedData().map((row, index) => (
            <tr key={index}>
              {visibleColumns.map((column) => (
                <td key={column}>
                  {column === "PIT" ? (
                    <Center>
                      <Button
                        variant="outline"
                        size="xs"
                        radius="xl"
                        onClick={() => handleCellClick(row, column)}

                      >

                        {row[column]}
                      </Button>
                    </Center>
                  ) : (
                    column.endsWith("_date") ? (
                      new Date(row[column]).toLocaleDateString()
                    ) : (
                      row[column]
                    )
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      {totalPages > 1 && (
        <Pagination
          total={totalPages}
          value={currentPage}
          onChange={handlePageChange}
          size="sm"
          siblings={2}
          limit={1}
          boundaries={1}
          position="right"
          style={{ marginTop: "20px" }}
          styles={(currentTheme) => ({
            control: {
              "&[data-active]": activePageStyle,
            },
          })}
        />
      )}

      {/* Modal to display selected row details */}
      {selectedRow && (
        <Modal
          opened={isModalOpen}
          onClose={() => setIsModalOpen(false)} // Close modal
          size="auto"
          transitionProps={{
            transition: "fade",
            duration: 500,
            timingFunction: "linear",
          }}
          overlayProps={{
            color:
              theme.colorScheme === "dark"
                ? theme.colors.dark[9]
                : theme.colors.gray[2],
            opacity: 0.55,
            blur: 3,
          }}
        >
          {/* Render selected row details in the modal */}
          <Paper shadow="md" radius="lg" p="xl">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Text fw="bold" mt="xl">User ID: {selectedRow.PIT}</Text>
              <Text fw="bold" mt="xl">SCC NAME: {selectedRow.SCCUser}</Text>
              <Text fw="bold" mt="xl">PCC NAME: {selectedRow.PCCUser}</Text>
              {/* Continue rendering other row details as needed */}
              {/* Render additional row data as needed */}
            </div>

            <Pit_details />
          </Paper>
        </Modal>
      )}

      {data.length === 0 && <Text>No data available.</Text>}
    </div>
  );
};

export default Usertable;
