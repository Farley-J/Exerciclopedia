import React from 'react'
import { Box, Link } from '@mui/material'
import Logo from '../assets/icons8-ez-curl-bar-50.png'
import Stack from '@mui/material/Stack';




const Title = () => {
  return (
    <Link href={'/'} underline="hover" sx={{ color: 'black', marginBottom: '46px', display: 'block' }}>
      <Box>
        <Stack direction="row" spacing={1} sx={{
      justifyContent: "left",
      alignItems: "center",
    }}>
          <img className='logo' src={Logo} alt='logo'/>
          <h1 className='title'>Exerciclopedia</h1>
        </Stack>
      </Box>
    </Link>
    

  )
}

export default Title