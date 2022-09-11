import React from "react";
import Navitem from "./StyledNavitem";
import styled from "styled-components";

const Nav = styled.nav`
height 100%;
  display:grid;
  background:#1a1c22;
  background-color: #282c34;
  background-color: rgba(0, 0, 9, 0.876);
  background transparent;
  boder-radius:50%;
  justify-items center;
`;

const Ul = styled.ul`
  width:85%;
  height 100%;
  display: grid;
  align-content space-evenly;
  gap 3ex;
  transform: perspective(500px) skewY(10deg);
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
