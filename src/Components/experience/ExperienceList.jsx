import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../feature/experience/experienceSlice";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import EditExperience from "./EditExperience";
import { Fragment } from "react";
function ExperienceList() {
  const experienceList = useSelector((state) => state.experience);
  const dispatch = useDispatch();
  return experienceList.map(
    ({
      id,
      organization,
      joinDate,
      location,
      position,
      ctc,
      lastDate,
      technologies,
    }) => (
      <Fragment key={id}>
        <Paper elevation={3} sx={{ m: 1 }}>
          <h3>{organization}</h3>
          <p>
            <span>{joinDate}</span>- <span>{lastDate}</span>
          </p>
          <p>{location}</p>
          <p>I have worked as {position}</p>
          {technologies && (
            <div>
              I have experience in :
              <List>
                {technologies.map((tech) => (
                  <Fragment key={tech}>
                    <ListItem>
                      <ListItemText primary={tech} />
                    </ListItem>
                  </Fragment>
                ))}
              </List>
            </div>
          )}
          <Stack
            spacing={2}
            direction="row"
            justifyContent="flex-end"
            padding={2}
          >
            <EditExperience
              id={id}
              organization={organization}
              position={position}
              ctc={ctc}
              joinDate={joinDate}
              lastDate={lastDate}
              technologies={technologies}
              location={location}
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

export default ExperienceList;
