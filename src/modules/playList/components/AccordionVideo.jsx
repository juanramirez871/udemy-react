import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import modules from "../mocks/modules.json";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function AccordionVideo() {

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <div style={{ marginBottom: "30px", position: "sticky", top: "20px" }} className='topA'>
        {
          modules.length > 0
          &&
          (
            modules.map((chapter, i) => (
              <Accordion key={chapter.id} expanded={expanded === 'panel' + i} onChange={handleChange('panel' + i)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id={"panel4bh-header" + i}
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>{chapter.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    {
                      chapter.videos.map((video, i) => (
                        <li key={i}>
                            {
                              video.isWatched == "true"
                              ?
                              <Checkbox { ...label } id={"checkbox" + i} color="success" checked />
                              :
                              <Checkbox { ...label } id={"checkbox" + i} color="success" />
                            }
                            <Link>
                              { video.position }. { video.title }
                            </Link>
                          </li>
                      ))
                    }
                  </ul>
                </AccordionDetails>
              </Accordion>
            ))
          )
        }
      </div>
    </div>
  );
}
