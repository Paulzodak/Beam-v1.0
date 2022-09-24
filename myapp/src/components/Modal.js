import React from "react";
import { Card } from "../UI/Card.styled";
import { useSelector } from "react-redux";
import { ImageCard } from "../UI/ImageCard.styled";
import { Button } from "../UI/Button.styled";
const Modal = () => {
  const styles = useSelector((state) => state.style);
  return (
    <Card
      zindex={"1000"}
      bdft={"blur(10px)"}
      ps={"absolute"}
      width={"100vw"}

      // bg={"white"}
      // font={styles.fonts.main}
      //   font={" 'Rubik', sans-serif"}
    >
      <center>
        <Card
          width={"20rem"}
          height={"13rem"}
          position={"absolute"}
          pstp={"2rem"}
          bg={styles.colors.mainWhite}
          bs={"0px 0px 20px rgb(229, 229, 229)"}
          br={"3rem 0px"}
          ovfy={"hidden"}
          ovfx={"hidden"}
          zindex={"1000"}
          // bd={"1px solid red"}
        >
          {/* <ImageCard
            height={"2rem"}
            width={"2rem"}
            float={"right"}
            mg={"1rem 1rem"}
            // src={closeIcon}
            // onClick={closeHandler}
          />
          <Card bd={"0px solid red"} mg={"2rem 5rem 0rem 5rem"}></Card>
          <Button
            // onClick={formOnSubmit}
            bd={"none"}
            height={"4rem"}
            ps={"relative"}
            pstp={"2rem"}
            width={"100%"}
            // bg={bgColor}
            cl={styles.colors.mainWhite}
          >
            OKAY
          </Button> */}
        </Card>
      </center>
    </Card>
  );
};

export default Modal;
