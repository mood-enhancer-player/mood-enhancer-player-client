import React, { useMemo, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import {
  makeStyles,
  Grid,
  Divider,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { gql, useMutation } from "@apollo/client";
import CameraIcon from "@material-ui/icons/Camera";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "30px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#000000",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#000000",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

// const thumbsContainer = {
//   display: "flex",
//   flexDirection: "row",
//   flexWrap: "wrap",
//   marginTop: 16,
// };

// const thumb = {
//   display: "inline-flex",
//   borderRadius: 2,
//   border: "1px solid #eaeaea",
//   marginBottom: 8,
//   marginRight: 8,
//   width: "auto",
//   height: 200,
//   padding: 4,
//   boxSizing: "border-box",
// };

// const thumbInner = {
//   display: "flex",
//   minWidth: 0,
//   overflow: "hidden",
// };

const img = {
  display: "block",
  width: "100%",
  height: "100%",
};

const DragAndDrop = (props) => {
  const [files, setFiles] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    open,
  } = useDropzone({
    accept: "image/*",
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject]
  );

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <p> Preview Image</p>
      <div>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const filepath = acceptedFiles.map((file) => (
    <li key={file.path}>{file.path}</li>
  ));

  return (
    <>
      <div className="container">
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here or</p>
          <button type="button" onClick={open}>
            Choose File
          </button>
        </div>
        <aside>
          {thumbs}
          <p>{filepath}</p>
        </aside>
      </div>
      <div>
        <center>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            id="uploadBtn"
            // onClick={uploadImageHandler}
            style={{ margin: "10px", marginBottom: "0px" }}
          >
            Upload
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            id="closeBtn"
            onClick={props.handleClose}
            style={{ margin: "10px", marginBottom: "0px" }}
          >
            Close
          </Button>
        </center>
      </div>
    </>
  );
};

export default DragAndDrop;
