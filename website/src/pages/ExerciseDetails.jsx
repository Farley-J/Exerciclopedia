import React from 'react'
import { Typography, Stack } from '@mui/material';
import { useLocation } from 'react-router-dom';

const ExerciseDetails = () => {
  const location = useLocation();
  const { item } = location.state || {};  // Retrieve the passed item

  if (!item) {
      return <Typography>No item found</Typography>;
  }

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={item.gifUrl} alt={item.name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {item.name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          <Typography variant='h5'>Target:<span> {item.target}</span></Typography><br></br>
          <Typography variant='h5'>Equipment:<span> {item.equipment}</span></Typography><br></br>
          <Typography variant='h5' sx={{ textDecoration: 'underline' }}>Instructions</Typography>
          {item.instructions}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default ExerciseDetails