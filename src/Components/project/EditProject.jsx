import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import ProjectForm from "./ProjectForm";
function EditProject({
  id,
  projectTitle,
  teamSize,
  duration,
  technology,
  description,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen}>
        <EditIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <ProjectForm
            id={id}
            closeModal={handleClose}
            projectTitle={projectTitle}
            teamSize={teamSize}
            duration={duration}
            technology={technology}
            description={description}
          />
        </>
      </Modal>
    </>
  );
}

export default EditProject;
