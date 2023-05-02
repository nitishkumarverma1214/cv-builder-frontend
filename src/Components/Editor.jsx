import * as React from "react";
import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import BasicDetails from "./BasicDetails";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Project from "./project/Project";
import Skills from "./skill/Skills";
import SocialForm from "./form/SocialForm";

export default function Editor() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label=""
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Basic Information" value="1" />
              <Tab label="Education" value="2" />
              <Tab label="Experience" value="3" />
              <Tab label="Project" value="4" />
              <Tab label="Skills" value="5" />
              <Tab label="Social Profiles" value="6" />
            </TabList>
          </Box>

          <TabPanel value="1">
            <BasicDetails />
          </TabPanel>
          <TabPanel value="2">
            <Education />
          </TabPanel>
          <TabPanel value="3">
            <Experience />
          </TabPanel>
          <TabPanel value="4">
            <Project />
          </TabPanel>
          <TabPanel value="5">
            <Skills />
          </TabPanel>
          <TabPanel value="6">
            <SocialForm />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
