import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { NavigationBar } from './trader/navigationBar';
import { BottomBar } from './trader/bottomNav';
import { Page } from '../themes/countContext';

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
  }),
);

export const MainPage = (props:any) => {

  const classes = useStyles();  
    return (
      <div className={classes.root}>
        <NavigationBar />
        <Grid container spacing={3}>
          <Grid item xs={12}>
              hello there! I am using a grid material ui. 
              <Page />
          </Grid>
        </Grid>

        <BottomBar></BottomBar>
      </div>
    );
  }