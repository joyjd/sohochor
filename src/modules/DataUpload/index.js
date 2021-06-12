import React, { useState, useEffect } from "react";
import Files from "react-files";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const DataUpload = ({ title, multiple, handleMedia, imageOnly }) => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  const onFilesError = (error, file) => {
    setError(error.message);
  };
  const onFilesChange = (file) => {
    if (multiple) {
      setFiles(files.concat(file));
      handleMedia(files.concat(file));
    } else {
      setFiles(file);
      handleMedia(file);
    }
  };
  const handleRemoveFile = (index) => {
    let temp = [...files];
    temp.splice(index, 1);
    setFiles(temp);
  };

  return (
    <Box p={2} borderColor='grey.500' borderRadius={4} border={1}>
      <Box mb={1}>{title}</Box>
      <Button variant='contained' size='large' color='primary'>
        <Files className='files-dropzone' onChange={onFilesChange} onError={onFilesError} accepts={imageOnly ? ["image/*"] : ["image/*", "video/*"]} multiple={multiple} minFileSize={0} clickable>
          Drop files here or click to upload
        </Files>
      </Button>
      <List>
        {files.map((file, index) => (
          <Box key={index}>
            <ListItem style={{ padding: 0 }}>
              {file.preview.type === "image" ? <img style={{ height: "100px", width: "100px" }} src={file.preview.url} alt='' /> : <Box>{file.name}</Box>}
              <ListItemSecondaryAction>
                <IconButton edge='end' aria-label='delete' onClick={() => handleRemoveFile(index)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
      <Box mt={2}>{error}</Box>
    </Box>
  );
};

export default DataUpload;
