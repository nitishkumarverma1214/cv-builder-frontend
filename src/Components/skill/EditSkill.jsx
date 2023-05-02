import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import SkillForm from "./SkillForm";
function EditSkill({ id, skill, rating }) {
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
        aria-labelledby="skill-modal"
        aria-describedby="modal-skill"
      >
        <>
          <SkillForm
            id={id}
            skill={skill}
            rating={rating}
            closeModal={handleClose}
          />
        </>
      </Modal>
    </>
  );
}

export default EditSkill;
