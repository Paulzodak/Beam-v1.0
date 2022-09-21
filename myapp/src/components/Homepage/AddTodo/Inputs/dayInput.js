import React from "react";
import { SelectInput } from "../../../../UI/SelectInput.styled";
import { Card } from "../../../../UI/Card.styled";
import { Option } from "../../../../UI/Option.styled";
import { useSelector } from "react-redux";
// import "./dayInput.css";
const DayInput = () => {
  const style = useSelector((state) => state.style);
  return (
    <Card>
      <SelectInput
        mg={"0rem 3rem"}
        float={"left"}
        ps={"relative"}
        bg={style.colors.darkBlue}
        bd={"none"}
        br={"2rem"}
      >
        {/* <Card
          width={"10rem"}
          height={"10rem"}
          ps={"absolute"}
          pstp={"5rem"}
          zindex={"1000"}
          bg={"green"}
        > */}
        <Option ps={"absolute"} pstp={"20rem"} value="Sun">
          Sun
        </Option>
        <Option ps={"absolute"} pstp={"20rem"} value="Mon">
          Mon
        </Option>
        <Option ps={"absolute"} pstp={"20rem"} value="Tue">
          Tue
        </Option>
        <Option ps={"absolute"} pstp={"20rem"} value="Wed">
          Wed
        </Option>
        <Option ps={"absolute"} pstp={"20rem"} value="Wed">
          Wed
        </Option>
        <Option ps={"absolute"} pstp={"20rem"} value="Wed">
          Wed
        </Option>
        <Option ps={"absolute"} pstp={"20rem"} value="Wed">
          Wed
        </Option>
        {/* </Card> */}
      </SelectInput>
    </Card>
  );
};

export default DayInput;
