import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import History from '../Components/History';
import Classic from './Classic';
import Fiction from './Fiction';
import Magical from './Magical';
import Crime from './Crime';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import '../App.css';

function Dropdown() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
            <Grid
                container
                direction="column"
                alignItems="center"
                spacing={5}
            >
                <Grid item>
                    <Item xs={9} sm={9} md={12} >
                        <Accordion id="accordion" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography variant="h5" fontWeight="bolder" align="center">
                                    Classic
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Classic />
                            </AccordionDetails>
                        </Accordion>
                    </Item>
                </Grid>
                <Grid item>
                    <Item xs={9} sm={9} md={12} >
                        <Accordion id="accordion" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography variant="h5" fontWeight="bolder">
                                    Fiction
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Fiction />
                            </AccordionDetails>
                        </Accordion>
                    </Item>
                </Grid>
                <Grid item>
                    <Item xs={9} sm={9} md={12} >
                        <Accordion id="accordion" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography variant="h5" fontWeight="bolder">
                                    Magical
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Magical />
                            </AccordionDetails>
                        </Accordion>
                    </Item>
                </Grid>
                <Grid item>
                    <Item xs={9} sm={9} md={12} >
                        <Accordion id="accordion" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography variant="h5" fontWeight="bolder">
                                    Crime
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Crime />
                            </AccordionDetails>
                        </Accordion>
                    </Item>
                </Grid>
                <Grid item>
                    <Item xs={9} sm={9} md={12} >
                        <Accordion id="accordion" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel5bh-content"
                                id="panel5bh-header"
                            >
                                <Typography variant="h5" fontWeight="bolder">
                                    History
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <History />
                            </AccordionDetails>
                        </Accordion>
                    </Item>
                </Grid>
            </Grid>
    );
}

export default Dropdown;