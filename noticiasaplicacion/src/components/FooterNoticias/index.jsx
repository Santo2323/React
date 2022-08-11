import React from "react";
import { AppBar, Typography, Toolbar , Container} from "@mui/material";

import {
  Box,
} from "./FooterStyle"
 
const Footer = () => {

  return (
    <div role='footer'>
        <Box>
                <AppBar position="relative" color="inherit">
                      <Toolbar sx={{ justifyContent: "center" }}>
                          <Typography variant="h7" align="center">
                          Copyright 2022
                          </Typography>
                      </Toolbar>
                  </AppBar>
        </Box>
  </div>
  );
};
export default Footer;
