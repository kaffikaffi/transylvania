import React from "react";
import colors from "../../../style/colors.js";
import styled from "styled-components";

const StyledBox = styled.div`
  background-color: ${colors.pink};
  border: solid ${colors.purple};
  width: 20rem;
  height: 20rem;
  color: #ffff;
`;

const Box = ({ name }) => {
  return (
    <div>
      <StyledBox>
        <h1>{name}</h1>
      </StyledBox>
    </div>
  );
};

export default Box;
