
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { SaveButton } from '../toolbar/saveButton';
import { BuildButton } from '../toolbar/buildButton';
import { ZoomButton }  from '../toolbar/zoomButton';
import { UploadAssetButton }  from '../toolbar/uploadAssetButton';
import { useAppSelector, useAppDispatch } from '../../store/hook';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
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
  const toolbarState = useAppSelector((state) => state.toolBar)
  const dispatch = useAppDispatch()
  console.log(toolbarState);
  
  return (
    <div className={classes.root}>
    <AppBar position="static" className={classes.appBar}>
    <Toolbar >
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    <MenuIcon />
    </IconButton>
    <SaveButton data={toolbarState.toolbar}></SaveButton>
    <BuildButton data={toolbarState.toolbar}></BuildButton>
    <ZoomButton data={toolbarState.toolbar}></ZoomButton>
    <UploadAssetButton data={toolbarState.toolbar}></UploadAssetButton>
    </Toolbar>
    </AppBar>
    </div>
    );
  }