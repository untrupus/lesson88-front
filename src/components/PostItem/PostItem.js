import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from "@material-ui/core/Divider";
import {makeStyles} from '@material-ui/core/styles';
import {Link as RouterLink} from "react-router-dom";
import Link from '@material-ui/core/Link';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(() => ({
    post: {
        padding: "10px",
        display: "flex",
        // marginTop: "25px"
    },
    postInfo: {
        marginTop: "20px",
        display: "block",
        fontSize: "25px"
    },
    img: {
        height: "200px",
        width: "auto",
        marginRight: "30px"
    },
    comments: {
        display: "inline-block"
    },
    postInner: {
        marginTop: "15px"
    }
}));

const PostItem = props => {
    const classes = useStyles();

    return (
        <Paper elevation={5} className={classes.post}>
            <img src={props.src} alt="post" className={classes.img}/>
            <div className={classes.postInner}>
                <span>{props.time} by <b>{props.name}</b>  </span>
                <Badge badgeContent={props.comments} color="primary" className={classes.comments}>
                    <MailIcon />
                </Badge>
                <Divider/>
                <Link component={RouterLink}  to={"/posts/" + props.id} className={classes.postInfo}>
                    {props.text}
                </Link>
            </div>
        </Paper>
    );
};

export default PostItem;