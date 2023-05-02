import React from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { uid } from "uid";
import { useDispatch } from "react-redux";
import { add, update } from "../../feature/experience/experienceSlice";
function ExperienceForm(props) {
  const [organization, setOrganization] = useState(props?.organization ?? "");
  const [joinDate, setJoinDate] = useState(props?.joinDate ?? "");
  const [lastDate, setLastDate] = useState(props?.lastDate ?? "");
  const [location, setLocation] = useState(props?.location ?? "");
  const [technologies, setTechnologies] = useState(props?.technologies ?? []);
  const [position, setPosition] = useState(props?.position ?? "");
  const [ctc, setCtc] = useState(props?.ctc ?? "");

  const dispatch = useDispatch();
  const handleSave = (id) => {
    // if id exist then its a existing education
    if (id) {
      const payload = {
        id: id,
        updatedExperience: {
          organization,
          joinDate,
          location,
          position,
          ctc,
          lastDate,
          technologies,
        },
      };
      dispatch(update(payload));
    } else {
      dispatch(
        add({
          id: uid(6),
          organization,
          joinDate,
          location,
          position,
          ctc,
          lastDate,
          technologies,
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
        marginTop: "2%",
      }}
      autoComplete="off"
    >
      <TextField
        id="org-name"
        label="Organization Name"
        variant="outlined"
        type="text"
        required
        value={organization}
        onChange={(e) => setOrganization(e.target.value)}
      />
      <TextField
        id="join-location"
        label="Joining Location"
        variant="outlined"
        required
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <TextField
        id="position"
        label="Position"
        variant="outlined"
        required
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <TextField
        id="ctc"
        label="CTC"
        variant="outlined"
        required
        value={ctc}
        onChange={(e) => setCtc(e.target.value)}
      />
      <TextField
        id="joining-date"
        label="Joining date"
        type="date"
        variant="outlined"
        required
        InputLabelProps={{ shrink: true }}
        value={joinDate}
        onChange={(e) => setJoinDate(e.target.value)}
      />
      <TextField
        id="last-date"
        label="Last date"
        variant="outlined"
        type="date"
        required
        InputLabelProps={{ shrink: true }}
        value={lastDate}
        onChange={(e) => setLastDate(e.target.value)}
      />

      <TextField
        id="description"
        label="Description of Work"
        variant="outlined"
        required
      />
      <Button onClick={() => handleSave(props?.id ?? null)}>Save</Button>
    </Box>
  );
}

export default ExperienceForm;
