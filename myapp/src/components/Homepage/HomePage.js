import React, { useState } from "react";
import { Card } from "../../UI/Card.styled";
import Calender from "./Calender/Calender";
import calender from "../../redux/calender";
import { useDispatch, useSelector } from "react-redux";
import { setActiveReducer } from "../../redux/calender";
import Menu from "./MenuBar/Menu";
import Filter from "./Filter/Filter";
import ToDoList from "./ToDos/ToDoList";

const HomePage = () => {
  const dispatch = useDispatch();

  const handler = () => {
    // dispatch(setActiveReducer());
  };
  const days = useSelector((state) => state.calender.days);

  return (
    <Card>
      <Menu />
      <Calender />
      <Filter />
      <ToDoList />
    </Card>
  );
};

export default HomePage;
