import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function SignUpIcon() {
  return (
    <>
      <StyledLink to="/user">
        <Box>
          <div className="sign">Sign In!</div>
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
  margin-right: 20px;
  padding: 0px 8px;
  border-radius: 5px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  &: hover {
    color: white;
    opacity: 0.9;
  }
  .sign {
    font-size: 32px;
  }
`;
export default SignUpIcon;
