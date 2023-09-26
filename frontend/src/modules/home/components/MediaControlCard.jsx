import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import request from '../../../shared/helpers/request';

export default function MediaControlCard({ dataVideos }) {
  const theme = useTheme();
  const [lastVideo, setLastVideo] = React.useState();

  React.useEffect(() => {

    (async () => {
      const a = await request({ endpoint: "video/seenn" })
      const img = dataVideos.find(el => el.course == a.data?.nameCourse)
      setLastVideo({ img: img.img, ...a.data })
    })()
  }, [])

  return (
    <>
      {
        lastVideo ?
          <>
            <Typography component="div" variant="h5" style={{ marginTop: "50px", marginBottom: "25px" }}>
              Last course watched
            </Typography>
            <Card sx={{ display: 'flex', backgroundColor: "#2d2f31", justifyContent: "center", padding: "20px", boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), -3px -3px 20px 5px rgba(0,0,0,0.14), 1px 5px 3px 0px rgba(0,0,0,0.12)" }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', color: "white" }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Course {lastVideo?.nameCourse ? lastVideo?.nameCourse : "Nodejs"}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, justifyContent: "center" }}>
                  <IconButton aria-label="play/pause" style={{ justifyContent: "center" }}>
                    <Link to={`/video/${lastVideo?._id}/1/${lastVideo?.nameCourse}`}>
                      <PlayArrowIcon sx={{ height: 38, width: 38, color: "white" }} />
                    </Link>
                  </IconButton>
                </Box>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={lastVideo?.img}
                style={{ borderRadius: "10px" }}
              />
            </Card>
          </>
          :
          <>
            <Typography component="div" variant="h5" style={{ marginTop: "50px", marginBottom: "25px" }}>
              Last course watched
            </Typography>
            <Card sx={{ display: 'flex', backgroundColor: "#2d2f31", justifyContent: "center", padding: "20px", boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), -3px -3px 20px 5px rgba(0,0,0,0.14), 1px 5px 3px 0px rgba(0,0,0,0.12)" }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', color: "white" }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                  You don't have last seen course 😣
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </>
      }
    </>
  );
}