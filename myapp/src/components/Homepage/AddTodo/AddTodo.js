import React, { useState, useEffect } from "react";
import { Card } from "../../../UI/Card.styled";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../UI/Button.styled";
import { Input } from "../../../UI/Input.styled";
import TaskInput from "./Inputs/TaskInput";
import NoteInput from "./Inputs/NoteInput";
import DayInput from "./Inputs/dayInput";
import { setTodoReducer } from "../../../redux/Todos";
import closeIcon from "../../../Images/closeIcon.svg";
import { setLoadingReducer } from "../../../redux/addTodoForm";
import { pushTodoReducer } from "../../../redux/Todos";
import { showErrorModalReducer } from "../../../redux/Menu";
import { setLoaderModal } from "../../../redux/Menu";

import { ImageCard } from "../../../UI/ImageCard.styled";
import { setShowAddTodoReducer } from "../../../redux/addTodoForm";
import { setFormIsValid } from "../../../redux/addTodoForm";
import { setNoteInputReducer } from "../../../redux/addTodoForm";
import { setTaskInputReducer } from "../../../redux/addTodoForm";
import axios from "axios";
const BASEURL = "https://63322126a54a0e83d24c89f7.mockapi.io/";
const AddTodo = () => {
  const styles = useSelector((state) => state.style);
  const calender = useSelector((state) => state.calender);
  const prevTodos = useSelector((state) => state.Todos);
  const inputs = useSelector((state) => state.addTodoForm);
  const currentUserID = useSelector((state) => state.form.currentUserID);
  const dispatch = useDispatch();
  const fulldate = new Date();
  const hour = fulldate.getHours();
  const min = fulldate.getMinutes();
  const minutes = min.length > 1 ? min : String(min).padStart(2, "0");
  console.log(min);

  const currenthour =
    hour > 12 && hour < 24 ? hour - 12 : hour && hour === 24 ? 0 : hour;
  console.log(currenthour);
  const taskInput = useSelector((state) => state.addTodoForm.taskInput);
  const noteInput = useSelector((state) => state.addTodoForm.noteInput);
  const formIsValid = useSelector((state) => state.addTodoForm.formIsValid);

  const [bgColor, setBgColor] = useState(styles.colors.darkBlue);

  const formOnSubmit = () => {
    console.log(taskInput);
    console.log(noteInput);
    if (taskInput.length >= 2 && noteInput.length >= 5) {
      setBgColor(styles.colors.darkBlue);
      dispatch(setLoaderModal({ loaderModal: true }));

      dispatch(setLoadingReducer({ loading: true }));
      axios
        .post(`${BASEURL}/Users/${currentUserID}/Todos`, {
          time: `${currenthour}:${min}${hour < 12 ? "AM" : "PM"}`,
          header: inputs.taskInput,
          details: inputs.noteInput,
          done: false,
          day: calender.currentDay,
          UserId: "2",
        })
        .then((response) => {
          dispatch(setLoaderModal({ loaderModal: false }));
          dispatch(pushTodoReducer({ pushTodo: response.data }));
        })
        .catch((err) => {
          dispatch(showErrorModalReducer({ show: true, message: err.message }));
        });
      dispatch(setTaskInputReducer({ taskInput: "" }));
      dispatch(setNoteInputReducer({ noteInput: "" }));
    } else {
      setBgColor("red");
    }
  };
  const closeHandler = () => {
    dispatch(setShowAddTodoReducer({ showAddTodo: false }));
    sessionStorage.removeItem("showAddTodo");
  };
  return (
    <>
      <center>
        <Card
          mg={"3rem 2rem"}
          height={"20rem"}
          // width={"25rem"}
          bg={styles.colors.mainWhite}
          bs={"0px 0px 20px rgb(229, 229, 229)"}
          br={"3rem 0px"}
          ovfy={"hidden"}
          ovfx={"hidden"}
          ps={"relative"}
          zindex={"1"}
          font={styles.fonts.mainFont}
          // bd={"1px solid red"}
        >
          <ImageCard
            height={"2rem"}
            width={"2rem"}
            float={"right"}
            mg={"1rem 1rem"}
            src={closeIcon}
            onClick={closeHandler}
          />
          <Card bd={"0px solid red"} mg={"2rem 5rem 0rem 5rem"}>
            <Card float={"left"} mg={"0.5rem 0rem"} fs={"1.5rem"}>
              <b>New Task</b>
            </Card>
            <br />
            <TaskInput />
            <br />
            <Card fs={"1.2rem"} float={"left"}>
              <b> Notes</b>
            </Card>
            <NoteInput />
          </Card>
          <Button
            onClick={formOnSubmit}
            bd={"none"}
            height={"4rem"}
            ps={"relative"}
            pstp={"1.8rem"}
            width={"100%"}
            bg={bgColor}
            cl={styles.colors.mainWhite}
            font={"inherit"}
          >
            <i>ADD</i>
          </Button>
        </Card>
      </center>
    </>
  );
};

export default AddTodo;
