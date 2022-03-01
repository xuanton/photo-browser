import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      style={{ background: "#2E3B55" }}
      variant="contained"
      onClick={() => navigate(-1)}
    >
      Go Back
    </Button>
  );
}

export default BackButton;
