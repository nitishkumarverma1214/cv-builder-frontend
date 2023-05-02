import React from "react";
import AddSkill from "./AddSkill";
import SkillList from "./SkillList";
import CardHeader from "../utils/CardHeader";

function Skills() {
  return (
    <>
      <CardHeader header="Skill" />
      <SkillList />
      <AddSkill />
    </>
  );
}

export default Skills;
