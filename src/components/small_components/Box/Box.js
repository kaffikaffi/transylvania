import React from "react";
import colors from "../../../style/colors";
import styled from "syled-components";

const box_style = styled.section`
  background-color: ${colors.pink};
  width: 10rem;
  height: 10rem;
`;
const Box = ({ name }) => {
  return (
    <section className={box_style}>
      <h1>{name}</h1>
    </section>
  );
};

export default Box;
