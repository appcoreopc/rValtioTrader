
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React, { Suspense, lazy } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useStyles } from './style';

export const SaveButton = () => {
    const classes = useStyles();
  
    return (
      <>
        <SaveIcon className={classes.toolBarButton} onClick={() => { alert('click')}}/>
      </>
    );
  }