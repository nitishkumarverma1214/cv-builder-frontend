import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Editor from "./Editor";
import Preview from "./Preview";
import Template from "./Template";
import { useLocation } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function BuildCv() {
  const location = useLocation();
  const cvId = location.pathname.split("/")[2];
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "100%", marginTop: "4rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Item>
            <Editor />
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>{cvId === "1" ? <Preview /> : <Template />}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BuildCv;
