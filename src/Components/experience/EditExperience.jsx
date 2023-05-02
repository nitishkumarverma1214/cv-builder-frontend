import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import ExperienceForm from "./ExperienceForm";
function EditExperience({
  id,
  organization,
  position,
  location,
  ctc,
  joinDate,
  lastDate,
  technologies,
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
          <ExperienceForm
            id={id}
            closeModal={handleClose}
            organization={organization}
            position={position}
            ctc={ctc}
            joinDate={joinDate}
            lastDate={lastDate}
            technologies={technologies}
            location={location}
          />
        </>
      </Modal>
    </>
  );
}

export default EditExperience;
