import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../../UI/Card.styled";
import ToDoItem from "./ToDoItem";
import {
  SwitchTransition,
  CSSTransition,
  TransitionGroup,
} from "react-transition-group";
import "./TodoTransition.css";
import { setActiveReducer } from "../../../redux/FilterStates";
import { setAllReducer } from "../../../redux/FilterStates";
import LoginPage from "../../Login/LoginPage";
const ToDoList = () => {
  // const dummyTodoList = [
  //   {
  //     time: "12:00AM",
  //     header: "pray",
  //     details: "pray for financial breakthrough",
  //     done: false,
  //     day: 0,
  //   },
  //   {
  //     time: "3:00PM",
  //     header: "Meeting",
  //     details: "Discuss Million Website",
  //     done: false,
  //     day: 1,
  //   },
  //   {
  //     time: "05:30PM",
  //     header: "Fitness",
  //     details: "Coach Jill Steven",
  //     done: true,
  //     day: 2,
  //   },
  //   {
  //     time: "07:30PM",
  //     header: "Aperitif",
  //     details: "Michaela's House",
  //     done: false,
  //     day: 2,
  //   },
  //   {
  //     time: "9:00PM",
  //     header: "Finish App design",
  //     details: "Complete all Screens",
  //     done: false,
  //     day: 3,
  //   },
  //   {
  //     time: "4:00PM",
  //     header: "Watch Football",
  //     details: "Chelsea",
  //     done: false,
  //     day: 4,
  //   },
  //   {
  //     time: "2:30PM",
  //     header: "Watch Football",
  //     details: "Manchester united",
  //     done: false,
  //     day: 5,
  //   },
  //   {
  //     time: "8:00AM",
  //     header: "pray",
  //     details: "Morning devotion",
  //     done: false,
  //     day: 5,
  //   },
  //   {
  //     time: "5:30PM",
  //     header: "music",
  //     details: "score songs",
  //     done: false,
  //     day: 5,
  //   },
  //   {
  //     time: "4:00PM",
  //     header: "Watch Football",
  //     details: "Chelsea",
  //     done: false,
  //     day: 6,
  //   },
  // ];

  const dummyTodoList = useSelector((state) => state.Todos);
  const dum = useSelector((state) => state.calender.dum);
  console.log(dum);
  //   ------------ FILTER LOGIC ---------------------------
  const FilterStates = useSelector((states) => states.FilterStates);
  const currentDay = useSelector((states) => states.calender.currentDay);
  //   -----------FILTER BY COMPLETED STATE-----------------
  const active = FilterStates.active; // To display either active or completed items
  const all = FilterStates.all; // to switch between active or commpleted and all
  const dispatch = useDispatch();
  function ActiveFilter(item) {
    return item.done == true;
  }
  function CompletedFilter(item) {
    return item.done == false;
  }

  const filteredByActiveToDo = all
    ? dummyTodoList
    : dummyTodoList.filter(active ? ActiveFilter : CompletedFilter);

  const rendered = filteredByActiveToDo.map((item) => {
    if (currentDay === item.day) {
      return (
        // <SwitchTransition>
        //   <CSSTransition
        //     key={dum}
        //     addEndListener={(node, done) =>
        //       node.addEventListener("transitionend", done, false)
        //     }
        //     classNames="fadec"
        //     timeout={100}
        //   >
        //     {dum ? (
        //       <>
        <ToDoItem item={item} />
        //       </>
        //     ) : (
        //       <>
        //         <b>mm</b>
        //       </>
        //     )}
        //   </CSSTransition>
        // </SwitchTransition>
      );
      //   return <ToDoItem item={item} />;
    }
  });
  return (
    <>
      <Card bd={"0px solid red"}>
        {/* <SwitchTransition>
          <CSSTransition
            key={currentDay}
            addEndListener={(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
            classNames="fade"
            timeout={400}
          >
            {currentDay ? <>{rendered}</> : <>{rendered}</>}
          </CSSTransition>
        </SwitchTransition> */}
        {rendered}
      </Card>
    </>
  );
};

export default ToDoList;
