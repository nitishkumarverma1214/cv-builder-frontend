import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { add, update } from "../../feature/skill/skillSlice";
import { uid } from "uid";

function SkillForm(props) {
  const dispatch = useDispatch();
  const [skill, setSkill] = useState(props?.skill ?? "");
  const [rating, setRating] = useState(props?.rating ?? 0);
  const handleSave = (id) => {
    // if id exist then its a existing education
    if (id) {
      const payload = {
        id: id,
        updatedSkill: {
          skill,
          rating,
        },
      };

      dispatch(update(payload));
    } else {
      dispatch(
        add({
          id: uid(6),
          skill,
          rating,
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
      <Stack spacing={2} direction="row" alignItems="center">
        <TextField
          id="skill-input"
          label="Skill"
          variant="outlined"
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <Rating
          name="half-rating-read"
          value={rating}
          precision={0.5}
          onChange={(e) => setRating(parseInt(e.target.value))}
        />
      </Stack>
      <Button onClick={() => handleSave(props?.id ?? null)}>Save</Button>
    </Box>
  );
}

export default SkillForm;
