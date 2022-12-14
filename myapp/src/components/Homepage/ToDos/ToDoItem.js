import React from "react";
import { Card } from "../../../UI/Card.styled";
import { ImageCard } from "../../../UI/ImageCard.styled";
import toggleOnIcon from "../../../Images/toggleOn.svg";
import "./TodoTransition.css";
import { useDispatch } from "react-redux";
import toggleOffIcon from "../../../Images/toggleOff.svg";
import { setTodoActiveness } from "../../../redux/Todos";
import axios from "axios";
import { useState } from "react";
import closeIcon from "../../../Images/closeIcon.svg";
import { deleteTodoPromptReducer } from "../../../redux/Menu";
import { deleteIdReducer } from "../../../redux/Menu";
import {
  SwitchTransition,
  CSSTransition,
  TransitionGroup,
} from "react-transition-group";
import { useSelector } from "react-redux";
const BASEURL = "https://63322126a54a0e83d24c89f7.mockapi.io/";
const ToDoItem = ({ item, clickHandler }) => {
  const styles = useSelector((state) => state.style);
  const dispatch = useDispatch();
  const FilterStates = useSelector((states) => states.FilterStates);
  const currentDay = useSelector((states) => states.calender.currentDay);
  const active = FilterStates.active;
  const all = FilterStates.all;
  const todos = useSelector((state) => state.Todos.todos);
  const currentUserID = useSelector((state) => state.form.currentUserID);

  const deleteHandler = (id) => {
    console.log(id);

    dispatch(deleteTodoPromptReducer({ deleteTodoPrompt: true }));
    dispatch(deleteIdReducer({ deleteId: id }));
  };

  return (
    <>
      <Card
        mg={"2rem 2rem"}
        br={"3rem 0rem 3rem 0rem "}
        dp={"grid"}
        gridC={"12% 76% 12%"}
        bs={"0px 0px 30px rgb(235, 235, 235)"}
        // pd={"1rem"}
        bg={"white"}
        ovfy={"hidden"}
        // bg={styles.colors.darkGrey}
        font={styles.fonts.mainFont}
      >
        {/* ----------TOGGLE ICONS------------ */}
        <Card bg={styles.colors.darkBlue} ps={"relative"} bd={"0px solid red"}>
          <center>
            <ImageCard
              onClick={() => {
                clickHandler(item.id);
              }}
              height={"2rem"}
              width={"2rem"}
              src={item.done ? toggleOnIcon : toggleOffIcon}
              ps={"relative"}
              pstp={"3.5rem"}
            />
          </center>
        </Card>
        {/* ----------CONTENTS-------------- */}
        <Card mg={"1rem 0"} bd={"0px solid red"}>
          <Card
            br={"0.2rem"}
            bdlt={`2px solid ${styles.colors.darkBlue}`}
            // bdrt={`2px solid ${styles.colors.darkBlue}`}
            pd={"0rem 1rem"}
            fs={"1rem"}
            mg={"0.5rem 1rem"}
          >
            <b>
              <i>{item.time}</i>
            </b>
          </Card>
          <Card
            br={"0.2rem"}
            // bdlt={`2px solid ${styles.colors.darkBlue}`}
            // bdrt={`2px solid ${styles.colors.darkBlue}`}
            // pd={"0rem 1rem"}
            fs={"1.4rem"}
            mg={"0.5rem 1rem"}
          >
            <b>{item.header.toUpperCase()}</b>
          </Card>
          <Card
            br={"0.2rem"}
            bdlt={`2px solid ${styles.colors.darkBlue}`}
            // bdrt={`2px solid ${styles.colors.darkBlue}`}
            pd={"0rem 1rem"}
            mheight={"5rem"}
            ovfy={"scroll"}
            mg={"0.5rem 1rem"}
          >
            <i>{item.details}</i>
          </Card>
        </Card>
        <Card bg={styles.colors.darkBlue} bd={"0px solid red"}>
          <center>
            {" "}
            <ImageCard
              mg={"1rem 0"}
              src={closeIcon}
              height={"2rem"}
              width={"2rem"}
              onClick={(id) => deleteHandler(item.id, id)}
            />
          </center>
        </Card>
      </Card>
    </>
  );
};

export default ToDoItem;
