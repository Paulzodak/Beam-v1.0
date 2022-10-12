import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../../UI/Card.styled";
import ToDoItem from "./ToDoItem";
import Loading from "../../../UI/Loading";
import { setTodoIsEmpty } from "../../../redux/Todos";
import { setTodoActiveness } from "../../../redux/Todos";
import axios from "axios";
import {
  SwitchTransition,
  CSSTransition,
  TransitionGroup,
} from "react-transition-group";
import "./TodoTransition.css";
import { setActiveReducer } from "../../../redux/FilterStates";
import { setAllReducer } from "../../../redux/FilterStates";
import LoginPage from "../../Login/LoginPage";
const BASEURL = "https://63322126a54a0e83d24c89f7.mockapi.io/";
const ToDoList = () => {
  const loading = useSelector((state) => state.addTodoForm.loading);
  const todoIsEmpty = useSelector((state) => state.Todos.todoIsEmpty);
  const currentUserID = useSelector((state) => state.form.currentUserID);
  // console.log(todoIsEmpty);

  // const dummyTodoList = useSelector((state) => state.Todos);
  const todos = useSelector((state) => state.Todos.todos);
  console.log(todos);
  const dum = useSelector((state) => state.calender.dum);
  // console.log(dum);
  //   ------------ FILTER LOGIC ---------------------------
  const FilterStates = useSelector((states) => states.FilterStates);
  const currentDay = useSelector((states) => states.calender.currentDay);

  //   -----------FILTER BY COMPLETED STATE-----------------
  const active = FilterStates.active; // To display either active or completed items
  const all = FilterStates.all; // to switch between {active/commpleted} or all
  const dispatch = useDispatch();
  function ActiveFilter(item) {
    return item.done == true;
  }
  function CompletedFilter(item) {
    return item.done == false;
  }
  function DayFilter(item) {
    return item.day === currentDay;
  }
  // console.log(dummyTodoList.filter(DayFilter));

  const dayFilteredDummy = todos.filter(DayFilter);
  const filteredByActiveToDo = all
    ? dayFilteredDummy
    : dayFilteredDummy.filter(active ? ActiveFilter : CompletedFilter);

  // MANAGES THE DONE STATE FOR TODOS IN THE BROWSER TO UPDATE THE ONE IN BACKEND
  const [done, setDone] = useState();

  const clickHandler = (id) => {
    // SET THE DONE STATE FOR TODOS IN THE BROWSER
    dispatch(setTodoActiveness({ id: id }));
    // console.log(id);
    // setTimeout(() => {
    //   console.log(todos);
    // }, 5000);
    // console.log(todos);

    // SET THE DONE STATE FOR TODOS IN THE BACKEND
    // setTimeout(() => {
    //   todos.map((item) => {
    //     if (String(item.id) === String(id)) {
    //       // setDone(item.done);
    //       console.log(item.done);
    //       console.log(item.id);
    //       console.log(todos);
    //       axios.put(`${BASEURL}/Users/${currentUserID}/Todos/${id}`, {
    //         done: item.done,
    //       });
    //     }
    //   });
    // }, 2000);
    // todos.map((item) => {
    //   if (String(item.id) === String(id)) {
    //     // setDone(item.done);
    //     console.log(item.done);
    //     axios.put(`${BASEURL}/Users/${currentUserID}/Todos/${id}`, {
    //       done: item.done,
    //     });
    //   }
    // });
    // axios.put(`${BASEURL}/Users/${currentUserID}/Todos/${id}`, {
    //   done: done,
    // });
  };

  const Rendered = filteredByActiveToDo.map((item, index) => {
    return (
      <Card
        onClick={() => {
          clickHandler(item.id);
        }}
      >
        <ToDoItem
          // clickHandler={clickHandler}
          item={item}
        />
      </Card>
    );
  });
  if (filteredByActiveToDo.length > 0) {
    dispatch(setTodoIsEmpty({ todoIsEmpty: false }));
  } else if (filteredByActiveToDo.length <= 0) {
    dispatch(setTodoIsEmpty({ todoIsEmpty: true }));
  }
  const noTodosRender = () => {
    return (
      <Card mg={"3rem 0rem"}>
        <center> NO TASKS</center>
      </Card>
    );
  };

  return (
    <>
      <Card ps={"relative"} bd={"0px solid red"}>
        <SwitchTransition>
          <CSSTransition
            key={todoIsEmpty}
            addEndListener={(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
            classNames="AddTodoFade"
            timeout={400}
          >
            {todoIsEmpty ? noTodosRender : <Card> {Rendered} </Card>}
          </CSSTransition>
        </SwitchTransition>
        {/* {filteredByActiveToDo.length > 0 ? rendered : <Card>no todo </Card>} */}
        {/* <SwitchTransition>
          <CSSTransition
            key={loading}
            addEndListener={(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
            classNames="AddTodoFade"
            timeout={600}
          >
            {loading ? <Loading /> : <></>}
          </CSSTransition>
        </SwitchTransition> */}
      </Card>
    </>
  );
};

export default ToDoList;
