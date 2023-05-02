import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
function SocialForm() {
  return (
    <div>
      <div className="social-container">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
            p: 2,
            borderRadius: "1rem",
            flexWrap: "wrap",
          }}
          autoComplete="off"
        >
          <TextField id="linkedin" label="LinkedIn" variant="outlined" />
          <TextField
            id="github"
            label="Github"
            variant="outlined"
            type="text"
          />

          <TextField id="twitter" label="Twitter" variant="outlined" />
        </Box>
      </div>
    </div>
  );
}

export default SocialForm;
