import React from "react";
import { Card } from "../../../UI/Card.styled";
import { CardSpan } from "../../../UI/CardSpan.styled";

const Filter = () => {
  return (
    <Card height={"2rem"} width={"100%"} mg={"1rem 0rem"}>
      <Card
        float={"right"}
        dp={"grid"}
        gridC={"auto auto auto"}
        gridjc={"space-between"}
      >
        <Card mg={"0rem 1rem"}>All</Card>
        <Card mg={"0rem 1rem"}>Complete</Card>
        <Card mg={"0rem 1rem"}>Active</Card>
      </Card>
    </Card>
  );
};

export default Filter;
