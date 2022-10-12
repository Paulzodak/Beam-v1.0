import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../../../UI/Card.styled";
import { CardSpan } from "../../../UI/CardSpan.styled";
import { ImageCard } from "../../../UI/ImageCard.styled";
import { showLogoutPromptReducer } from "../../../redux/Menu";
import { useDispatch } from "react-redux";

const Menu = () => {
  const dispatch = useDispatch();
  const days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  const styles = useSelector((state) => state.style);
  const dayNumber = useSelector((state) => state.calender.currentDay);
  const dayStrings = days[dayNumber];
  const month = useSelector((state) => state.calender.month);
  const dayMonth = useSelector((state) => state.calender.dayMonth);
  const backHandler = () => {
    dispatch(showLogoutPromptReducer({ showLogoutPrompt: true }));
  };
  return (
    <Card
      height={"5rem"}
      //   bg={"red"}
      mg={"2rem 3rem 0rem 3rem"}
      dp={"grid"}
      gridR={"50% 50%"}
    >
      <Card>
        <CardSpan>
          <ImageCard
            height={"1.5rem"}
            width={"1.5rem"}
            ps={"relative"}
            pstp={"-0.5rem"}
            src={styles.icons.arrowBackIcon}
            onClick={backHandler}
          />
        </CardSpan>
        <CardSpan float={"right"}>
          <ImageCard
            height={"1.5rem"}
            width={"1.5rem"}
            ps={"relative"}
            pstp={"-0.5rem"}
            src={styles.icons.moreIcon}
          />
        </CardSpan>
      </Card>
      <Card>
        <CardSpan ps={"relative"} pstp={"-0.5rem"} fs={"1.5rem"}>
          <b>ToDo List</b>
        </CardSpan>
        <CardSpan fs={"0.8rem"} float={"right"}>
          <b>{dayStrings}</b> <>{dayMonth}</> <>{month}</>
        </CardSpan>
      </Card>
    </Card>
  );
};

export default Menu;
