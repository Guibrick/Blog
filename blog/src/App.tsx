
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import React from 'react';
import Dropdown from './Components/Dropdown';
import Typography from '@mui/material/Typography';
import './App.css';

function App() {
    return (
        <>
            <Typography variant="h1" color="#fd354d" margin="25px">
                Tiny Blog
            </Typography>
            <Typography variant="h2" color="#f8c84b" margin="25px">
                Where you can find what others wrote.
            </Typography>
            <Dropdown />
        </>


    );
}

export default App;
