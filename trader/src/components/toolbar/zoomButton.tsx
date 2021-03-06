
import React, { Suspense, lazy, useState } from 'react';
import { useStyles } from './style';
import Button from '@material-ui/core/Button';
import ZoomInIcon from '@material-ui/icons/ZoomIn';

export const ZoomButton = () => {
    const classes = useStyles();
    const [enabled, setActive] = useState(false);
  
    return (
      <>
       <Button disabled={enabled}
        variant="contained"
        color="primary"
        size="small"
        className={classes.menuButton} onClick={() => { alert('clicked') }}
        startIcon={<ZoomInIcon />}>Zoom</Button>
      </>
    );
  }