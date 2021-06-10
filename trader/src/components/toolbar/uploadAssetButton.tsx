import React, { useState, useCallback  } from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useStyles } from './style';
import Button from '@material-ui/core/Button';
import { ToolBarButtonsState } from './toolBarButtonsState';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import cuid from "cuid";
import Dropzone from '../dragdrop/dragdropZone';
import { useDispatch } from 'react-redux'
import { loadImageAsset } from '../../store/appbarSlicer';
import ImageList from '../dragdrop/imageList';

export const UploadAssetButton : React.FC<ToolBarButtonsState>= ({data}) => {
    
    const classes = useStyles();
    const [enabled, setActive] = useState();
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const [selectedFile, setSelectedFile] = useState<string | Blob>("");
	  const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event:any) => {
      setSelectedFile(event.target.files[0]);
      setIsFilePicked(true);
    };

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleUpload = () => {

      const formData = new FormData();
      formData.append('File', selectedFile);
      
      // fetch(
      //   'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
      //   {
      //     method: 'POST',
      //     body: formData,
      //   }
      // )
      //   .then((response) => response.json())
      //   .then((result) => {
      //     console.log('Success:', result);
      //   })
      //   .catch((error) => {
      //     console.error('Error:', error);
      //   });


    };

    const handleClose = () => {
      debugger;
      dispatch(loadImageAsset(images));

      setOpen(false);
    };

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


    return (
      <>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">

        <DialogTitle id="alert-dialog-title">{"Please choose your image asset to upload?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

              <Dropzone onDrop={onDrop} accept={"image/*"} />
          
          </DialogContentText>
        </DialogContent>
        <DialogActions>

      
          <Button onClick={handleClose} color="primary">
            Done
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
        <Button
        disabled={enabled}
        variant="contained"
        color="primary"
        size="small"
        className={classes.menuButton} onClick={() => { handleClickOpen(); }}
        startIcon={<CloudUploadIcon />}>Upload</Button>
      </>
    );
  }