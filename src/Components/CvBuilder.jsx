import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Editor from "./Editor";
import Preview from "./Preview";
import Template from "./Template";
import { useLocation } from "react-router-dom";
import unSavedChangeWarning from "../hooks/useUnsavedChangeWarning";
import DownloadIcon from "@mui/icons-material/Download";
import SaveIcon from "@mui/icons-material/Save";
import { generatePDF } from "../util/generatePdf";
import Share from "./Share";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function BuildCv() {
  const [font, setFont] = useState("Roboto");
  const location = useLocation();
  const cvId = location.pathname.split("/")[2];
  const [, setPristine] = unSavedChangeWarning();
  const handleDownload = () => {
    generatePDF();
  };
  const handleFontChange = (e) => {
    console.log(e.target.value);
    setFont(e.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: "100%", marginTop: "4rem" }}>
      <section
        className="button-container"
        style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}
      >
        <FormControl>
          <InputLabel id="font">Font</InputLabel>
          <Select
            id="select-font"
            value={font}
            label="font"
            onChange={handleFontChange}
            sx={{ color: "#000" }}
          >
            <MenuItem value="Roboto">Roboto</MenuItem>
            <MenuItem value="Lato">Lato</MenuItem>
            <MenuItem value="Noto Sans">Noto Sans</MenuItem>
          </Select>
        </FormControl>
        <Button onClick={setPristine}>
          <SaveIcon />
        </Button>
        <Button onClick={handleDownload}>
          <DownloadIcon />
        </Button>
        <Share />
      </section>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Item>
            <Editor />
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
            {cvId === "1" ? <Preview font={font} /> : <Template font={font} />}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BuildCv;
