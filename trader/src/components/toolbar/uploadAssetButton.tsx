import React, { useState } from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useStyles } from './style';
import Button from '@material-ui/core/Button';
import { ToolBarButtonsState } from './toolBarButtonsState';

export const UploadAssetButton : React.FC<ToolBarButtonsState>= ({data}) => {
    
    const classes = useStyles();
    const [enabled, setActive] = useState(false);
    
    return (
      <>
        <Button
        disabled={enabled}
        variant="contained"
        color="primary"
        size="small"
        className={classes.menuButton} onClick={() => { alert('clicked') }}
        startIcon={<CloudUploadIcon />}>Upload</Button>
      </>
    );
  }