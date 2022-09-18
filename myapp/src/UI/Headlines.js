import React from "react";
import { Card } from "./Card.styled";
import { ImageCard } from "./ImageCard.styled";
const Headlines = ({ HeadlineProps }) => {
  return (
    <Card bd={"0px solid red"} height={HeadlineProps.height}>
      <Card
        dp={"inline"}
        cl={HeadlineProps.h1.color}
        fs={HeadlineProps.h1.fontsize}
      >
        {HeadlineProps.h1.text}
      </Card>
      <br />
      <Card dp={"inline"} fs={HeadlineProps.h2.fontsize}>
        {HeadlineProps.h2.text}
      </Card>

      <ImageCard
        float={"right"}
        ps={"relative"}
        pstp={"-1.4rem"}
        src={HeadlineProps.icons[1]}
      />
      <ImageCard
        float={"right"}
        ps={"relative"}
        pstp={"-1.4rem"}
        src={HeadlineProps.icons[0]}
        mg={"0rem 1rem"}
      />
    </Card>
  );
};

export default Headlines;
