import React, { useState } from "react";
import { Card } from "../../UI/Card.styled";
import Calender from "./Calender/Calender";
import calender from "../../redux/calender";
import { useDispatch, useSelector } from "react-redux";
import { setActiveReducer } from "../../redux/calender";
import Menu from "./MenuBar/Menu";
import Filter from "./Filter/Filter";
import ToDoList from "./ToDos/ToDoList";
import AddTodoIcon from "./AddTodo/AddTodoIcon";
import AddTodo from "./AddTodo/AddTodo";
import {
  SwitchTransition,
  CSSTransition,
  TransitionGroup,
} from "react-transition-group";

const HomePage = () => {
  const dispatch = useDispatch();

  const handler = () => {
    // dispatch(setActiveReducer());
  };
  const showAddTodo = useSelector((state) => state.addTodoForm.showAddTodo);

  const days = useSelector((state) => state.calender.days);
  const dum = useSelector((state) => state.calender.dum);
  const currentDay = useSelector((states) => states.calender.currentDay);
  return (
    <Card>
      <Menu />
      <Calender />
      <Filter />
      <SwitchTransition>
        <CSSTransition
          key={dum}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fadec"
          timeout={200}
        >
          {currentDay ? <ToDoList /> : <ToDoList />}
        </CSSTransition>
      </SwitchTransition>
      {!showAddTodo ? <AddTodoIcon /> : <AddTodo />}
      {/* <AddTodoIcon /> */}
      {/* <AddTodo /> */}
    </Card>
  );
};

export default HomePage;
