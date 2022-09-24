import React from "react";
import { Card } from "../../../UI/Card.styled";
import { ImageCard } from "../../../UI/ImageCard.styled";
import toggleOnIcon from "../../../Images/toggleOn.svg";
import "./TodoTransition.css";
import toggleOffIcon from "../../../Images/toggleOff.svg";
import {
  SwitchTransition,
  CSSTransition,
  TransitionGroup,
} from "react-transition-group";
import { useSelector } from "react-redux";
const ToDoItem = ({ item }) => {
  const FilterStates = useSelector((states) => states.FilterStates);
  const currentDay = useSelector((states) => states.calender.currentDay);
  const active = FilterStates.active;
  const all = FilterStates.all;
  return (
    <>
      <Card
        mg={"2rem 2rem"}
        // bd={"1px solid red"}
        height={"8rem"}
        br={"3rem 0rem 3rem 0rem "}
        dp={"grid"}
        gridC={"15% 70% 15%"}
        bs={"0px 0px 30px rgb(230, 230, 230)"}
        pd={"1rem"}
        // tr={"5s"}
      >
        {/* ----------TOGGLE ICONS------------ */}
        <Card bd={"0px solid red"}>
          <center>
            <ImageCard
              height={"2rem"}
              width={"2rem"}
              src={item.done ? toggleOnIcon : toggleOffIcon}
              mg={"2rem 0 0 0"}
            />
          </center>
        </Card>
        {/* ----------CONTENTS-------------- */}
        <Card bd={"0px solid red"}>
          <Card fs={"1rem"} mg={"0.5rem 1rem"}>
            <b>
              <i>{item.time}</i>
            </b>
          </Card>
          <Card fs={"1.4rem"} mg={"0.5rem 1rem"}>
            <b>{item.header}</b>
          </Card>
          <Card mg={"0.5rem 1rem"}>{item.details}</Card>
        </Card>
        <Card bd={"0px solid red"}></Card>
      </Card>
      {/* </CSSTransition>
      </SwitchTransition> */}
    </>
  );
};

export default ToDoItem;
