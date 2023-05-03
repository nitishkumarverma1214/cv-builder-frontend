import { Box, Divider } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React from "react";
import profile from "../assets/man.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

function Template() {
  const personalDetail = useSelector((state) => state.personalDetail);
  const educationList = useSelector((state) => state.education);
  const experienceList = useSelector((state) => state.experience);
  const projectList = useSelector((state) => state.project);
  const skillList = useSelector((state) => state.skill);

  const listStyle = {
    listStyle: "none",
    paddingLeft: 0,
    textAlign: "left",
  };
  return (
    <Paper sx={{ borderRadius: "1rem" }} id="preview-container">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          {/* color palet https://colorhunt.co/palette/6096b493bfcfbdcdd6eee9da */}
          <Grid item xs={5} sx={{ backgroundColor: "#93BFCF", padding: "8px" }}>
            <div
              className="img-container"
              style={{
                borderRadius: "50%",
                margin: "2px",
              }}
            >
              <img
                src={personalDetail.image ? personalDetail.image : profile}
                style={{ width: "100%", maxWidth: "400px", height: "auto" }}
                alt="profile-pic"
              />
            </div>
            <div className="personal-info">
              <h2> Personal Information</h2>

              <div className="info" style={{ backgroundColor: "#BDCDD6" }}>
                <p style={{ wordWrap: "break-word" }}>
                  Email:
                  {personalDetail.email !== ""
                    ? personalDetail.email
                    : "nitish@gmail.com"}
                </p>
                <p>
                  Phone:+91-
                  {personalDetail.phone !== ""
                    ? personalDetail.phone
                    : "87898767889"}
                </p>
                <p>
                  Address:
                  {personalDetail.address !== ""
                    ? personalDetail.address
                    : "HNO. 8 Deepa"}
                </p>
                <p>
                  {personalDetail.city !== "" ? personalDetail.city : "Mumbai"}{" "}
                  {personalDetail.state !== ""
                    ? personalDetail.state
                    : "Maharastra"}
                </p>
                <p>
                  {personalDetail.pin !== "" ? personalDetail.pin : "400016"}
                </p>
              </div>
            </div>
            <div className="social-container">
              <h2>Socail Profile</h2>
              <div
                className="social-link"
                style={{ backgroundColor: "#BDCDD6", padding: "4px" }}
              >
                <Stack spacing={2} direction="row" justifyContent="center">
                  <LinkedInIcon />
                  <GitHubIcon />
                  <TwitterIcon />
                </Stack>
              </div>
            </div>
            {skillList && (
              <>
                <h2>Skills</h2>
                <ul style={listStyle} aria-labelledby="educationList-list">
                  {skillList.map(({ id, skill, rating }) => {
                    return (
                      <li key={id}>
                        <Stack
                          sx={{
                            width: "100%",
                            maxWidth: 500,
                            marginLeft: "0.5rem",
                          }}
                          direction="row"
                          justifyContent="space-evenly"
                        >
                          <h3>{skill}</h3>
                          <h3>{rating}</h3>
                        </Stack>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </Grid>
          <Grid item xs={7} sx={{ background: "#6096B4" }}>
            <h1>
              {personalDetail.name !== ""
                ? personalDetail.name
                : "Nitish Verma"}
            </h1>
            <h3>
              {personalDetail.position !== ""
                ? personalDetail.position
                : "Software Engineer"}
            </h3>
            <p style={{ textAlign: "left", paddingLeft: "0.5rem" }}>
              {personalDetail.summary !== ""
                ? personalDetail.summary
                : "Proven Associate Software Engineer with 4-year Computer Science degree and 1+ years of experience. As a dedicated problem solver, I display an expert skill in JavaScript."}
            </p>

            <Divider />
            {experienceList && (
              <>
                <h2>Experience</h2>
                <ul style={listStyle}>
                  {experienceList.map(
                    ({
                      id,
                      organization,
                      joinDate,
                      location,
                      position,
                      ctc,
                      lastDate,
                      technologies,
                    }) => {
                      return (
                        <li key={id}>
                          <Stack
                            sx={{
                              width: "100%",
                              maxWidth: 500,
                              marginLeft: "0.5rem",
                            }}
                          >
                            <p>
                              <strong>{organization}</strong> | {position}
                            </p>
                            <p>{location}</p>
                            <Stack direction={"row"} justifyContent="center">
                              <p>{joinDate} - </p>
                              <p>{lastDate}</p>
                            </Stack>
                          </Stack>
                        </li>
                      );
                    },
                  )}
                </ul>
              </>
            )}

            <Divider />
            {projectList && (
              <>
                <h2>Projects</h2>
                <ul style={listStyle}>
                  {projectList.map(
                    ({
                      id,
                      projectTitle,
                      teamSize,
                      duration,
                      technology,
                      description,
                    }) => {
                      return (
                        <li key={id}>
                          <div style={{ marginLeft: "0.5rem" }}>
                            <p>
                              <strong> {projectTitle}</strong>
                            </p>
                            <p>{teamSize}</p>
                            <p>{duration}</p>
                            <p>{technology}</p>
                            <p>{description}</p>
                          </div>
                        </li>
                      );
                    },
                  )}
                </ul>
              </>
            )}
            <Divider />
            {educationList && (
              <>
                <h2>education</h2>
                <ul style={listStyle}>
                  {educationList.map(({ degree, id, institution, percent }) => {
                    return (
                      <li key={id}>
                        <Stack sx={{ width: "100%", maxWidth: 500 }}>
                          <p>{degree}</p>
                          <p>{institution}</p>
                          <p>{percent}</p>
                        </Stack>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default Template;
