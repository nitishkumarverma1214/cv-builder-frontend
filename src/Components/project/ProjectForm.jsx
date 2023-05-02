import React from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { uid } from "uid";
import { useDispatch } from "react-redux";
import { add, update } from "../../feature/project/projectSlice";
function ProjectForm(props) {
  const [projectTitle, setProjectTitle] = useState(props?.projectTitle ?? "");
  const [teamSize, setTeamSize] = useState(props?.teamSize ?? "");
  const [duration, setDuration] = useState(props?.duration ?? "");
  const [technology, setTechnology] = useState(props?.technology ?? "");
  const [description, setDescription] = useState(props?.description ?? "");

  const dispatch = useDispatch();
  const handleSave = (id) => {
    // if id exist then its a existing education
    if (id) {
      const payload = {
        id: id,
        updatedProject: {
          projectTitle,
          teamSize,
          duration,
          technology,
          description,
        },
      };

      dispatch(update(payload));
    } else {
      dispatch(
        add({
          id: uid(6),
          projectTitle,
          teamSize,
          duration,
          technology,
          description,
        }),
      );
    }
    props?.closeModal();
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        p: 2,
        borderRadius: "1rem",
        flexWrap: "wrap",
        background: "white",
        boxShadow: 24,
        margin: "auto",
        maxWidth: "80vw",
        marginTop: "5%",
      }}
      autoComplete="off"
    >
      <TextField
        id="project-title"
        label="Project Title"
        variant="outlined"
        type="text"
        required
        value={projectTitle}
        onChange={(e) => setProjectTitle(e.target.value)}
      />
      <TextField
        id="team-size"
        label="Team Size"
        variant="outlined"
        required
        value={teamSize}
        onChange={(e) => setTeamSize(e.target.value)}
      />
      <TextField
        id="duration"
        label="Duration"
        variant="outlined"
        required
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <TextField
        id="technology"
        label="Technology"
        variant="outlined"
        required
        value={technology}
        onChange={(e) => setTechnology(e.target.value)}
      />

      <TextField
        id="description"
        label="Description of Project"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        variant="outlined"
        required
      />
      <Button onClick={() => handleSave(props?.id ?? null)}>Save</Button>
    </Box>
  );
}

export default ProjectForm;
