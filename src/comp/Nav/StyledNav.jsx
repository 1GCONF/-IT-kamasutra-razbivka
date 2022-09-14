import React from "react";
import Navitem from "./StyledNavitem";
import styled from "styled-components";

const Nav = styled.nav`
position:relative;
  width:100%;
  height:100%;
  padding:3ex 3ex 0 3ex;
  background:#1a1c22;
  background-color: #282c34;
  background-color: rgba(0, 0, 9, 0.876);
  background transparent;
  display:grid;
`;

const Ul = styled.ul`
  width:100%;
  height 100%;
  display: grid;
  grid-template-rows:repeat(auto-fill,minmax(100px,.3fr));
  gap: 40px;
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
