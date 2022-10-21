import React from "react";
import { Card } from "../../../UI/Card.styled";
import { CardSpan } from "../../../UI/CardSpan.styled";
import { setActiveReducer } from "../../../redux/FilterStates";
import { setAllReducer } from "../../../redux/FilterStates";
import { setCompletedReducer } from "../../../redux/FilterStates";
import { useDispatch, useSelector } from "react-redux";
import { setDumReducer } from "../../../redux/calender";

const Filter = () => {
  const styles = useSelector((state) => state.style);
  const allFilter = useSelector((state) => state.FilterStates.all);
  const activeFilter = useSelector((state) => state.FilterStates.active);
  console.log(allFilter);
  const dispatch = useDispatch();
  const allHandler = () => {
    dispatch(setAllReducer());
    dispatch(setDumReducer());
  };
  const activeHandler = () => {
    dispatch(setActiveReducer());
    dispatch(setDumReducer());
  };
  const completedHandler = () => {
    dispatch(setCompletedReducer());
    dispatch(setDumReducer());
  };

  return (
    <Card
      font={styles.fonts.mainFont}
      height={"2rem"}
      width={"100%"}
      mg={"1rem 0rem"}
    >
      <Card
        float={"right"}
        dp={"grid"}
        gridC={"auto auto auto"}
        gridjc={"space-between"}
      >
        <Card
          className="filter"
          mg={"0rem 1rem"}
          onClick={allHandler}
          // tr={"3s"}
          bdbm={allFilter ? "2px solid black" : null}
        >
          <i> All</i>
        </Card>
        <Card
          mg={"0rem 1rem"}
          onClick={activeHandler}
          bdbm={activeFilter ? "2px solid black" : null}
        >
          <i> Completed</i>
        </Card>
        <Card
          mg={"0rem 1rem"}
          onClick={completedHandler}
          bdbm={!activeFilter && !allFilter ? "2px solid black" : null}
        >
          <i> Active</i>
        </Card>
      </Card>
    </Card>
  );
};

export default Filter;
