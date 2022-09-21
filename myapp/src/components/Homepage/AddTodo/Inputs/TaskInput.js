import React from "react";
import { Card } from "../../../../UI/Card.styled";
import { Input } from "../../../../UI/Input.styled";
import { useDispatch } from "react-redux";
import { setTaskInputReducer } from "../../../../redux/addTodoForm";
import { useSelector } from "react-redux";

const TaskInput = () => {
  const dispatch = useDispatch();
  const onChangeHandler = (event) => {
    dispatch(setTaskInputReducer({ taskInput: event.target.value }));
    console.log("j");
  };
  const taskInput = useSelector((state) => state.addTodoForm);
  console.log(taskInput);
  return (
    <Card>
      <Input
        placeholder="TASK INPUT"
        height={"3rem"}
        width={"100%"}
        mg={"0.5rem 0rem"}
        float={"left"}
        onChange={onChangeHandler}
      />
    </Card>
  );
};

export default TaskInput;
