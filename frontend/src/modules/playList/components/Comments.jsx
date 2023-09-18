import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from "react";
import Comment from "./Comment";
import AvatarComment from "./AvatarComment";
import contributions from "../mocks/contributions.json";
import questions from "../mocks/questions.json";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Comments() {

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div style={{ marginTop: "50px" }}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Contributions" {...a11yProps(0)} />
                            <Tab label="questions" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <Typography style={{ fontSize: "25px" }}>2 Comments</Typography>
                        <AvatarComment image="https://i.pinimg.com/564x/2a/0e/60/2a0e60be8475924e14c586acceacdb62.jpg" />
                        {
                            contributions.length > 0
                            ?
                            contributions.map(comment => <Comment {...comment} key={comment.id} />)
                            :
                            <Typography style={{ fontSize: "25px" }}>there are no comments 🥺</Typography>
                        }
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <Typography style={{ fontSize: "25px" }}>0 Comments</Typography>
                        <AvatarComment image="https://i.pinimg.com/564x/2a/0e/60/2a0e60be8475924e14c586acceacdb62.jpg" />
                        {
                            questions.length > 0
                            ?
                            questions.map(comment => <Comment {...comment} key={comment.id} />)
                            :
                            <Typography style={{ fontSize: "25px" }}>there are no comments 🥺</Typography>
                        }
                    </CustomTabPanel>
                </Box>

            </div>
        </>
    )
}