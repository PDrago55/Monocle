import React from "react";
import { Link } from "react-router-dom";
function SignUpIcon() {
  return (
    <>
      <Link to="/user">
        <img src="/assets/user.png" alt="user" height="80px" width="80px"></img>
      </Link>
    </>
  );
}

export default SignUpIcon;
