import React from "react";
import { Card } from "../../../UI/Card.styled";
import { CardSpan } from "../../../UI/CardSpan.styled";
import { setActiveReducer } from "../../../redux/FilterStates";
import { setAllReducer } from "../../../redux/FilterStates";
import { setCompletedReducer } from "../../../redux/FilterStates";
import { useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const allHandler = () => {
    dispatch(setAllReducer());
  };
  const activeHandler = () => {
    dispatch(setActiveReducer());
  };
  const completedHandler = () => {
    dispatch(setCompletedReducer());
  };

  return (
    <Card height={"2rem"} width={"100%"} mg={"1rem 0rem"}>
      <Card
        float={"right"}
        dp={"grid"}
        gridC={"auto auto auto"}
        gridjc={"space-between"}
      >
        <Card mg={"0rem 1rem"} onClick={allHandler}>
          All
        </Card>
        <Card mg={"0rem 1rem"} onClick={activeHandler}>
          Completed
        </Card>
        <Card mg={"0rem 1rem"} onClick={completedHandler}>
          Active
        </Card>
      </Card>
    </Card>
  );
};

export default Filter;
