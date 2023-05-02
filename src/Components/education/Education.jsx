import React from "react";
import CardHeader from "../utils/CardHeader";
import CustomButton from "../utils/CustomButton";
import EducationList from "./EducationList";
import AddEducation from "./AddEducation";

function Education() {
  return (
    <>
      <CardHeader header="Education" />
      <EducationList />
      <AddEducation />
    </>
  );
}

export default Education;
