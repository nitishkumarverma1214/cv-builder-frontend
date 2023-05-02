import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../feature/education/educationSlice";
import Paper from "@mui/material/Paper";

import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import EditEducation from "./EditEducation";
import { Fragment } from "react";
function EducationList() {
  const educationList = useSelector((state) => state.education);
  const dispatch = useDispatch();
  return educationList.map(({ id, institution, degree, percent }) => (
    <Fragment key={id}>
      <Paper elevation={3} sx={{ m: 1 }}>
        <h3>{institution}</h3>
        <p>
          <span>{degree}</span>, <span>{percent}</span>
        </p>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="flex-end"
          padding={2}
        >
          <EditEducation
            institution={institution}
            degree={degree}
            percent={percent}
            id={id}
          />
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

export default EducationList;
