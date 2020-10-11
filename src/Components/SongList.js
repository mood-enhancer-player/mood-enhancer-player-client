import { Box, Card, Grid, Typography } from "@material-ui/core";
import React from "react";

const SongList = () => {
  return (
    <Box
      style={{ width: "772px", height: "400px", border: " 1px solid black" }}
    >
      {/* <h1>
                Song lists
            </h1> */}
      <Card style={{ margin: "10px", height: "45px" }}>
        <Grid>
          <Grid
            item
            container
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography>Hello</Typography>
            <Typography>Hello</Typography>
            <Typography>Hello</Typography>
          </Grid>
        </Grid>
      </Card>
      <Card style={{ margin: "10px", height: "45px" }}>
        <Grid>
          <Grid
            item
            container
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography>Hello</Typography>
            <Typography>Hello</Typography>
            <Typography>Hello</Typography>
          </Grid>
        </Grid>
      </Card>
      <Card style={{ margin: "10px", height: "45px" }}>
        <Grid>
          <Grid
            item
            container
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography>Hello</Typography>
            <Typography>Hello</Typography>
            <Typography>Hello</Typography>
          </Grid>
        </Grid>
      </Card>
      <Card style={{ margin: "10px", height: "45px" }}>
        <Grid>
          <Grid
            item
            container
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography>Hello</Typography>
            <Typography>Hello</Typography>
            <Typography>Hello</Typography>
          </Grid>
        </Grid>
      </Card>
      <Card style={{ margin: "10px", height: "45px" }}>
        <Grid>
          <Grid
            item
            container
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography>Hello</Typography>
            <Typography>Hello</Typography>
            <Typography>Hello</Typography>
          </Grid>
        </Grid>
      </Card>
      <Card style={{ margin: "10px", height: "45px" }}>
        <Grid>
          <Grid
            item
            container
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography>Hello</Typography>
            <Typography>Hello</Typography>
            <Typography>Hello</Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default SongList;
