import { Avatar, Button, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from "react";
import Comment from "./Comment";
import request from "../../../shared/helpers/request";
import { useParams } from "react-router-dom";
import Links from "./Links";

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

export default function Comments({ dataUser, avatar, comments, newComment, d, dataVideo }) {

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

        if (commentContributions.length == 0) return;
        await request({ endpoint: "video/comment/" + id, method: "POST", data: payload })
        newComment(!d)
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

        if (commentQuestion.length == 0) return;
        await request({ endpoint: "video/comment/" + id, method: "POST", data: payload })
        newComment(!d)
        setCommentQuestion("");
    }
    console.log(dataVideo)

    return (
        <>
            <div style={{ marginTop: "20px" }}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Contributions" {...a11yProps(0)} />
                            <Tab label="questions" {...a11yProps(1)} />
                            <Tab label="Resources" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <Typography style={{ fontSize: "25px" }}>{comments[0].length} Comments</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: "10px", width: "100%" }}>
                            <Avatar alt="Avatar" style={{ marginRight: "20px" }} src={avatar} />
                            <TextField style={{ width: "100%" }} id="input-with-sx" label="add a comment" value={commentContributions} variant="standard" onChange={(e) => setCommentContributions(e.target.value)} />
                        </Box>
                        <div style={{ justifyContent: "end", display: "flex" }}>
                            <Button onClick={postCommentC} size="medium" >Publish</Button>
                        </div>
                        {
                            comments[0].length > 0
                                ?
                                comments[0].map((comment, i) => <Comment i={0} image={avatar} {...comment} dataUser={dataUser} key={i} />)
                                :
                                <Typography style={{ fontSize: "25px" }}>there are no comments 😓</Typography>
                        }
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <Typography style={{ fontSize: "25px" }}>{comments[1].length} Comments</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: "10px", width: "100%" }}>
                            <Avatar alt="Avatar" style={{ marginRight: "20px" }} src={avatar} />
                            <TextField style={{ width: "100%" }} id="input-with-sx" label="add a comment" variant="standard" value={commentQuestion} onChange={(e) => setCommentQuestion(e.target.value)} />
                        </Box>
                        <div style={{ justifyContent: "end", display: "flex" }}>
                            <Button size="medium" onClick={postCommentQ} >Publish</Button>
                        </div>
                        {
                            comments[1].length > 0
                                ?
                                comments[1].map((comment, i) => <Comment i={1} image={avatar} {...comment} dataUser={dataUser} key={i} />)
                                :
                                <Typography style={{ fontSize: "25px" }}>there are no comments 😓</Typography>
                        }
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        {
                            dataVideo?.links
                            ? (
                                <div style={{ marginBottom: "100px" }}>
                                    {dataVideo?.links.map((el, i) => (<Links key={i} title={el["titulo-link"]} link={el.link} />))}
                                </div>
                            )
                            : <Typography style={{ fontSize: "25px", marginBottom: "100px" }}>there are no resources in this video 😱</Typography>
                        }
                    </CustomTabPanel>
                </Box>

            </div>
        </>
    )
}