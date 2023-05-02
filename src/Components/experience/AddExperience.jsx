import React from "react";

import Modal from "@mui/material/Modal";

import ExperienceForm from "./ExperienceForm";
import CustomButton from "../utils/CustomButton";
function AddExperience() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <CustomButton onClickHandler={handleOpen} title={"Add Experience"} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add-experience"
        aria-describedby="add-experience"
      >
        <>
          <ExperienceForm closeModal={handleClose} />
        </>
      </Modal>
    </>
  );
}

export default AddExperience;
