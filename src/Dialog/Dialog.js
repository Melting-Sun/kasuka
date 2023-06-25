import * as React from "react";
import "./Dialog.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


function Dialog() {
  return (
    <div className="dialog-container">
      <div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            style={{ width: "400px" }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            style={{ width: "400px" }}
          />
          <TextField
            id="outlined-basic"
            label="Subject"
            variant="outlined"
            style={{ width: "820px" }}
          />
          <TextField
            id="outlined-basic"
            label="Text"
            variant="outlined"
            style={{ width: "820px" }}
          />
        </Box>

        <button className="dialog-button">Send</button>
      </div>
    </div>
  );
}

export default Dialog;
