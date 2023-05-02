import React from "react";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import TextField from "@mui/material/TextField";
import CardHeader from "./utils/CardHeader";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { update } from "../feature/personal-details/personalDetailSlice";
function BasicDetails() {
  const dispatch = useDispatch();
  const personalDetail = useSelector((state) => state.personalDetail);
  return (
    <>
      <CardHeader header="Basic Details" />

      <Box
        component="form"
        maxWidth={true}
        sx={{
          "& > :not(style)": { m: 1 },
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          p: 2,
          borderRadius: "1rem",
        }}
        autoComplete="off"
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            value={personalDetail.name}
            sx={{ maxWidth: "75%" }}
            onChange={(e) =>
              dispatch(update({ key: "name", value: e.target.value }))
            }
            required
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              accept="image/*"
              type="file"
              name="image"
              onChange={(e) =>
                dispatch(update({ key: "image", value: e.target.value }))
              }
            />
            <PhotoCamera />
          </IconButton>
        </Stack>
        <TextField
          id="position"
          label="position"
          variant="outlined"
          type="text"
          name="position"
          value={personalDetail.position}
          onChange={(e) =>
            dispatch(update({ key: "position", value: e.target.value }))
          }
          required
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          value={personalDetail.email}
          name="email"
          onChange={(e) =>
            dispatch(update({ key: "email", value: e.target.value }))
          }
          required
        />
        <TextField
          id="phone"
          label="Phone"
          variant="outlined"
          type="tel"
          value={personalDetail.phone}
          name="phone"
          onChange={(e) =>
            dispatch(update({ key: "phone", value: e.target.value }))
          }
        />
        <TextField
          id="address"
          label="Address"
          variant="outlined"
          value={personalDetail.address}
          name="address"
          onChange={(e) =>
            dispatch(update({ key: "address", value: e.target.value }))
          }
        />
        <TextField
          id="state"
          label="State"
          variant="outlined"
          value={personalDetail.state}
          name="state"
          onChange={(e) =>
            dispatch(update({ key: "state", value: e.target.value }))
          }
        />
        <TextField
          id="pincode"
          label="Pincode"
          variant="outlined"
          value={personalDetail.pin}
          name="pin"
          onChange={(e) =>
            dispatch(update({ key: "pin", value: e.target.value }))
          }
        />
        <TextField
          id="intro"
          label="Intro Para"
          variant="outlined"
          value={personalDetail.summary}
          name="summary"
          onChange={(e) =>
            dispatch(update({ key: "summary", value: e.target.value }))
          }
          multiline
          rows={3}
        />
      </Box>
    </>
  );
}

export default BasicDetails;
