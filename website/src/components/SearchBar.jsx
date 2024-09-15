import React, { useState } from 'react'
import { Box, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { useNavigate } from 'react-router-dom'; // React Router v6


const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    //const [response, setResponse] = useState(null);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleClick = async () => {
        try {
            const data = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/name/${inputValue}?offset=0&limit=8`, exerciseOptions);
            navigate('/results', { state: { results: data } }); // Pass data to results page
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


  return (
    <Stack
        sx={{
            justifyContent: "center",
            alignItems: "center"
        }}>
        <Box width={500}  sx={{
            textAlign: "center",
        }}>
            <h2 className='userText'>Search any exercises that you would like to know more about</h2>
        </Box>
        
        <Stack width = {600} direction = 'row' spacing = {1}
        >
            <TextField fullWidth id="outlined-basic" label="Search" variant="outlined" onChange={(e) => setInputValue(e.target.value)} />
            <button className='search-button' onClick={handleClick}>Search</button>
           
        </Stack>
    </Stack>
    
    
  )
}

export default SearchBar