import React, { useState } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useStyles } from './style';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/toolbarSlicer';
import { ToolBarButtonsState } from './toolBarButtonsState';

export const BuildButton: React.FC<ToolBarButtonsState> = ({data}) => {
  
  const classes = useStyles();
  const [enabled, setActive] = useState(false);
  const dispatch = useDispatch();
  
  console.log(data);
  
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