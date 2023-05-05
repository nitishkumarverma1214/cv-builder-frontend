import React from "react";
import profile from "../assets/man.png";
import { useSelector } from "react-redux";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
function Preview({ font }) {
  const personalDetail = useSelector((state) => state.personalDetail);
  const educationList = useSelector((state) => state.education);
  const experienceList = useSelector((state) => state.experience);
  const projectList = useSelector((state) => state.project);
  const skillList = useSelector((state) => state.skill);

  const label = {
    fontWeight: "bold",
  };
  const listStyle = {
    listStyle: "none",
    paddingLeft: 0,
    textAlign: "left",
  };
  const iconStyle = {
    verticalAlign: "middle",
    display: "inline-block",
    marginRight: "0.5rem",
  };
  return (
    <div id="export-pdf" style={{ fontFamily: font }}>
      <div className="preview-content">
        <h1>{personalDetail.name}</h1>
        <h3>{personalDetail.position}</h3>
        <div
          className="container"
          style={{ gap: "0.8rem", display: "flex", margin: "0.4rem" }}
        >
          <div
            style={{
              justifyContent: "left",
              textAlign: "left",
              flexBasis: "70%",
            }}
          >
            <p>
              <span style={{ ...label, ...iconStyle }}>
                <EmailIcon />
              </span>
              <span style={{ ...label, ...iconStyle }}>Email:</span>
              <span style={iconStyle}>{personalDetail.email}</span>
            </p>
            <p>
              <span style={{ ...label, ...iconStyle }}>
                <PhoneIcon />
              </span>
              <span style={{ ...label, ...iconStyle }}>Phone:</span>
              <span style={iconStyle}>{personalDetail.phone}</span>
            </p>
            <p>
              <span style={{ ...label, ...iconStyle }}>
                <HomeIcon />
              </span>
              <span style={{ ...label, ...iconStyle }}>Address:</span>
              <span style={iconStyle}> {personalDetail.address}</span>
            </p>
            <p style={{ paddingLeft: "6.5rem" }}>
              {personalDetail.city}, {personalDetail.state} {personalDetail.pin}
            </p>
          </div>
          <div style={{ flexBasis: "30%" }}>
            <img
              src={personalDetail.image ? personalDetail.image : profile}
              alt="profile-picture"
              style={{ width: "100%", maxWidth: "400px", height: "auto" }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>

        <br />
        <h2>Proffesional Summary</h2>
        <hr />
        <p style={{ textAlign: "left" }}>{personalDetail.summary}</p>
        <br />
        {experienceList && (
          <>
            <h2>Experience</h2>

            <hr />
            <ul style={listStyle}>
              {experienceList.map(
                ({
                  id,
                  organization,
                  position,
                  joinDate,
                  lastDate,
                  location,
                }) => {
                  return (
                    <li key={id} className="experience-item">
                      <div className="date-row">
                        <p>
                          <strong>{organization}</strong> | {position}
                        </p>
                        <p>
                          {joinDate}
                          ⁠— {lastDate}
                        </p>
                      </div>
                      <p>{location}</p>
                    </li>
                  );
                },
              )}
            </ul>
          </>
        )}
        <br />
        {projectList && (
          <>
            <h2>Project</h2>
            <hr />
            <ul style={listStyle}>
              {projectList.map(
                ({
                  id,
                  projectTitle,
                  teamSize,
                  duration,
                  technology,
                  description,
                }) => (
                  <li key={id}>
                    <div className="">
                      <p>
                        <strong>{projectTitle}</strong>
                      </p>
                      <p>
                        <strong>{technology}</strong>
                      </p>
                    </div>
                    <p>
                      {duration} - {teamSize} Team Member
                    </p>
                    <p>{description}</p>
                  </li>
                ),
              )}
            </ul>
          </>
        )}
        <br />
        {educationList && (
          <>
            <h2>Education</h2>
            <hr />
            <ul style={listStyle}>
              {educationList.map(({ id, institution, degree, percent }) => (
                <li key={id}>
                  <div className="date-row">
                    <p>{degree}</p>
                    <p>
                      <strong>{institution}</strong>
                    </p>
                  </div>
                  <p>{percent}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Preview;
