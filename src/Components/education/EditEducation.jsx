import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import EducationForm from "./EducationForm";
function EditEducation({ id, institution, degree, percent, editEducation }) {
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
          <EducationForm
            id={id}
            institution={institution}
            degree={degree}
            percent={percent}
            editEducation={editEducation}
            closeModal={handleClose}
          />
        </>
      </Modal>
    </>
  );
}

export default EditEducation;
