
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React, { Suspense, lazy } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    toolBarButton: {
        paddingLeft : 20
    }
  }),
);

export const NavigationBar = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar >
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />

              <SaveIcon className={classes.toolBarButton} onClick={() => { alert('click')}}/>
              <PlayArrowIcon className={classes.toolBarButton}/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }