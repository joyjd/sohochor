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
import DataUpload from "./../DataUpload";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { mediaFileUpload, addMedia } from "./../../firebase/firebaseService";
import "./style.scss";

const EventMediaUpload = ({ eventtype, eventId }) => {
  const [open, setOpen] = useState(false);
  const [mediafiles, setmMediaFiles] = useState([]);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getMediaType = (type) => {
    return type.split("/")[0];
  };
  const handleUploadSubmit = (event) => {
    event.preventDefault();
    const promises = [];
    const promises_add = [];
    mediafiles.forEach((file, ind) => {
      const uploadTask = mediaFileUpload(eventtype, eventId, file);
      promises.push(uploadTask);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
          // do something with the url

          const addMed = addMedia(eventtype, eventId, "" + eventId + "_" + ind + "", getMediaType(mediafiles[ind].type), downloadURL, eventtype === "Activities" ? "Media" : "ReunionMedia");
          promises_add.push(addMed);
        }
      );
    });
    Promise.all(promises)
      .then(() => {
        Promise.all(promises_add)
          .then(() => handleClose())
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
              You can upload picture(s)/Video(s) if you find it missing in the event
            </Box>

            <Box mt={2} width={1}>
              <DataUpload handleMedia={(data) => setmMediaFiles(data)} multiple={true} title='Select images/videos.' imageOnly={false} />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={handleUploadSubmit} color='primary' variant='contained' type='submit'>
              Upload
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default EventMediaUpload;
