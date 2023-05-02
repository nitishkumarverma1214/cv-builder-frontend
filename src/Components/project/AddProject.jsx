import React from "react";
import Modal from "@mui/material/Modal";
import ProjectForm from "./ProjectForm";
import CustomButton from "../utils/CustomButton";
function AddProject() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <CustomButton onClickHandler={handleOpen} title={"Add Project"} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add-project"
        aria-describedby="add-project"
      >
        <>
          <ProjectForm closeModal={handleClose} />
        </>
      </Modal>
    </>
  );
}

export default AddProject;
