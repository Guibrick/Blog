
import React from 'react';
import Dropdown from './Components/Dropdown';
import Typography from '@mui/material/Typography';
import './Style.css';

function App() {
    return (
        <>
            <Typography variant="h1" color="#fd354d" fontWeight="bold" ml={30} mt={5}>
                Tiny Blog
            </Typography>
            <Typography variant="h2" color="#f8c84b" ml={30} mb={5}>
                Where you can find what others wrote.
            </Typography>
            <Dropdown />
        </>
    );
}

export default App;
