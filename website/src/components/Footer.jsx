import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


const Footer = () => (
  
    <Box mt="80px" bgcolor="#2C2C2C"  sx={{
      position: 'fixed',
      left: '0',
      bottom: '0',
      width: '100%',
      textAlign: 'center'  
                }}>
      <Typography variant="h5" sx={{ fontSize: { lg: '20px', xs: '20px' },color: "white" }} mt="41px" textAlign="center" pb="40px">Made by Farley Jeannis </Typography>
    </Box>
  
  
);

export default Footer;