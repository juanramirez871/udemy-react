import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Chapter } from './Chapter';


export default function AccordionVideo({ modules }) {

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
              <Accordion key={i} expanded={expanded === 'panel' + i} onChange={handleChange('panel' + i)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id={"panel4bh-header" + i}
                >
                  <Typography sx={{ width: '98%', flexShrink: 0 }}>{chapter.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    {
                      chapter.videos.map((video, ii) => (
                        <Chapter key={ii} i={i} video={video} ii={ii} />
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
