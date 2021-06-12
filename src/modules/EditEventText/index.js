import React, { useState, useRef, useEffect } from "react";
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
import "./style.scss";
import { getActivityFullDetailById, getReunionFullDetailById, addEvent } from "./../../firebase/firebaseService";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from "@material-ui/pickers";

const EditEventText = ({ eventtype, eventId }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const titleRef = useRef();
  const descRef = useRef();
  const highlightRef = useRef();
  const stardesc = useRef();

  const handleDateChange = (date) => {
    setFormData({ ...formData, eventDate: date });
  };
  const openForm = () => {
    setOpen(true);
  };
  const closeForm = () => {
    setOpen(false);
  };

  const getDetails = async () => {
    const doc = eventtype === "Activities" ? await getActivityFullDetailById(eventId) : await getReunionFullDetailById(eventId);

    setFormData(doc.data());
  };

  const handleForm = async (event) => {
    event.preventDefault();
    const temp = {
      ...formData,
      title: titleRef.current.value.trim(),
      desc: descRef.current.value.trim(),
      highlightDesc: highlightRef.current.value.trim(),
      stardesc: stardesc.current.value.trim(),
      eventId: eventId,
      eventtype: eventtype,
    };
    await addEvent(temp);
    closeForm();
  };

  useEffect(() => getDetails(), []);
  return (
    <>
      <div className='textUploader' onClick={() => openForm()}>
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
        {formData && Object.keys(formData).lengh !== 0 ? (
          <form>
            <DialogContent>
              <Box mt={8} width={1} mb={4}>
                Edit the description texts for the event.
              </Box>
              <Box mt={3} width={1}>
                <TextField inputRef={titleRef} id='title' label='Title of the event' defaultValue={formData.title} multiline rows={3} variant='outlined' fullWidth required />
              </Box>
              <Box mt={3} width={1}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant='inline'
                    format='MM/dd/yyyy'
                    margin='normal'
                    id='date-picker-inline'
                    label='Date of the event'
                    value={formData.eventDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Box>
              <Box mt={3} width={1}>
                <TextField inputRef={descRef} defaultValue={formData.desc} id='desc' label='Description of the event' multiline rows={6} variant='outlined' fullWidth required />
              </Box>
              <Box mt={3} width={1}>
                <TextField inputRef={highlightRef} defaultValue={formData.highlightDesc} id='desc' label='Highlights of the event' multiline rows={6} variant='outlined' fullWidth required />
              </Box>

              <Box mt={3} width={1}>
                <TextField inputRef={stardesc} defaultValue={formData.stardesc} id='title' label='Description of the highlighted/star picture' multiline rows={3} variant='outlined' fullWidth />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={closeForm} color='primary'>
                Cancel
              </Button>
              <Button onClick={handleForm} color='primary' variant='contained' type='submit'>
                Submit
              </Button>
            </DialogActions>
          </form>
        ) : null}
      </Dialog>
    </>
  );
};

export default EditEventText;
