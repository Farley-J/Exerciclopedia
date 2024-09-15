import React from 'react';
import { Box, Typography, Stack, Button, Link as MuiLink } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ResultsPage = () => {
    const location = useLocation();
    const { results } = location.state || { results: [] }; // Retrieve passed data

    return (
        <Box p={2}>
            <Typography variant="h4" gutterBottom>
                Search Results
            </Typography>
            <Box
            sx={{
                display: 'flex',            // Use Flexbox
                flexWrap: 'wrap',           // Allow items to wrap to the next line if needed
                justifyContent: 'center',   // Center items horizontally
                gap: '16px',                // Add spacing between items
            }}
            >
            {results.length > 0 ? (
                results.map((item, index) => (
                    <Box key={index} mb={2} sx={{  flex: '1 1 200px',    // Allow the box to grow/shrink and set a minimum width
                        maxWidth: '300px',    // Set a maximum width to control item size
                        padding: '16px',
                        textAlign: 'center', }} >
                    <MuiLink
                    component={Link}
                    to={`/exercise/${item.id}`}   // Unique path for each item
                    state={{ item }}  // Pass the entire item object as state
                    underline="none"
                >
                        <img src={item.gifUrl} alt={item.name} loading="lazy" />
                        <Stack direction="row" spacing={1}>
                            <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                                {item.bodyPart}
                            </Button>
                            <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                                {item.target}
                            </Button>
                        </Stack>
                        <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
                        {item.name}
                        </Typography>
                    </MuiLink>
                    </Box>
                ))
            ) : (
                <Typography>No results found</Typography>
            )}
            </Box>
        </Box>
    );
};

export default ResultsPage;
