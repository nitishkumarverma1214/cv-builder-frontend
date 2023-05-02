import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../feature/skill/skillSlice";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import EditSkill from "./EditSkill.jsx";
import { Fragment } from "react";
function SkillList() {
  const skillList = useSelector((state) => state.skill);

  const dispatch = useDispatch();
  return skillList.map(({ id, skill, rating }) => (
    <Fragment key={id}>
      <Paper elevation={3} sx={{ m: 1 }}>
        <Stack
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <h3>{skill}</h3>

          <Rating name="skill-rating" value={rating} precision={0.5} />
        </Stack>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="flex-end"
          padding={2}
        >
          <EditSkill skill={skill} rating={rating} id={id} />
          <Button
            onClick={() => {
              dispatch(remove(id));
            }}
          >
            <DeleteIcon />
          </Button>
        </Stack>
      </Paper>
    </Fragment>
  ));
}

export default SkillList;
