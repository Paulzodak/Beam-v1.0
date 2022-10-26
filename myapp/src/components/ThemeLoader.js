import React from "react";
import { Card } from "../UI/Card.styled";
import { useSelector, useDispatch } from "react-redux";
import { ImageCard } from "../UI/ImageCard.styled";
import closeIcon from "../Images/closeIcon.svg";
import { Button } from "../UI/Button.styled";
import { showLogoutPromptReducer } from "../redux/Menu";
import { loginAuthReducer } from "../redux/form";
import { showErrorModalReducer } from "../redux/Menu";
import {
  ClipLoader,
  BarLoader,
  BeatLoader,
  BounceLoader,
  CircleLoader,
  ClimbingBoxLoader,
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
const ThemeLoader = () => {
  const styles = useSelector((state) => state.style);
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(showLogoutPromptReducer({ showLogoutPrompt: false }));
  };

  const Handler = () => {
    dispatch(showErrorModalReducer({ show: false, message: "" }));
  };
  return (
    <Card
      zindex={"1000"}
      bdft={"blur(10px)"}
      width={"100vw"}
      font={styles.fonts.mainFont}

      // bg={"white"}
      // font={styles.fonts.main}
      //   font={" 'Rubik', sans-serif"}
    >
      <center>
        <Card ps={"relative"} pstp={"15rem"}>
          <Card
            bdbm={`2px solid ${styles.colors.darkBlue}`}
            mg={"2rem"}
            width={"8rem"}
            // mg={"50% 0"}
            fs={"2rem"}
            cl={styles.colors.darkBlue}
          >
            <b> BEAMER</b>
          </Card>
          <CircleLoader
            color={styles.colors.darkBlue}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </Card>
      </center>
    </Card>
  );
};

export default ThemeLoader;
