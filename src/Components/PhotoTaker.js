import React,{useState,useEffect,} from "react";
import { makeStyles, IconButton,Modal,Backdrop,Fade } from "@material-ui/core";
import { CameraAltOutlined as CameraAltOutlinedIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: "black",
    // background:"linear-gradient(to bottom, Transparente 0%,Transparente 50%,red 50%,red 100%)",
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  cameraPos: {
    marginLeft: 20,
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
  },
}));

const PhotoTaker = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


// // let canvas = document.querySelector("#canvas");
// // let context = canvas.getContext("2d");
// // let video = document.querySelector("#video");
// // let img = document.getElementsByTagName("img")[0];
// // let toggle = false;

// const captureImage = async () => {
//   const videoStream = await navigator.mediaDevices.getUserMedia({
//     video: true,
//   });
//   video.srcObject = videoStream;
//   video.play();
//   // img.src = canvas.toDataURL('image/png');
//   //   console.log(videoStream);
// };

// document.getElementById("snap").addEventListener("click", () => {
//   captureImage();
//   context.drawImage(video, 0, 0, 220, 150);
//   // Converting image to base64 formate
//   const img64 = canvas.toDataURL("image/png");
//   console.log(img64);
//   console.log(video);
//   //   display image using img tag
//   // const pic = document.getElementsByTagName('img')[0];
//   // pic.src = img64
//   // console.log(pic)
// });

// useEffect(() => {
//   window.addEventListener('load',()=>{
//     console.log("useEffects run")
//     console.log(document.getElementById('video'))
//   })
  
// }, [open])

const tackPhotoHandler=async(e)=>{
  let canvas = document.querySelector("#canvas");
  let context = canvas.getContext("2d");
  let video = document.querySelector("#video");

  console.log(canvas,context,video)

  const videoStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });
  video.srcObject = videoStream;  
  video.play();
  // context.fillStyle = '#FFF'
  // Converting image to base64 formate
  const img64 = canvas.toDataURL("image/png");
  context.drawImage(video, 0, 0, 230, 150);
  console.log(img64)
  // const pic = document.getElementById('myPhoto');
  // pic.src = img64
  console.log("canvas",canvas)
}

  return (
    <div>
      <IconButton
        edge="start"
        aria-haspopup="true"
        color="inherit"
        className={classes.cameraPos}
        onClick={handleOpen}
      >
        <CameraAltOutlinedIcon />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <div>
                        <video id="video" width="230" height="150" autoPlay style={{background:"red"}}></video>
                    </div>
                    <div>
                        <button id="snap" onClick={tackPhotoHandler}>Take Photo</button>
                    </div>  
                    <div>
                    </div>
                    {/* <div>
                        <img src="" id="myPhoto"/> 
                    </div> */}
                    <div>
                        <h3>Preview</h3>
                        <canvas id="canvas" width="230" height="150" style={{background:"yellow"}}></canvas>
                    </div>
          </div>
        </Fade>
      </Modal>

    </div>
  );
};

export default PhotoTaker;
