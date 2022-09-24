import React from "react";
import { Card } from "../../../UI/Card.styled";
import addBtn from "../../../Images/addBtn.svg";
import { useSelector } from "react-redux";
import { ImageCard } from "../../../UI/ImageCard.styled";
import { setShowAddTodoReducer } from "../../../redux/addTodoForm";
import { useDispatch } from "react-redux";
const AddTodoIcon = () => {
  const dispatch = useDispatch();
  const showAddTodo = useSelector((state) => state.addTodoForm.showAddTodo);

  const handler = () => {
    dispatch(setShowAddTodoReducer());
    console.log(showAddTodo);
  };
  return (
    <center>
      <Card
        // bd={"1px solid red"}
        height={"6rem"}
        width={"6rem"}
        mg={"3rem 0rem"}
        bs={"0px 0px 50px rgb(230, 230, 230)"}
        br={"100%"}
        onClick={handler}
        // hvheight={"2rem"}
        // hvwidth={"2rem"}
      >
        <center>
          <ImageCard
            height={"2rem"}
            width={"2rem"}
            src={addBtn}
            mg={"2rem 0rem"}
          />
        </center>
      </Card>
    </center>
  );
};

export default AddTodoIcon;
