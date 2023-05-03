import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Editor from "./Editor";
import Preview from "./Preview";
import Template from "./Template";
import { useLocation } from "react-router-dom";
import unSavedChangeWarning from "../hooks/useUnsavedChangeWarning";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";
import SaveIcon from "@mui/icons-material/Save";
import { savePdf } from "../util/savePdf";

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
  const [, setPristine] = unSavedChangeWarning();
  const handleDownload = () => {
    savePdf();
  };
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "100%", marginTop: "4rem" }}>
      <section
        className="button-container"
        style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}
      >
        <Button onClick={setPristine}>
          <SaveIcon />
        </Button>
        <Button onClick={handleDownload}>
          <DownloadIcon />
        </Button>
        <Button>
          <ShareIcon />
        </Button>
      </section>
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
