import React from "react";
import Navitem from "./StyledNavitem";
import styled from "styled-components";

const Nav = styled.nav`
position:relative;
  width:100%;
  height 100%;
  margin-bottom: 2vh;

  display:grid;
  justify-content:center;
  align-items:center;
  background:#1a1c22;
  background-color: #282c34;
  background-color: rgba(0, 0, 9, 0.876);
  background transparent;
  boder-radius:50%;
  // outline: 1px solid crimson;

`;

const Ul = styled.ul`
  position:relative;
  width:80%;
  height 80%;
  display: grid;
  align-content space-evenly;
  gap 3ex;
  transform: perspective(500px) skewY(10deg) translateX(10%);
`;
export default function StyledNav() {
  return (
    <Nav className="nav">
      <Ul className="nav-ul">
        <Navitem name="profile" />
        <Navitem name="messages" />
        <Navitem name="news" />
        <Navitem name="music" />
        <Navitem name="settings" />
      </Ul>
    </Nav>
  );
}
