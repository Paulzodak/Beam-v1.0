import React from "react";
import { Card } from "../Card.styled";
import { Button } from "../Button.styled";
import { ImageCard } from "../ImageCard.styled";

const ErrModal = ({ ErrContents, setErrorState, styles }) => {
  const clickHandler = () => {
    setErrorState((state) => !state);
  };
  return (
    <>
      <Card
        zindex={"10000"}
        bdft={"blur(10px)"}
        ps={"absolute"}
        width={"100vw"}
        // bg={"white"}
        // font={styles.fonts.main}
        font={" 'Rubik', sans-serif"}
      >
        <Card
          ps={"sticky"}
          mg={"30% 25%"}
          bg={"white"}
          width={"50%"}
          // height={"10rem"}
          br={"10px"}
          pd={"0.2rem 3rem"}
        >
          <Card
            height={"3rem"}
            width={"100%"}
            br={"3px"}
            bg={"black"}
            dp={"absolute"}
          />
          <center>
            <ImageCard src={ErrContents.icon} height={"20%"} width={"20%"} />
          </center>
          <Card mg={"8% 0rem"}>
            <center>{ErrContents.header} </center>
          </Card>
          <Card mg={"0rem 0rem"}>{ErrContents.message}</Card>
          <Button
            bg={"black"}
            bd={"none"}
            fs={"1rem"}
            height={"3rem"}
            width={"100%"}
            mg={"2rem 0rem"}
            cl={"white"}
            br={"5px"}
            ta={"center"}
            onClick={() => {
              clickHandler();
            }}
          >
            Okay!
          </Button>
        </Card>
      </Card>
    </>
  );
};

export default ErrModal;
