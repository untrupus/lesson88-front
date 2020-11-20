import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(() => ({
    post: {
        padding: "5px",
        marginTop: "15px"
    },
}));

const SingleComment = props => {
    const classes = useStyles();
    return (
        <Paper elevation={3} className={classes.post}>
            <p>{props.time} by <b>{props.name}</b></p>
            <Divider/>
            <p>{props.text}</p>
        </Paper>
    );
};

export default SingleComment;