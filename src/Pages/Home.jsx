import React from "react";
import Preview from "../Components/Preview";
import Template from "../Components/Template";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const style = {
    flexBasis: "50%",
    border: "2px solid #C8C8C8",
    cursor: "pointer",
  };
  return (
    <div
      style={{ margin: "0.4rem", marginTop: "4rem" }}
      className="homepage-container"
    >
      <h1 style={{ marginTop: 0 }}>Select the Resume template</h1>
      <div className="preview-container">
        <section style={style} onClick={() => navigate("/edit/1")}>
          <Preview />
        </section>
        <section style={style} onClick={() => navigate("/edit/2")}>
          <Template />
        </section>
      </div>
    </div>
  );
}

export default Home;
