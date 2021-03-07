import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
/**
 * Import the icons from @material-ui/icons here
 * 
 * this creates and allows us to use the IconButton API from react
 *  which as implied allows us to use icons as buttons
 */

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function IconButtons(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <IconButton>

            </IconButton>
        </div>
    );
}