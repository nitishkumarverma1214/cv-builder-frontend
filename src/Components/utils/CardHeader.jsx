import * as React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardHeader({ header }) {
  return (
    <Box sx={{ mb: 1 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h4" component="div">
            {header}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
