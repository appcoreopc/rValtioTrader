import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { NavigationBar } from './trader/navigationBar';
import { BottomBar } from './trader/bottomNav';
import { Page } from '../themes/countContext';
import { ErrorBoundary } from "./errorBoundary/errorBoundary";
import { ResponsiveDrawer } from "./trader/appdevToolbar";
import Dropzone from "./dragdrop/dragdropZone";
import ImageList from "./dragdrop/imageList";
import { useCallback, useState } from "react";
import cuid from "cuid";

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

  const [images, setImages] = useState<any>([]);

  const onDrop = useCallback(acceptedFiles => {
    // Loop through accepted files
    acceptedFiles.map((file: any) => {
      // Initialize FileReader browser API
      const reader = new FileReader();
      // onload callback gets called after the reader reads the file data
      reader.onload = function(e:any) {
        // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it. 
        setImages((prevState:any) => [
          ...prevState,
          { id: cuid(), src: e.target.result }
        ]);
      };
      // Read the file as Data URL (since we accept only images)
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  const classes = useStyles();  
  return (
    <div className={classes.root}>
    <ErrorBoundary>
        <NavigationBar />
        
          <ResponsiveDrawer images={images}/>
      
          <Grid item xs={12}>
      
          <Page />

          {/* <h1 className="text-center">Drag and Drop Example</h1>
          <Dropzone onDrop={onDrop} accept={"image/*"} /> */}

          </Grid>
        
        <BottomBar></BottomBar>
        
    </ErrorBoundary>
    
    </div>
    );
  }