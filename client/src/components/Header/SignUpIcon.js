import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function SignUpIcon() {
  return (
    <>
      <StyledLink to="/user">
        <Box>
          <h1>Sign In!</h1>
        </Box>
      </StyledLink>
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const Box = styled.div`
  border: 1px solid black;
  padding: 0px 10px;
  margin-right: 20px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  &: hover {
    color: white;
    opacity: 0.9;
  }
`;
export default SignUpIcon;
