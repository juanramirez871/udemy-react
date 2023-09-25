import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Chapter } from './Chapter';
import "../../../assets/css/loader.css"

export default function AccordionVideo({ setNameVideo, idUser, modulesDataApi }) {

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <div style={{ marginBottom: "30px", position: "sticky", top: "20px" }} className='topA'>
        {
          modulesDataApi.length > 0
            ?
            (
              modulesDataApi.map((chapter, i) => (
                <Accordion key={i} expanded={expanded === 'panel' + i} onChange={handleChange('panel' + i)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id={"panel4bh-header" + i}
                  >
                    <Typography sx={{ width: '98%', flexShrink: 0 }}>{chapter.sectionName}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      {
                        chapter.videos.map((video, ii) => (
                          <Chapter setNameVideo={setNameVideo} key={ii} i={i} video={video} ii={ii} idUser={idUser} />
                        ))
                      }
                    </ul>
                  </AccordionDetails>
                </Accordion>
              ))
            )
            :
            <div style={{ alignItems: 'center', display: "flex", flexDirection: "column" }}>
              <span className="loader"></span>
            </div>
        }
      </div>

    </div>
  );
}
