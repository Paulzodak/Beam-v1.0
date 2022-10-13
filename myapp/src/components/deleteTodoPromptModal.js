import React from "react";
import { Card } from "../UI/Card.styled";
import { useSelector, useDispatch } from "react-redux";
import { ImageCard } from "../UI/ImageCard.styled";
import closeIcon from "../Images/closeIcon.svg";
import { Button } from "../UI/Button.styled";
import { showLogoutPromptReducer } from "../redux/Menu";
import axios from "axios";
import { loginAuthReducer } from "../redux/form";
import { deleteTodoPromptReducer } from "../redux/Menu";
import { deleteIdReducer } from "../redux/Menu";
import { showErrorModalReducer } from "../redux/Menu";
import { setTodoReducer } from "../redux/Todos";
import { deleteTodoReducer } from "../redux/Todos";
const BASEURL = "https://63322126a54a0e83d24c89f7.mockapi.io/";
const DeleteTodoPromptModal = () => {
  const currentUserID = useSelector((state) => state.form.currentUserID);
  const styles = useSelector((state) => state.style);

  const dispatch = useDispatch();
  const { deleteId } = useSelector((state) => state.Menu);
  const closeHandler = () => {
    dispatch(deleteTodoPromptReducer({ deleteTodoPrompt: false }));
  };

  const deleteHandler = () => {
    dispatch(deleteTodoReducer({ id: deleteId }));
    axios
      .delete(`${BASEURL}/Users/${currentUserID}/Todos/${deleteId}`)
      .then((res) => {
        dispatch(deleteIdReducer({ deleteId: "" }));
      })
      .catch((err) => {
        dispatch(showErrorModalReducer({ show: true, message: err.message }));
      });
    dispatch(deleteTodoPromptReducer({ deleteTodoPrompt: false }));
  };
  return (
    <Card
      zindex={"1000"}
      bdft={"blur(10px)"}
      height={"50rem"}
      ps={"absolute"}
      pstp={"1rem"}
      width={"100vw"}

      // bg={"white"}
      // font={styles.fonts.main}
      //   font={" 'Rubik', sans-serif"}
    >
      <center>
        <Card
          width={"20rem"}
          height={"7rem"}
          position={"absolute"}
          pstp={"2rem"}
          mg={"10rem 0rem 0rem"}
          bg={styles.colors.mainWhite}
          bs={"0px 0px 20px rgb(229, 229, 229)"}
          br={"3rem 0px"}
          ovfy={"hidden"}
          ovfx={"hidden"}
          zindex={"1000"}
          // bd={"1px solid red"}
        >
          <ImageCard
            height={"2rem"}
            width={"2rem"}
            float={"right"}
            mg={"1rem 1rem"}
            src={closeIcon}
            onClick={closeHandler}
          />
          <Card bd={"0px solid red"} mg={"2rem 5rem 0rem 5rem"}></Card>
          <Button
            onClick={deleteHandler}
            bd={"none"}
            height={"3rem"}
            ps={"relative"}
            pstp={"0rem"}
            width={"100%"}
            bg={styles.colors.darkBlue}
            cl={styles.colors.mainWhite}
          >
            DELETE?
          </Button>
        </Card>
      </center>
    </Card>
  );
};

export default DeleteTodoPromptModal;
