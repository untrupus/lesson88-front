import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles} from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link as RouterLink} from "react-router-dom";
import Link from '@material-ui/core/Link';
import {useDispatch} from "react-redux";
import {logoutUser} from "../../store/actions/usersActions";

const useStyles = makeStyles(() => ({
    menu: {
        color: "white",
        fontWeight: "bold",
    },
    history: {
        '&:hover': {
            textDecoration: "none"
        }
    }
}));


const UserMenu = props => {
    const classes = useStyles();
    const dispatch =useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        dispatch(logoutUser());
    };

    return (
        <div>
            <Button aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    className={classes.menu}
            >
                Hello, {props.name}
                <AccountCircleIcon/>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link component={RouterLink} className={classes.history} to="/addpost">Add new post</Link>
                </MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </div>
    );
};

export default UserMenu;