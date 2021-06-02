import React, { useState, Suspense, lazy } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import { useStyles } from './style';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux'
import { saveApp } from '../../store/toolbarSlicer';
import { ToolBarButtonsState } from './toolBarButtonsState';

export const SaveButton: React.FC<ToolBarButtonsState> = ({data}) => {

    const classes = useStyles();
    const [enabled, setActive] = useState(false);
    const dispatch = useDispatch();

    return (
      <>
        <Button 
        disabled={enabled}
        variant="contained"
        color="primary"
        size="small"
        className={classes.menuButton} 
        onClick={() => dispatch(saveApp(9))}
        startIcon={<SaveIcon />}>Save</Button>
      </>
    );
  }