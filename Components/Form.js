// import React from 'react'
import {
  Box,
  Tab,
  Tabs,
  Modal,
  Fade,
  Backdrop,
  Typography,
} from "@mui/material";
import { useState } from "react";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: 530,
    bgcolor: "white",
    border: "1px solid #000",
    boxShadow: 24,
    p: 3,
  };

  import Login from './Login'
import Signup from "./Signup";

export default function Form({ formOpen, setFormOpen }) {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  const handleClose = () => {
    setFormOpen(false);
  };

  return (
    <div>
      <Modal
        open={formOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={formOpen}>
          <Box sx={style}>
            <Tabs value={tabIndex} onChange={handleTabChange} centered sx={{paddingBottom:"10px"}}>
              <Tab label="Login" sx={{width:"50%"}} />
              <Tab label="Register" sx={{width:"50%"}} />
            </Tabs>
            
              {tabIndex === 0 && (
                <Login/>
              )}
              {tabIndex === 1 && (
                <Signup/>
              )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
