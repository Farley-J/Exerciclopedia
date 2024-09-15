import React from 'react';
import { Box, Typography } from '@mui/material';


const Footer = () => (
  
    <Box mt="40px" bgcolor="#2C2C2C"  sx={{
      position: 'fixed',
      left: '0',
      bottom: '0',
      width: '100%',
      textAlign: 'center'  
                }}>
      <Typography variant="h6" sx={{ fontSize: { lg: '10px', xs: '10px' },color: "white" }} mt="21px" textAlign="center" >Made by Farley Jeannis </Typography>
    </Box>
  
  
);

export default Footer;