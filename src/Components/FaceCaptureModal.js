import React from "react";
import { Grid, Divider } from "@material-ui/core";

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
      const img64 = canvas.toDataURL("image/png");

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
          <Divider />
          <h2 id="transition-modal-title">Take Image</h2>
          <video
            id="captureVideo"
            width="270"
            height="200"
            autoPlay
            style={{ background: "white", borderRadius: "7px" }}
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
          <h3 id="transition-modal-title">Preview Image</h3>
          <canvas
            id="photoCanvas"
            width="270"
            height="200"
            style={{ background: "black", borderRadius: "7px" }}
          ></canvas>
        </div>
      </Grid>
    </div>
  );
};

export default FaceCaptureModal;
