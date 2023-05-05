import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { generatePDF } from "../util/generatePdf";
import { useState } from "react";
import axios from "axios";

function Share() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [url, setUrl] = useState("");
  const title = "My CV";

  const handleShare = async () => {
    handleOpen();
    try {
      const pdf = await generatePDF();
      const formData = new FormData();
      formData.append("file", pdf);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/upload/pdf`,
        formData,
        { withCredentials: true },
      );
      console.log(response.data.file);
      setUrl(response.data.file);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button onClick={handleShare}>
        <ShareIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="social share"
        aria-describedby="share"
      >
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            display: "flex",
            flexDirection: "column",
            borderRadius: "1rem",
            flexWrap: "wrap",
            background: "white",
            boxShadow: 24,
            margin: "auto",
            alignItems: "center",
            maxWidth: "80vw",
            marginTop: "5%",
          }}
        >
          <h2>Share</h2>
          <div
            className="button-wrapper"
            style={{ display: "flex", flexDirection: "row", p: 2, gap: "2rem" }}
          >
            <FacebookShareButton url={url} quote={title}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>

            <TwitterShareButton url={url} title={title}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>

            <EmailShareButton
              url={url}
              subject={title}
              body="Check out my PDF file!"
            >
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default Share;
