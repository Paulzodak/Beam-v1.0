import React from "react";
import { Card } from "../../../UI/Card.styled";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../UI/Button.styled";
import { Input } from "../../../UI/Input.styled";
import TaskInput from "./Inputs/TaskInput";
import NoteInput from "./Inputs/NoteInput";
import DayInput from "./Inputs/dayInput";
import { setTodoReducer } from "../../../redux/Todos";
import closeIcon from "../../../Images/closeIcon.svg";
import { ImageCard } from "../../../UI/ImageCard.styled";
import { setShowAddTodoReducer } from "../../../redux/addTodoForm";
const AddTodo = () => {
  const styles = useSelector((state) => state.style);
  const calender = useSelector((state) => state.calender);
  const prevTodos = useSelector((state) => state.Todos);
  const inputs = useSelector((state) => state.addTodoForm);
  const dispatch = useDispatch();
  const fulldate = new Date();
  const hour = fulldate.getHours();
  const min = fulldate.getMinutes();

  const currenthour =
    hour > 12 && hour < 24 ? hour - 12 : hour && hour === 24 ? 0 : hour;
  console.log(currenthour);

  const formOnSubmit = () => {
    console.log(calender.currentDay);
    console.log(inputs);
    console.log(prevTodos);
    const newTodo = {
      time: `${currenthour}:${min}${hour < 12 ? "AM" : "PM"}`,
      header: inputs.taskInput,
      details: inputs.noteInput,
      done: false,
      day: calender.currentDay,
    };
    dispatch(setTodoReducer({ newTodo: newTodo }));
  };
  const closeHandler = () => {
    dispatch(setShowAddTodoReducer());
  };
  return (
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
        position={"relative"}
        zindex={"1"}
        // bd={"1px solid red"}
      >
        <ImageCard
          height={"3rem"}
          width={"3rem"}
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
          pstp={"2rem"}
          width={"100%"}
          bg={styles.colors.darkBlue}
          cl={styles.colors.mainWhite}
        >
          ADD
        </Button>
      </Card>
    </center>
  );
};

export default AddTodo;
