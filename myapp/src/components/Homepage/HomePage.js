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
import DeleteTodoPromptModal from "../deleteTodoPromptModal";
import { showErrorModalReducer } from "../../redux/Menu";
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
  const styles = useSelector((state) => state.style);
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
  const deleteTodoPrompt = useSelector((state) => state.Menu.deleteTodoPrompt);

  useEffect(() => {
    axios
      .get(`${BASEURL}/Users/${currentUserID}/Todos`)

      .then((response) => {
        dispatch(setLoadingReducer({ loading: false }));
        dispatch(setTodoReducer({ todos: response.data }));
        console.log(response.data);
      })
      .catch((err) => {
        dispatch(showErrorModalReducer({ show: true, message: err.message }));
      });
  }, []);

  const nodeRef = useRef(null);
  return (
    <Card>
      {/* -----------CIRLCES DESIGN--------------- */}
      <Card
        bg={styles.colors.darkBlue}
        height={"14rem"}
        width={"14rem"}
        br={"100%"}
        ps={"absolute"}
        pstp={"-3rem"}
        pslf={"-3rem"}
        zindex={"-10000"}
      />
      <Card
        bg={styles.colors.darkBlue}
        height={"4rem"}
        width={"4rem"}
        br={"100%"}
        ps={"absolute"}
        pstp={"-1rem"}
        psrt={"-1rem"}
        zindex={"-10000"}
      />
      {/*------------------------  */}
      <Menu />
      <Calender />
      <Filter />

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
      <SwitchTransition>
        <CSSTransition
          key={deleteTodoPrompt}
          // nodeRef={nodeRef}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="AddTodoFade"
          timeout={400}
        >
          {deleteTodoPrompt ? <DeleteTodoPromptModal /> : <></>}
        </CSSTransition>
      </SwitchTransition>
    </Card>
  );
};

export default HomePage;
