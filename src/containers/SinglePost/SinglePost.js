import React, {useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from "@material-ui/core/Divider";
import SingleComment from "../../components/SingleComment/SingleComment";
import TextField from "@material-ui/core/TextField";
import {fetchPost, fetchComments, addComment} from "../../store/actions/postsActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
    post: {
        padding: "10px",
        display: "flex",
        marginTop: "25px"
    },
    postInfo: {
        marginTop: "20px",
        display: "block",
        fontSize: "25px"
    },
    img: {
        height: "300px",
        width: "auto",
        marginRight: "30px"
    },
    postInner: {
        marginTop: "15px"
    },
    field: {
        width: "65%"
    },
    btn: {
        width: "30%",
        padding: "17px",
        marginTop: "5px"
    },
    form: {
        marginBottom: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
}));

const SinglePost = props => {
    const classes = useStyles();
    const user = useSelector(state => state.users.user);
    const post = useSelector(state => state.posts.singlePost);
    const comments = useSelector(state => state.posts.comments);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        post: props.match.params.id,
        text: ''
    });

    useEffect(() => {
        dispatch(fetchPost(props.match.params.id));
        dispatch(fetchComments(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    const inputChangeHandler = (e) => {
        const value = e.target.value;
        setState(prevState => {
            return {...prevState, text: value};
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        if (state.text !== '') {
            dispatch(addComment(state));
        }
        setState(prevState => {
            return {...prevState, text: ''};
        });
    };

    const commentList = comments.map(comment => {
        return (
            <SingleComment
                key={comment._id}
                time={comment.datetime.replace("T", " ").slice(0, -5)}
                name={comment.user.username}
                text={comment.text}
            />
        )
    });

    return (
        <Container maxWidth="lg">
            <>
                {post && <Paper elevation={5} className={classes.post}>
                    {post.image && <img
                        src={post.image ?
                            'http://localhost:8000/uploads/' + post.image : null}
                        alt="post" className={classes.img}/>}
                    <div className={classes.postInner}>
                        {post.title && <h3>{post.title}</h3>}
                        <Divider/>
                        {post.description && <p>{post.description}</p>}
                    </div>
                </Paper>}
                {commentList}
                {user ?
                    <form className={classes.form}
                          onSubmit={formSubmit}
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            className={classes.field}
                            id="comment"
                            label="Comment"
                            name="comment"
                            value={state.text}
                            onChange={inputChangeHandler}
                            autoComplete="comment"
                            autoFocus
                            required={true}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.btn}
                        >
                            Add
                        </Button>
                    </form>
                    : null}
            </>

        </Container>
    );
};

export default SinglePost;