import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from "@material-ui/core/Divider";
import {makeStyles} from '@material-ui/core/styles';
import {Link as RouterLink} from "react-router-dom";
import Link from '@material-ui/core/Link';
import RateReviewIcon from '@material-ui/icons/RateReview';


const useStyles = makeStyles((theme) => ({
    post: {
        padding: "10px",
        display: "flex"
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
    }
}));

const PostItem = props => {
    const classes = useStyles();

    return (
        <Paper elevation={5}  className={classes.post}>
            <img src={props.src} alt="post" className={classes.img}/>
            <div>
                <p>{props.time} by <b>{props.name}</b></p>
                <Divider/>
                <Link component={RouterLink}  to="/" className={classes.postInfo}>
                    {props.text}
                </Link>
                <p>12 comments</p>
            </div>
        </Paper>
    );
};

export default PostItem;