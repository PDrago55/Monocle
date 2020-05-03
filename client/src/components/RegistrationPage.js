import React, { useState } from "react";
import styled from "styled-components";

function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");
  const [passwordTwo, setPassordTwo] = useState("");
  const [name, setName] = useState("");
  const [leaning, setLeaning] = useState("");

  return (
    <Bg>
      <RegisterTitle>Registration</RegisterTitle>
      <Container>
        <div>Hello!</div>
        <form>
          <div className="holder">
            <input
              type="text"
              className="name"
              value={name}
              placeholder="Name"
              onChange={(ev) => setName(ev.target.value)}
            ></input>
            <input
              type="text"
              className="email"
              value={email}
              placeholder="email"
              onChange={(ev) => setEmail(ev.target.value)}
            ></input>
            <input
              type="text"
              className="password"
              value={password}
              placeholder="password"
              onChange={(ev) => setPassord(ev.target.vale)}
            ></input>
            <input
              type="text"
              className="password2"
              value={passwordTwo}
              placeholder="password"
              onChange={(ev) => setPassordTwo(ev.target.value)}
            ></input>
            <input
              type="text"
              className="leaning"
              value={leaning}
              placeholder="Political Leaning"
              onChange={(ev) => setLeaning(ev.target.value)}
            ></input>
            <button className="button">Register</button>
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
  top: 55px;
  font-size: 50px;
`;

const Container = styled.div`
  position: relative;
  width: 400px;
  height: 500px;
  background-color: #ffffff78;
  top: 100px;
  margin-left: 515px;
  .holder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .name {
    padding: 15px 15px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 15px;
    width: 50%;
  }
  .email {
    padding: 15px 15px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 15px;
    width: 50%;
  }
  .password {
    padding: 15px 15px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 15px;
    width: 50%;
  }
  .password2 {
    padding: 15px 15px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 15px;
    width: 50%;
  }
  .leaning {
    padding: 15px 15px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 15px;
    width: 50%;
  }
  .button {
    padding: 25px 50px;
    background-color: #c4c4c4;
    font-size: 24px;
    border-radius: 12px;
    cursor: pointer;
  }
`;
export default RegistrationPage;
