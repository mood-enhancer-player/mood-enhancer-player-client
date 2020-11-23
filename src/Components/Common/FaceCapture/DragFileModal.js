import React from "react";
import { makeStyles, Grid, Button, Paper } from "@material-ui/core";
import { gql, useMutation } from "@apollo/client";
import CameraIcon from "@material-ui/icons/Camera";
import { useDropzone } from "react-dropzone";
import RootRef from "@material-ui/core/RootRef";
import DragAndDrop from "./DragAndDrop";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    fontSize: "20px",
    margin: "10px",
  },
  divider: {
    margin: "10px",
  },
});

const DragFileModal = ({ handleClose }) => {
  const classes = useStyles();

  return <DragAndDrop handleClose={handleClose} />;
};

// const PROCESS_IMAGE_MUTATION = gql`
//   mutation uploadModelInput($base64Image: Upload!) {
//     processImage(base64Image: $base64Image) {
//       url
//     }
//   }
// `;

export default DragFileModal;
