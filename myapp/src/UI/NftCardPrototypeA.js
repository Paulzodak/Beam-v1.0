import React from "react";
import { Card } from "./Card.styled";
import { ImageCard } from "./ImageCard.styled";
import { CardSpan } from "./CardSpan.styled";

const NftCardPrototypeA = ({ element, content, styles }) => {
  return (
    <Card
      bg={"white"}
      mg={"2rem 0rem"}
      height={"14rem"}
      bd={`2px solid ${styles.colors.NFTborder}`}
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
        fs={"0.5rem"}
        dp={"inline-block"}
        mg={"0.5rem"}
        float={"right"}
      >
        {element.user}
      </Card>
      <ImageCard
        mg={"0rem 1rem"}
        dp={"inline"}
        // bg={"red"}
        src={element.image}
        height={"75%"}
        width={"75%"}
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
      </Card>
    </Card>
  );
};

export default NftCardPrototypeA;
