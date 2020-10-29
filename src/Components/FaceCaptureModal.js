import React from "react";
import { Grid, Divider, Typography } from "@material-ui/core";

const FaceCaptureModal = () => {
  const tackPhotoHandler = (e) => {
    let canvas = document.querySelector("#photoCanvas");
    let context = canvas.getContext("2d");
    let video = document.querySelector("#captureVideo");
    // let img = document.getElementById("myPhoto");

    // Async task(captureImage)
    const captureImage = async () => {
      const videoStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      video.srcObject = videoStream;
      video.play();
      const img64 = canvas.toDataURL("image/png");
      console.log(img64);
      // img.src = canvas.toDataURL("image/png");
      // const pic = document.getElementById("myPhoto");
      // pic.src = img64;
    };
    captureImage();
    context.drawImage(video, 0, 0, 270, 200);
  };
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <div>
          {/* <h2 id="transition-modal-title">Take Image</h2> */}
          <Typography component="h2" align="center">
            Take Image
          </Typography>
          <video
            id="captureVideo"
            width="270"
            height="200"
            autoPlay
            style={{
              borderRadius: "7px",
              backgroundImage: "linear-gradient(to right,#f5f7fa, #c3cfe2)",
            }}
          ></video>
          <div>
            <button id="snap" onClick={tackPhotoHandler}>
              Take Photo
            </button>
            <Divider />
          </div>
        </div>
        <div></div>

        {/* <div>
          <img src="" id="myPhoto" />
        </div> */}
        <div>
          {/* <h3 id="transition-modal-title">Preview Image</h3> */}
          <Typography component="h2" align="center">
            Preview Image
          </Typography>

          <canvas
            id="photoCanvas"
            width="270"
            height="200"
            style={{ borderRadius: "7px", background: "#0E1111" }}
          ></canvas>
        </div>
      </Grid>
    </div>
  );
};

export default FaceCaptureModal;
