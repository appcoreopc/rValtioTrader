import React, { useState, Suspense, lazy } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import { useStyles } from './style';
import Button from '@material-ui/core/Button';

export const SaveButton = () => {

    const classes = useStyles();
    const [enabled, setActive] = useState(false);

    return (
      <>
        <Button disabled={enabled}
        variant="contained"
        color="primary"
        size="small"
        className={classes.menuButton} onClick={() => { alert('clicked') }}
        startIcon={<SaveIcon />}>Save</Button>
      </>
    );
  }