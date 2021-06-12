import React, { useState, useRef } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import PostAddIcon from "@material-ui/icons/PostAdd";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import DataUpload from "./../DataUpload";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from "@material-ui/pickers";
import { mediaFileUpload, addEvent, addMedia } from "./../../firebase/firebaseService";
import "./style.scss";
import Progress from "./../../components/Progress";

const DataSubmitForm = ({ type }) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [mediafiles, setmMediaFiles] = useState([]);
  const [startfiles, setStarFiles] = useState([]);
  const [progressVal, setProgressVal] = useState(0);

  const titleRef = useRef();
  const descRef = useRef();
  const highlightRef = useRef();
  const stardesc = useRef();

  const [open, setOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const openForm = () => {
    setOpen(true);
  };
  const closeForm = () => {
    setOpen(false);
  };
  const getMediaType = (type) => {
    return type.split("/")[0];
  };
  const submitfirebase = async () => {
    let temp = {
      eventId: "" + new Date().getTime() + "",
      title: titleRef.current.value,
      desc: descRef.current.value,
      highlightDesc: highlightRef.current.value,
      eventDate: new Date(selectedDate.toDateString()).getTime(),
      stardesc: stardesc.current.value,
      starIndex: mediafiles.concat(startfiles).length - 1,
      eventtype: type,
    };
    setProgressVal(1);
    await addEvent({ ...temp });
    const promises = [];
    const promises_add = [];
    const urls = [];
    mediafiles.concat(startfiles).forEach((file, ind) => {
      const uploadTask = mediaFileUpload(temp.eventtype, temp.eventId, file);
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

          const addMed = addMedia(temp.eventtype, temp.eventId, "" + temp.eventId + "_" + ind + "", getMediaType(mediafiles.concat(startfiles)[ind].type), downloadURL, type === "Activities" ? "Media" : "ReunionMedia");
          promises_add.push(addMed);
        }
      );
    });
    Promise.all(promises)
      .then(() => {
        Promise.all(promises_add)
          .then(() => {
            setProgressVal(0);
            closeForm();
          })
          .catch((err) => console.log(err.code));
      })
      .catch((err) => console.log(err.code));
  };
  const handleForm = (event) => {
    event.preventDefault();
    submitfirebase();
  };

  return (
    <>
      <div className='photoUploader' onClick={() => openForm()}>
        <PostAddIcon />
      </div>
      <Dialog fullScreen open={open} onClose={closeForm}>
        <AppBar>
          <Toolbar>
            <IconButton edge='start' color='inherit' onClick={closeForm} aria-label='close'>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <form onSubmit={handleForm}>
          <DialogContent>
            <Box mt={6} width={1}>
              <TextField inputRef={titleRef} id='title' label='Title of the event' multiline rows={3} variant='outlined' fullWidth required />
            </Box>
            <Box mt={2} width={1}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant='inline'
                  format='MM/dd/yyyy'
                  margin='normal'
                  id='date-picker-inline'
                  label='Date of the event'
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            </Box>
            <Box mt={2} width={1}>
              <TextField inputRef={descRef} id='desc' label='Description of the event' multiline rows={6} variant='outlined' fullWidth required />
            </Box>
            <Box mt={2} width={1}>
              <TextField inputRef={highlightRef} id='desc' label='Highlights of the event' multiline rows={6} variant='outlined' fullWidth required />
            </Box>
            <Box mt={2} width={1}>
              <DataUpload handleMedia={(data) => setmMediaFiles(data)} multiple={true} title='You can upload multiple images and videos related to this event.' />
            </Box>
            <Box mt={2} width={1}>
              <DataUpload handleMedia={(data) => setStarFiles(data)} multiple={false} title='You can upload an image which will be highlighted as the star/most popular image of the event.It will be highlighted separately.' />
            </Box>
            <Box mt={2} width={1}>
              <Box mb={1}>Provide a description/memory related to the star picture.</Box>
              <TextField inputRef={stardesc} id='title' label='Description of the highlighted/star picture' multiline rows={3} variant='outlined' fullWidth />
            </Box>
            {progressVal !== 0 ? (
              <Box mt={2} width={1}>
                <Progress value={progressVal} />
              </Box>
            ) : null}
          </DialogContent>
          <DialogActions>
            <Button onClick={closeForm} color='primary'>
              Cancel
            </Button>
            <Button onClick={handleForm} color='primary' variant='contained' type='submit' disabled={progressVal !== 0}>
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default DataSubmitForm;
