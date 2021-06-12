import React, { useState, useRef } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Box from "@material-ui/core/Box";
import DataUpload from "./../../../modules/DataUpload";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { archiveUpload, addArchiveMedia } from "./../../../firebase/firebaseService";
import TextField from "@material-ui/core/TextField";
import "./style.scss";
import Progress from "./../../../components/Progress";

const Uploader = () => {
  const [open, setOpen] = useState(false);
  const [mediafiles, setmMediaFiles] = useState([]);
  const [progressVal, setProgressVal] = useState(0);
  const descRef = useRef();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUploadSubmit = (event) => {
    event.preventDefault();
    const promises = [];
    const promises_add = [];
    const memory = descRef.current.value;
    setProgressVal(1);
    mediafiles.forEach((file, ind) => {
      const uploadTask = archiveUpload(file);
      promises.push(uploadTask);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgressVal(progress);
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
          // do something with the url

          const addMed = addArchiveMedia("" + new Date().getTime() + "", downloadURL, memory);
          promises_add.push(addMed);
        }
      );
    });
    Promise.all(promises)
      .then(() => {
        Promise.all(promises_add)
          .then(() => {
            setProgressVal(0);
            handleClose();
          })
          .catch((err) => console.log(err.code));
      })
      .catch((err) => console.log(err.code));
  };
  return (
    <>
      <div onClick={() => handleOpen()} className='photoUploader'>
        <AddAPhotoIcon />
      </div>

      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar>
          <Toolbar>
            <IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <form>
          <DialogContent>
            <Box mt={6} width={1}>
              You can upload a picture with a small description of the memory associated of our awesome school days !
            </Box>

            <Box mt={2} width={1}>
              <DataUpload handleMedia={(data) => setmMediaFiles(data)} multiple={false} title='Select images.' imageOnly={true} />
            </Box>

            <Box mt={2} width={1}>
              <TextField inputRef={descRef} id='desc' label='Description of the memory' multiline rows={6} variant='outlined' fullWidth required />
            </Box>
            {progressVal !== 0 ? (
              <Box mt={2} width={1}>
                <Progress value={progressVal} />
              </Box>
            ) : null}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={handleUploadSubmit} color='primary' variant='contained' type='submit' disabled={progressVal !== 0}>
              Upload
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default Uploader;
