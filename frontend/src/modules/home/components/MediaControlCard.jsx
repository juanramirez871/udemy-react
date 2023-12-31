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

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <>
      <Typography component="div" variant="h5" style={{ marginTop: "50px", marginBottom: "25px" }}>
        Last course watched
      </Typography>
      <Card sx={{ display: 'flex', backgroundColor: "#2d2f31", justifyContent: "center", padding: "20px", boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), -3px -3px 20px 5px rgba(0,0,0,0.14), 1px 5px 3px 0px rgba(0,0,0,0.12)" }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', color: "white" }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Course Nodejs
            </Typography>
            <Typography variant="subtitle1" color="text.white" component="div">
              Chapter 2
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              <Link to="video/1">
                <Tooltip title="chapter 1">
                  {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon style={{ color: "white" }} />}
                </Tooltip>
              </Link>
            </IconButton>
            <IconButton aria-label="play/pause">
              <Link to="video/1">
              <PlayArrowIcon sx={{ height: 38, width: 38, color: "white" }} />
            </Link>
            </IconButton>
            <IconButton aria-label="next">
              <Link to="video/1">
                <Tooltip title="chapter 3">
                  {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon style={{ color: "white" }} />}
                </Tooltip>
              </Link>
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="https://www.muylinux.com/wp-content/uploads/2022/04/nodejs.png"
          alt="Course SQL"
          style={{ borderRadius: "10px" }}
        />
      </Card>
    </>
  );
}