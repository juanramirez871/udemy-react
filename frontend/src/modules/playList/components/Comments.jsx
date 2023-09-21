import { Avatar, Button, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from "react";
import Comment from "./Comment";
import request from "../../../shared/helpers/request";
import { useParams } from "react-router-dom";

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

export default function Comments({ dataUser, avatar, comments }) {

    const [value, setValue] = React.useState(0);
    const [commentContributions, setCommentContributions] = React.useState("");
    const [commentQuestion, setCommentQuestion] = React.useState("");
    const { id } = useParams()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const postCommentC = async () => {

        const payload = {
            avatar: avatar,
            timeAgo: Date.now(),
            name: dataUser.username,
            comment: commentContributions,
            type: 0
        }

        await request({ endpoint: "video/comment/" + id, method: "POST", data: payload })
        comments[0].unshift(payload)
        setCommentContributions("");
    }

    const postCommentQ = async () => {

        const payload = {
            avatar: avatar,
            timeAgo: Date.now(),
            name: dataUser.username,
            comment: commentQuestion,
            type: 1
        }

        await request({ endpoint: "video/comment/" + id, method: "POST", data: payload })
        comments[1].unshift(payload)
        setCommentQuestion("");
    }

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
                            <Typography style={{ fontSize: "25px" }}>{comments[0].length} Comments</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: "20px", width: "100%" }}>
                                <Avatar alt="Avatar" style={{ marginRight: "20px" }} src={avatar} />
                                <TextField style={{ width: "100%" }} id="input-with-sx" label="add a comment" value={commentContributions} variant="standard" onChange={(e) => setCommentContributions(e.target.value)} />
                            </Box>
                            <div style={{ justifyContent: "end", display: "flex" }}>
                                <Button onClick={postCommentC} style={{ marginTop: "10px" }} size="medium" >Publish</Button>
                            </div>
                        {
                            comments[0].length > 0
                                ?
                                comments[0].map((comment, i) => <Comment {...comment} key={i} />)
                                :
                                <Typography style={{ fontSize: "25px" }}>there are no comments 🥺</Typography>
                        }
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                            <Typography style={{ fontSize: "25px" }}>{comments[1].length} Comments</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: "20px", width: "100%" }}>
                                <Avatar alt="Avatar" style={{ marginRight: "20px" }} src={avatar} />
                                <TextField style={{ width: "100%" }} id="input-with-sx" label="add a comment" variant="standard" value={commentQuestion} onChange={(e) => setCommentQuestion(e.target.value)}  />
                            </Box>
                            <div style={{ justifyContent: "end", display: "flex" }}>
                                <Button style={{ marginTop: "10px" }} size="medium" onClick={postCommentQ} >Publish</Button>
                            </div>
                        {
                            comments[1].length > 0
                                ?
                                comments[1].map((comment, i) => <Comment {...comment} key={i} />)
                                :
                                <Typography style={{ fontSize: "25px" }}>there are no comments 🥺</Typography>
                        }
                    </CustomTabPanel>
                </Box>

            </div>
        </>
    )
}