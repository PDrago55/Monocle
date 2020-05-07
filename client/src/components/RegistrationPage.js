import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [passwordOne, setPassword] = useState("");
  const [passwordTwo, setPassordTwo] = useState("");
  const [name, setName] = useState("");
  const [leaning, setLeaning] = useState("");
  const history = useHistory();
  return (
    <Bg>
      <RegisterTitle>Registration</RegisterTitle>
      <Container>
        <form>
          <div className="holder">
            <div className="space">What's your Name?</div>
            <input
              type="text"
              className="name"
              value={name}
              placeholder="Name"
              onChange={(ev) => setName(ev.target.value)}
            ></input>
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
              value={passwordOne}
              placeholder="password"
              onChange={(ev) => setPassword(ev.target.value)}
            ></input>
            <div>Password</div>
            <input
              type="text"
              className="password2"
              value={passwordTwo}
              placeholder="password"
              onChange={(ev) => setPassordTwo(ev.target.value)}
            ></input>
            <div>What's your Political Leaning?</div>
            <input
              type="text"
              className="leaning"
              value={leaning}
              placeholder="Political Leaning"
              onChange={(ev) => setLeaning(ev.target.value)}
            ></input>
            <button
              className="button"
              type="submit"
              form="signup-form"
              onClick={(ev) => {
                ev.preventDefault();
                fetch("/register", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name: name,
                    email: email,
                    password: passwordOne,
                    password2: passwordTwo,
                    politicalLeaning: leaning,
                  }),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                    history.push("/");
                  });
              }}
            >
              Register
            </button>
          </div>
        </form>
      </Container>
    </Bg>
  );
}

const Bg = styled.div`
  background-image: url("/assets/register.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  left: 0px;
  top: 0px;
`;

const RegisterTitle = styled.div`
  position: relative;
  color: white;
  text-align: center;
  top: 25px;
  font-size: 50px;
`;

const Container = styled.div`
  position: relative;
  width: 400px;
  height: 600px;
  background-color: #ffffff78;
  top: 50px;
  border-radius: 7px;
  margin-left: 515px;
  .holder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .space {
    margin-top: 10px;
  }
  .name {
    padding: 15px 15px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 15px;
    border-radius: 7px;
    width: 50%;
  }
  .email {
    padding: 15px 15px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 15px;
    border-radius: 7px;
    width: 50%;
  }
  .password {
    padding: 15px 15px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 15px;
    border-radius: 7px;
    width: 50%;
  }
  .password2 {
    padding: 15px 15px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 15px;
    border-radius: 7px;
    width: 50%;
  }
  .leaning {
    padding: 15px 15px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 15px;
    border-radius: 7px;
    width: 50%;
  }
  .button {
    padding: 25px 50px;
    background-color: #c4c4c4;
    font-size: 24px;
    border-radius: 12px;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
`;
export default RegistrationPage;
