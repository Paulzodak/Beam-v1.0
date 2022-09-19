import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../../UI/Card.styled";
import ToDoItem from "./ToDoItem";
import { setActiveReducer } from "../../../redux/FilterStates";
import { setAllReducer } from "../../../redux/FilterStates";
const ToDoList = () => {
  const dummyTodoList = [
    {
      time: "3:00PM",
      header: "Meeting",
      details: "Discuss Million Website",
      done: false,
      day: 1,
    },
    {
      time: "05:30PM",
      header: "Fitness",
      details: "Coach Jill Steven",
      done: true,
      day: 2,
    },
    {
      time: "07:30PM",
      header: "Aperitif",
      details: "Michaela's House",
      done: false,
      day: 1,
    },
    {
      time: "9:00PM",
      header: "Finish App design",
      details: "Complete all Screens",
      done: false,
      day: 1,
    },
    {
      time: "4:00PM",
      header: "Watch Football",
      details: "Chelsea",
      done: false,
      day: 2,
    },
  ];
  //   ------------ FILTER LOGIC ---------------------------
  const FilterStates = useSelector((states) => states.FilterStates);

  const active = FilterStates.active;
  const all = FilterStates.all;
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
    return <ToDoItem item={item} />;
  });
  return <Card bd={"0px solid red"}>{rendered}</Card>;
};

export default ToDoList;
