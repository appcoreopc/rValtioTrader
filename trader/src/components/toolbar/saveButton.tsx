import React, { useState, Suspense, lazy } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import { useStyles } from './style';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/toolbarSlicer';

export const SaveButton = () => {

    const classes = useStyles();
    const [enabled, setActive] = useState(false);
    
    const count = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
      <>
        <Button disabled={enabled}
        variant="contained"
        color="primary"
        size="small"
        className={classes.menuButton} 
        onClick={() => dispatch(decrement())}
        startIcon={<SaveIcon />}>Save</Button>
      </>
    );
  }