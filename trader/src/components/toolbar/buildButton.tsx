import React, { Suspense, lazy } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useStyles } from './style';

export const SaveButton = () => {
    const classes = useStyles();
  
    return (
      <>
        <PlayArrowIcon className={classes.toolBarButton} onClick={() => { alert('click')}}/>
      </>
    );
  }