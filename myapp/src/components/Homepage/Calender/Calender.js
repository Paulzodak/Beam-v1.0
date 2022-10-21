import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../../UI/Card.styled";
import calender, { setActiveReducer } from "../../../redux/calender";
// import { setDayReducer } from "../../../redux/calender";
import { setDumReducer } from "../../../redux/calender";

const Calender = () => {
  const styles = useSelector((state) => state.style);
  const days = useSelector((state) => state.calender.days);

  const dispatch = useDispatch();

  const rendered = days.map((item, index) => {
    const handler = (index) => {
      dispatch(setActiveReducer({ index: index }));
      dispatch(setDumReducer());
    };
    return (
      <Card
        key={item.day}
        bg={item.active ? styles.colors.activeRed : styles.colors.darkGrey}
        width={"4rem"}
        height={"4rem"}
        br={"1.8rem 0rem 1.8rem 0rem"}
        ta={"center"}
        pd={"1.4rem 0rem"}
        onClick={() => handler(index)}
        tr={"0.5s"}
        font={styles.fonts.mainFont}
      >
        {item.day}
      </Card>
    );
  });
  return (
    <Card
      dp={"grid"}
      gridC={"auto auto auto auto auto auto auto"}
      // bg={styles.colors.bgGrey}
      bg={"white"}
      height={"6rem"}
      width={"100vw"}
      pd={"1rem 1rem"}
      gridjc={"space-between"}
    >
      {rendered}
    </Card>
  );
};

export default Calender;
