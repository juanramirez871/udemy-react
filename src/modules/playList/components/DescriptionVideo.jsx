import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import FormatAlignLeftIcon from '@mui/icons-material/Star';
import FormatAlignCenterIcon from '@mui/icons-material/HeartBroken';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function DescriptionVideo() {

    const [alignment, setAlignment] = React.useState('left');
    const [devices, setDevices] = React.useState(() => ['phone']);

    const handleAlignment = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    const handleDevices = (event, newDevices) => {
        if (newDevices.length) {
            setDevices(newDevices);
        }
    };
    const [value, setValue] = React.useState(5);

    return (
        <div style={{ marginTop: "20px" }}>
            <Box sx={{ '& > legend': { mt: 2 } }}>
                <div style={{ display: "flex", width: "63%", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Typography component="h1">Name Title video</Typography>
                        <Stack direction="row" spacing={4}>
                            <ToggleButtonGroup
                                value={alignment}
                                exclusive
                                onChange={handleAlignment}
                                aria-label="text alignment"
                            >
                                <ToggleButton value="left" aria-label="left aligned">
                                    <FormatAlignLeftIcon />
                                </ToggleButton>
                                <ToggleButton value="center" aria-label="centered">
                                    <FormatAlignCenterIcon />
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Stack>
                    </div>
                    <Rating name="read-only" value={value} readOnly />
                </div>
            </Box>
        </div>
    );
}
