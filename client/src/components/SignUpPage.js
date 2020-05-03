import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);
  return (
    <>
      <Container>
        <BlackBackground>
          <div className="banner">Sign-Up</div>
          <div className="movement">Join the Movement</div>
          <div className="details">
            Answer a few questions to help us get to know you!{" "}
          </div>
          <div className="container">
            <Link to="/register">
              <button className="signup">Sign Up</button>
            </Link>
          </div>
        </BlackBackground>
        <WhiteBackground>
          <div className="newbanner">Sign-In</div>
          <div className="account">Already have an account?</div>
          <div className="description">
            Sign in below and join the millions using this app!
          </div>
          <form>
            <div className="inputContainer">
              <div>Email</div>
              <input
                type="text"
                className="email"
                value={email}
                placeholder="Email"
                onChange={(ev) => setEmail(ev.target.value)}
              ></input>
              <div>Password</div>
              <input
                type="text"
                className="password"
                value={password}
                placeholder="Password"
                onChange={(ev) => setPassword(ev.target.value)}
              ></input>
            </div>
            <div>
              <button
                className="signin"
                type="submit"
                form="signin-form"
                onClick={(ev) => {
                  ev.preventDefault();
                  fetch("/user", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      email: email,
                      password: password,
                    }),
                  })
                    .then((res) => res.json())
                    .then((data) => console.log(data));
                }}
              >
                Sign In
              </button>
            </div>
          </form>
        </WhiteBackground>
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  min-width: 100%;
`;

const BlackBackground = styled.div`
  width: 50%;
  height: 700px;
  left: 0px;
  top: 0px;
  text-align: center;
  background-color: #0b0a0a;
  .banner {
    color: white;
    height: 131px;
    left: 29px;
    top: 45px;
    text-shadow: 0px 2px 7px #000000;

    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 84px;
  }
  .movement {
    text-align: center;
    height: 69px;
    left: 48px;
    top: 211px;
    font-size: 36px;
    line-height: 42px;
    color: white;
    text-shadow: 0px 2px 7px #000000;
  }
  .details {
    height: 205px;
    left: 98px;
    top: 311px;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    color: white;
    text-shadow: 0px 2px 7px #000000;
  }
  .container {
    background-color: white;
    padding: 15px 0px;
    width: 40%;
    margin-left: 150px;
    border-radius: 15px;
  }
  .signup {
    padding: 25px 50px;
    background-color: #c4c4c4;
    font-size: 24px;
    border-radius: 12px;
    cursor: pointer;
  }
`;

const WhiteBackground = styled.div`
  width: 50%;
  height: 84px;
  left: 641px;
  top: 28px;
  text-align: center;

  .newbanner {
    font-size: 72px;
    line-height: 84px;
    height: 131px;
  }
  .account {
    font-size: 36px;
    line-height: 42px;
    height: 69px;
  }
  .description {
    height: 172px;
    font-size: 36px;
    line-height: 42px;
  }
  .inputContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 175px;
    width: 50%;
  }
  .email {
    padding: 15px 15px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 13px;
    width: 100%;
  }
  .password {
    padding: 15px 15px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 13px;
    width: 100%;
  }
  .signin {
    padding: 25px 50px;
    background-color: #c4c4c4;
    font-size: 24px;
    border-radius: 12px;
    cursor: pointer;
  }
`;
export default SignUpPage;
