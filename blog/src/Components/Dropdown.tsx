import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Grid, } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Item from '@mui/material/Grid';
import History from './History';
import Classic from './Classic';
import Fiction from './Fiction';
import Magical from './Magical';
import Crime from './Crime';
import '../Style.css';

function Dropdown() {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Grid
            container
            direction="column"
            spacing={1}
            ml={35}
            style={{ width: "900px" }}
        >
            <Grid item style={{ width: "900px" }}>
                <Item m={1}>
                    <Accordion id="accordion" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5" fontWeight="bolder" align="center" pl={5}>
                                Classic
                            </Typography>
                            <Typography variant="h6" fontWeight="normal" align="center" pl={4.5}>
                                Here you can find posts related to classic content.
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Classic />
                        </AccordionDetails>
                    </Accordion>
                </Item>
            </Grid>
            <Grid item style={{ width: "900px" }}>
                <Item m={1}>
                    <Accordion id="accordion" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5" fontWeight="bolder" align="center" pl={5}>
                                Fiction
                            </Typography>
                            <Typography variant="h6" fontWeight="normal" align="center" pl={5}>
                                If you are interested in fiction stories, you must click here.
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Fiction />
                        </AccordionDetails>
                    </Accordion>
                </Item>
            </Grid>
            <Grid item style={{ width: "900px" }}>
                <Item m={1}>
                    <Accordion id="accordion" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5" fontWeight="bolder" align="center" pl={5}>
                                Magical
                            </Typography>
                            <Typography variant="h6" fontWeight="normal" align="center" pl={3.5}>
                                Stories with things out of the ordinary.
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Magical />
                        </AccordionDetails>
                    </Accordion>
                </Item>
            </Grid>
            <Grid item style={{ width: "900px" }}>
                <Item m={1}>
                    <Accordion id="accordion" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5" fontWeight="bolder" align="center" pl={5}>
                                Crime
                            </Typography>
                            <Typography variant="h6" fontWeight="normal" align="center" pl={6}>
                                Things that happened in the criminal world yesterday and today.
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Crime />
                        </AccordionDetails>
                    </Accordion>
                </Item>
            </Grid>
            <Grid item style={{ width: "900px" }}>
                <Item m={1}>
                    <Accordion id="accordion" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h5" fontWeight="bolder" align="center" pl={5}>
                                History
                            </Typography>
                            <Typography variant="h6" fontWeight="normal" align="center" pl={4}>
                                Anecdotes about facts of Universal History.
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