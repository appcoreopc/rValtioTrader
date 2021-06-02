import React, { useState } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useStyles } from './style';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux'
import { startBuildProcess, cancelBuildProcess, getBuildStatus } from '../../store/toolbarSlicer';
import { ToolBarButtonsState } from './toolBarButtonsState';

export const BuildButton: React.FC<ToolBarButtonsState> = ({data}) => {
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
    className={classes.menuButton} onClick={() => { 
      dispatch(startBuildProcess());
    }}
    startIcon={<PlayArrowIcon />}>Build</Button>
    </>
    );
  }