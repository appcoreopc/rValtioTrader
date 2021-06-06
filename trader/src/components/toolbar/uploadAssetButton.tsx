import React, { useState } from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useStyles } from './style';
import Button from '@material-ui/core/Button';
import { ToolBarButtonsState } from './toolBarButtonsState';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export const UploadAssetButton : React.FC<ToolBarButtonsState>= ({data}) => {
    
    const classes = useStyles();
    const [enabled, setActive] = useState();
    const [open, setOpen] = React.useState(false);

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
      setOpen(false);
    };


    return (
      <>

        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Drag and drop a file into this area
          </DialogContentText>
        </DialogContent>
        <DialogActions>

        <input type="file" name="file" onChange={changeHandler} />

          <Button onClick={handleUpload} color="primary">
            Upload
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