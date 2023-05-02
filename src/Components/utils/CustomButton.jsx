import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function CustomButton({ title, onClickHandler }) {
  return (
    <div style={{ margin: "1rem" }}>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={onClickHandler}
      >
        {title}
      </Button>
    </div>
  );
}

export default CustomButton;
