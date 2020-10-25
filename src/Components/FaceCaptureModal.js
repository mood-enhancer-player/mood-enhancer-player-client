import React from "react";
import Grid from '@material-ui/core/Grid';

const FaceCaptureModal = () => {
  const tackPhotoHandler = (e) => {
    let canvas = document.querySelector("#photoCanvas");
    let context = canvas.getContext("2d");
    let video = document.querySelector("#captureVideo");
    let img = document.getElementById("myPhoto");

    // Async task(captureImage)
    const captureImage = async () => {
      const videoStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      video.srcObject = videoStream;
      video.play();
      img.src = canvas.toDataURL("image/png");
      const img64 = canvas.toDataURL("image/png");

      const pic = document.getElementById("myPhoto");
      pic.src = img64;
      console.log("canvas", canvas);
      console.log(videoStream);
    };
    captureImage();
    // context.fillStyle = '#FFF'
    // Converting image to base64 formate
    // const img64 = canvas.toDataURL("image/png");
    context.drawImage(video, 0, 0, 230, 150);
    // console.log(img64);
    // const pic = document.getElementById('myPhoto');
    // pic.src = img64
    // console.log("canvas", canvas);
  };
  return (
    <div>
      <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
<div>
        <video
          id="captureVideo"
          width="230"
          height="150"
          autoPlay
          style={{ background: "red" }}
        ></video>
<div>
<button id="snap" onClick={tackPhotoHandler}>
          Take Photo
        </button>
</div>
      </div>
      <div></div>

      <div>
        <img src="" id="myPhoto" />
      </div>
      <div>
        <h3>Preview</h3>
        <canvas
          id="photoCanvas"
          width="230"
          height="150"
          style={{ background: "yellow" }}
        ></canvas>
      </div>
</Grid>
    </div>

  );
};

export default FaceCaptureModal;
