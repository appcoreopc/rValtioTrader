import React, { useState } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useStyles } from './style';
import Button from '@material-ui/core/Button';


export const BuildButton = () => {
    
    const classes = useStyles();
    const [enabled, setActive] = useState(false);
    
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