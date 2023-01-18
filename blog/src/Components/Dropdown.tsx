import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import History from '../Components/Posts';
import Tags from '../Components/Tags';
import tagProps from '../Types/TagProps';
import Classic from './Classic';
import Fiction from './Fiction';
import Magical from './Magical';
import Crime from './Crime';

function Dropdown() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <>
            <div>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Classic
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Classic />
                    </AccordionDetails>
                </Accordion>
            </div>
            <div>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Fiction
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Fiction />
                    </AccordionDetails>
                </Accordion>
            </div>
            <div>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Magical
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Magical />
                    </AccordionDetails>
                </Accordion>
            </div>
            <div>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                           Crime
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Crime />
                    </AccordionDetails>
                </Accordion>
            </div>
            <div>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            History
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <History />
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    );
}

export default Dropdown;