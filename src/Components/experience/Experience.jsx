import React from "react";
import CardHeader from "../utils/CardHeader";
import ExperienceList from "./ExperienceList";
import AddExperience from "./AddExperience";

function Experience() {
  return (
    <div>
      <CardHeader header="Experience" />
      <ExperienceList />
      <AddExperience />
    </div>
  );
}

export default Experience;
