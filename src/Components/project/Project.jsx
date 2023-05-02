import React from "react";
import CardHeader from "../utils/CardHeader";
import ProjectList from "./ProjectList";
import AddProject from "./AddProject";

function Project() {
  return (
    <>
      <CardHeader header="Project" />
      <ProjectList />
      <AddProject />
    </>
  );
}

export default Project;
