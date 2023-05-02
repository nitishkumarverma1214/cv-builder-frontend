import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../feature/project/projectSlice";
import Paper from "@mui/material/Paper";

import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import EditProject from "./EditProject.jsx";
import { Fragment } from "react";
function ProjectList() {
  const projectList = useSelector((state) => state.project);
  const dispatch = useDispatch();
  return projectList.map(
    ({ id, projectTitle, teamSize, duration, technology, description }) => (
      <Fragment key={id}>
        <Paper elevation={3} sx={{ m: 1 }}>
          <h3>{projectTitle}</h3>
          <div>
            <p>Team Size: {teamSize}</p>
            <p>Duration:{duration}</p>
            <p>Technology:{technology}</p>
          </div>
          <p>{description}</p>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="flex-end"
            padding={2}
          >
            <EditProject
              projectTitle={projectTitle}
              teamSize={teamSize}
              duration={duration}
              technology={technology}
              description={description}
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
    ),
  );
}

export default ProjectList;
