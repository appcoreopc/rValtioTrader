import React, { useState } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useStyles } from './style';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/toolbarSlicer';

export const BuildButton = () => {
    
    const classes = useStyles();
    const [enabled, setActive] = useState(false);

    const count = useSelector((state) => state);
    const dispatch = useDispatch();
   
    console.log("data");
    console.log(count);
    
    return (
      <>
        <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.menuButton} onClick={() => { alert('clicked') }}
        startIcon={<PlayArrowIcon />}>Build</Button>
      </>
    );
  }