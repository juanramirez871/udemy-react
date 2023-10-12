import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function Links({ title, link }) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: "100%", bgcolor: '#dfd1d4', borderRadius: "5px", padding: "0px", marginBottom: "10px" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={title} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List style={{ background: "rgb(201 187 190 / 36%)" }} component="div" disablePadding>
                    <ListItemButton>
                        <a href={link} target='_blank' style={{ display: "flex" }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={link} />
                        </a>
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
}