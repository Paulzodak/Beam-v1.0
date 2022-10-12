import React, { useState, useRef, useEffect } from "react";
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
import LogoutModal from "../logoutModal";
import axios from "axios";
import { setLoadingReducer } from "../../redux/addTodoForm";
import { setTodoReducer } from "../../redux/Todos";
import { setIsTodos } from "../../redux/Todos";
import Loading from "../../UI/Loading";
import { setShowAddTodoReducer } from "../../redux/addTodoForm";
import { currentUserIDReducer } from "../../redux/form";
import {
  SwitchTransition,
  CSSTransition,
  TransitionGroup,
} from "react-transition-group";
const BASEURL = "https://63322126a54a0e83d24c89f7.mockapi.io/";
const HomePage = () => {
  const days = useSelector((state) => state.calender.days);
  const dum = useSelector((state) => state.calender.dum);
  const currentDay = useSelector((states) => states.calender.currentDay);
  const dispatch = useDispatch();
  dispatch(
    currentUserIDReducer({ currentUserID: sessionStorage.getItem("ID") })
  );
  const isTodos = useSelector((state) => state.Todos.isTodos);
  const currentUserID = useSelector((state) => state.form.currentUserID);
  console.log(currentUserID);
  const todos = useSelector((state) => state.Todos.todos);
  if (sessionStorage.showAddTodo) {
    dispatch(setShowAddTodoReducer({ showAddTodo: true }));
  }

  const showAddTodo = useSelector((state) => state.addTodoForm.showAddTodo);
  const showLogoutPrompt = useSelector((state) => state.Menu.showLogoutPrompt);
  // dispatch(setLoadingReducer({ loading: true }));
  useEffect(() => {
    axios
      .get(`${BASEURL}/Users/${currentUserID}/Todos`)

      .then((response) => {
        // response.data.map((item) => {
        //   // JSON.parse(item)
        //   // dispatch(setTodoReducer({ todos: item }));
        // });
        dispatch(setLoadingReducer({ loading: false }));
        dispatch(setTodoReducer({ todos: response.data }));
        console.log(response.data);
      });
  }, []);
  // setTimeout(() => {
  //   dispatch(setIsTodos({ isTodo: true }));
  // }, 2000);
  // todos.map((item) => {
  //   if (item.day === currentDay) {
  //     dispatch(setIsTodos({ isTodo: true }));
  //   } else {
  //     dispatch(setIsTodos({ isTodo: false }));
  //   }
  // });
  console.log(isTodos);

  const nodeRef = useRef(null);
  return (
    <Card>
      <Menu />
      <Calender />
      <Filter />
      {/* <SwitchTransition>
        <CSSTransition
          key={isTodos}
          // nodeRef={nodeRef}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="AddTodoFade"
          timeout={400}
        >
          {isTodos ? <ToDoList /> : <Card>NO TODOS</Card>}
        </CSSTransition>
      </SwitchTransition> */}
      <ToDoList />

      <SwitchTransition>
        <CSSTransition
          key={showAddTodo}
          // nodeRef={nodeRef}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="AddTodoFade"
          timeout={400}
        >
          {showAddTodo ? <AddTodo /> : <AddTodoIcon />}
        </CSSTransition>
      </SwitchTransition>
      <SwitchTransition>
        <CSSTransition
          key={showLogoutPrompt}
          // nodeRef={nodeRef}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="AddTodoFade"
          timeout={400}
        >
          {showLogoutPrompt ? <LogoutModal /> : <></>}
        </CSSTransition>
      </SwitchTransition>
    </Card>
  );
};

export default HomePage;
