import React from "react";
import Navitem from "./StyledNavitem";
import styled from "styled-components";
import { SectionNav } from "../StyledSectionNav";

const Nav = styled.nav`
  display:grid;
  align-content:start;
  background:#1a1c22;
  background-color: #282c34;
  background-color: rgba(0, 0, 9, 0.876);
  background transparent;
  boder-radius:50%;
`;

const Ul = styled.ul`
  display: grid;
  gap 50px;
  justify-content: center;
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
