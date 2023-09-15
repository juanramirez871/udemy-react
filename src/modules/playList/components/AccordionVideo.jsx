import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function AccordionVideo() {

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ marginBottom: "30px" }} className='topA'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='accordionW'
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Module 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ul>
              <li>
                  <Checkbox {...label} color="success" />
                  <Link>
                    1. Title video module 1 Title video module 1
                  </Link>
              </li>
              <li>
                  <Checkbox {...label} color="success" />
                  <Link>
                    1. Title video module 1 Title video module 1
                  </Link>
              </li>
              <li>
                  <Checkbox {...label} color="success" />
                  <Link>
                    1. Title video module 1 Title video module 1
                  </Link>
              </li>
            </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Module 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul>
              <li>
                  <Checkbox {...label} color="success" />
                  <Link>
                    1. Title video module 1 Title video module 1
                  </Link>
              </li>
              <li>
                  <Checkbox {...label} color="success" />
                  <Link>
                    1. Title video module 1 Title video module 1
                  </Link>
              </li>
              <li>
                  <Checkbox {...label} color="success" />
                  <Link>
                    1. Title video module 1 Title video module 1
                  </Link>
              </li>
            </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Module 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul>
              <li>
                  <Checkbox {...label} color="success" />
                  <Link>
                    1. Title video module 1 Title video module 1
                  </Link>
              </li>
              <li>
                  <Checkbox {...label} color="success" />
                  <Link>
                    1. Title video module 1 Title video module 1
                  </Link>
              </li>
              <li>
                  <Checkbox {...label} color="success" />
                  <Link>
                    1. Title video module 1 Title video module 1
                  </Link>
              </li>
            </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Module 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul>
              <li>
                  <Checkbox {...label} color="success" />
                  <Link>
                    1. Title video module 1 Title video module 1
                  </Link>
              </li>
              <li>
                  <Checkbox {...label} color="success" />
                  <Link>
                    1. Title video module 1 Title video module 1
                  </Link>
              </li>
              <li>
                  <Checkbox {...label} color="success" />
                  <Link>
                    1. Title video module 1 Title video module 1
                  </Link>
              </li>
            </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
