import React from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { uid } from "uid";
import { useDispatch } from "react-redux";
import { add, update } from "../../feature/education/educationSlice";
function EducationForm(props) {
  const [institute, setInstitute] = useState(props?.institution ?? "");
  const [_degree, setDegree] = useState(props?.degree ?? "");
  const [percentage, setPercentage] = useState(props?.percent ?? "");
  const dispatch = useDispatch();
  const handleSave = (id) => {
    // if id exist then its a existing education
    if (id) {
      const payload = {
        id: id,
        updatedEducation: {
          institution: institute,
          degree: _degree,
          percent: percentage,
        },
      };
      dispatch(update(payload));
    } else {
      dispatch(
        add({
          id: uid(),
          institution: institute,
          degree: _degree,
          percent: percentage,
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
        marginTop: "10%",
      }}
      autoComplete="off"
    >
      <TextField
        id="institution"
        label="Institution Name"
        variant="outlined"
        value={institute}
        onChange={(e) => setInstitute(e.target.value)}
        required
      />
      <TextField
        id="degree"
        label="Degree"
        variant="outlined"
        type="text"
        value={_degree}
        onChange={(e) => setDegree(e.target.value)}
        required
      />

      <TextField
        id="percent"
        label="Percent/CGPA"
        variant="outlined"
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
      />
      <Button onClick={() => handleSave(props?.id ?? null)}>Save</Button>
    </Box>
  );
}

export default EducationForm;
