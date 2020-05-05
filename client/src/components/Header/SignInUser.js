import React from "react";
import { Link } from "react-router-dom";
function SignInUser() {
  return (
    <>
      <Link to={`/account`}>
        <img src="/assets/user.png" alt="user" height="80px" width="80px"></img>
      </Link>
    </>
  );
}

export default SignInUser;
