import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PostItem from "../../components/PostItem/PostItem";
import {fetchPosts} from "../../store/actions/postsActions";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
            marginLeft: "auto",
            marginRight: "auto",
            width: theme.spacing(130),
            height: "auto",
        },
    },
    post: {
        padding: "10px"
    }
}));

const Posts = () => {
    const classes = useStyles();
    const posts = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const postFeed = posts.map(post => {
        return (
            <PostItem
                key={post._id}
                id={post._id}
                src={post.image ?
                    'http://localhost:8000/uploads/' + post.image :
                    "https://simg.nicepng.com/png/small/198-1989543_text-message-iphone-icon-text-text-message-icon.png"}
                time={post.datetime.replace("T", " ").slice(0, -5)}
                name={post.user[0].username}
                text={post.title}
                comments={post.comments.length}
            />
        )
    });

    return (
        <Container maxWidth="lg" className={classes.root}>
            {postFeed}
        </Container>
    );
};

export default Posts;