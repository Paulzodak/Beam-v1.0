import React, { useState, useRef } from "react";
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
import Modal from "../Modal";
import {
  SwitchTransition,
  CSSTransition,
  TransitionGroup,
} from "react-transition-group";

const HomePage = () => {
  const dispatch = useDispatch();
  const [showLogOutPrompt, setShowLogOutPrompt] = useState(true);

  const handler = () => {
    // dispatch(setActiveReducer());
  };
  const showAddTodo = useSelector((state) => state.addTodoForm.showAddTodo);

  const days = useSelector((state) => state.calender.days);
  const dum = useSelector((state) => state.calender.dum);
  const currentDay = useSelector((states) => states.calender.currentDay);
  const nodeRef = useRef(null);
  return (
    <Card>
      <Menu />
      <Calender />
      <Filter />
      {/* <SwitchTransition>
        <CSSTransition
          key={dum}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="AddTodoFade"
          timeout={600}
        >
          {dum ? <ToDoList /> : <div>jjj</div>} */}
      <ToDoList />
      {/* </CSSTransition>
      </SwitchTransition> */}
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
          {!showAddTodo ? <AddTodoIcon /> : <AddTodo />}
        </CSSTransition>
      </SwitchTransition>
      {/* <SwitchTransition>
        <CSSTransition
          key={showAddTodo}
          // nodeRef={nodeRef}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="AddTodoFade"
          timeout={400}
        >
          {showLogOutPrompt ? <Modal /> : <></>}
        </CSSTransition>
      </SwitchTransition> */}
      <Modal />
    </Card>
  );
};

export default HomePage;
