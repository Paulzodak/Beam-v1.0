import React from "react";
import {
  BarLoader,
  BeatLoader,
  BounceLoader,
  CircleLoader,
  ClimbingBoxLoader,
  ClipLoader,
  ClockLoader,
  DotLoader,
  FadeLoader,
  GridLoader,
  HashLoader,
  MoonLoader,
  PacmanLoader,
  PropagateLoader,
  PuffLoader,
  PulseLoader,
  RingLoader,
  RiseLoader,
  RotateLoader,
  ScaleLoader,
  SyncLoader,
} from "react-spinners";
import { Card } from "./Card.styled";
const Loading = ({ pstp, height, width }) => {
  return (
    <Card
      zindex={"10000"}
      bdft={"blur(10px)"}
      //   bg={"red"}
      ps={"absolute"}
      pstp={"0rem"}
      width={"100%"}
      height={"100%"}
      // bg={"white"}
      // font={styles.fonts.main}
      font={" 'Rubik', sans-serif"}
    >
      <center>
        <Card mg={"40% 0rem"}>
          <ClipLoader />
        </Card>
      </center>
    </Card>
  );
};

export default Loading;
