import React from "react";
import Modal from "@mui/material/Modal";
import CustomButton from "../utils/CustomButton";
import SkillForm from "./SkillForm";
function AddSkill() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <CustomButton onClickHandler={handleOpen} title={"Add Skill"} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add-skill"
        aria-describedby="add-skill"
      >
        <>
          <SkillForm closeModal={handleClose} />
        </>
      </Modal>
    </>
  );
}

export default AddSkill;
