import React from "react";
import styled from "styled-components";
import { instagram } from "react-icons-kit/feather/instagram";
import { twitter } from "react-icons-kit/feather/twitter";
import { facebook } from "react-icons-kit/feather/facebook";
import { Icon } from "react-icons-kit";
import { Link } from "react-icons-kit";

function Footer() {
  return (
    <>
      <Container>
        <h4>Follow US:</h4>
        <Icon icon={instagram} size={32}></Icon>
        <Icon icon={twitter} size={32}></Icon>
        <Icon icon={facebook} size={32}></Icon>
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Footer;
