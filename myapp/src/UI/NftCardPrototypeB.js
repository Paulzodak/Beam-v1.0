import React from "react";
import { Card } from "./Card.styled";
import { ImageCard } from "./ImageCard.styled";
import { CardSpan } from "./CardSpan.styled";
import { Button } from "./Button.styled";

const NftCardPrototypeB = ({ element, content, styles }) => {
  return (
    <Card
      bg={"white"}
      mg={"0rem 0rem 5rem 0rem"}
      height={"15rem"}
      // bd={`1px solid ${styles.colors.textAlt}`}
      bs={"0px 0px 10px gray"}
    >
      <Card dp={"inline"} mg={"0.5rem"}>
        {element.tag}.
      </Card>
      <Card
        cl={styles.colors.textAlt}
        fs={"0.5rem"}
        dp={"inline-block"}
        mg={"0.5rem"}
      >
        DAY {element.day}
      </Card>
      <Card
        cl={styles.colors.textAlt}
        fs={"0.6rem"}
        dp={"inline-block"}
        mg={"0.5rem"}
        float={"right"}
      >
        {element.user}
      </Card>
      <ImageCard
        mg={"0rem 0.5rem"}
        dp={"inline"}
        // bg={"red"}
        src={element.image}
        height={"60%"}
        width={"60%"}
      />
      <Card mg={"0rem 1rem"} height={"10%"} bd={"0px solid red"}>
        <CardSpan float={"left"} fs={"0.5rem"}>
          {element.RemainingTime}
        </CardSpan>
        <CardSpan float={"right"} fs={"0.5rem"}>
          <b> {element.value}ETH </b>
        </CardSpan>
        <br />
        <Card cl={styles.colors.textAlt} ps={"relative"} pstp={"-0.5rem"}>
          <CardSpan fs={"0.4rem"} float={"left"}>
            Remaining Time
          </CardSpan>
          <CardSpan fs={"0.4rem"} float={"right"}>
            Highest Bid
          </CardSpan>
        </Card>
        <Button
          cl={styles.colors.white}
          bg={styles.colors.altPurple}
          bd={"none"}
          height={"1.8rem"}
          width={"100%"}
        >
          Place Bid
        </Button>
      </Card>
    </Card>
  );
};

export default NftCardPrototypeB;
