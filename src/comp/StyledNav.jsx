import React from "react";
import Navitem from "./Navitem";
import styled from "styled-components";
const Nav = styled.nav`
  display:grid;
  align-content:start;
  background:#1a1c22;
  background-color: #282c34;
  background-color: rgba(0, 0, 9, 0.876);
  background transparent;
  boder-radius:50%;
`;
export default function StyledNav() {
  return (
    <Nav className="nav">
      <ul className="nav-ul">
        <Navitem name='profile'/>
        <Navitem name='messages'/>
        <Navitem name='news'/>
        <Navitem name='music'/>
        <Navitem name='settings'/>
      </ul>
    </Nav>
  );
}
