import React from "react";

import Modal from "@mui/material/Modal";

import EducationForm from "./EducationForm";
import CustomButton from "../utils/CustomButton";
function AddEducation() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <CustomButton onClickHandler={handleOpen} title={"Add Education"} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <EducationForm closeModal={handleClose} />
        </>
      </Modal>
    </>
  );
}

export default AddEducation;
