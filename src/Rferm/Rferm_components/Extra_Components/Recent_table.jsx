import { Badge, Modal, Paper, Table, Text } from "@mantine/core";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import Pit_details from "../Pit_details";
import { Underline } from "tabler-icons-react";
import { blue } from "@mui/material/colors";

const Recent_table = ({ data }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const getStatusColor = (status) => {
    switch (status) {
      case "Fault":
        return "#1dbac5";
      case "Warning":
        return "#d14d14";
      case "Danger":
        return "#c51d31";
      case "Battery-low":
        return "#24782c";
    }
  };
  const linkStyles = {
    color: "#206AD2",
    textDecoration: "underline",
    cursor: "pointer", // Ensure cursor changes to pointer when hovering over the link
  };

  const hoverStyles = {
    color: "darkblue",
  };

   const handleRowClick = (row) => {
    setSelectedRow(row);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Paper withBorder p="md" radius="md" mt="xl">
    <div style={{ maxHeight: "400px", overflowY: "auto" }}>
      {data.map((row, index) => (
        <div
          key={index}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => handleRowClick(row)}
        >
          <Text mt="lg" size="lg" ml="sm" >
            On {row.Date}, {row.status} occurred in Area: {row.Area} in 
          </Text>
          
          <Text mt="lg" size="lg" ml="sm" td={"Underline"} c={blue}>
          {row.pitname}
          </Text>
        </div>
      ))}
    </div>
    <Modal
      opened={modalOpen}
      onClose={handleCloseModal}
      size="auto"
      title={`Details for ${selectedRow && selectedRow.pitname}`}
    >
      {/* Render the details inside the modal */}
      {selectedRow && (
        <div>
         
          <Pit_details/>
          {/* Render additional details here */}
        </div>
      )}
    </Modal>
  </Paper>
);
};

export default Recent_table;