import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./Nav.css";
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
const NavItem = styled.li`
  transition: .3s ease;
  width:calc(100% - 3ex);
  height:75%;
  transform: perspective(50px) rotateX(-15deg) skewX(-15deg);
  box-shadow: -7.5px 8px 0 #121212c5;
  border: 1px solid rgba(0, 0, 0, 0.352);
  border-radius: 0 300px 0 0 ;
  cursor: pointer;
  justify-self: start;
  &:hover,
  &:focus {
    transform: perspective(50px) rotateX(-15deg) skewX(-15deg) translate(-2.5px,4px);
    box-shadow: 0 0 0 rgba(0, 0, 1, 0);
  }
  /* ff 3.6+ */
  background: -moz-linear-gradient(
    90deg,
    rgba(190, 10, 25, 0.85) 0%,
    rgba(100, 0, 0, 0.96) 100%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-linear-gradient(
    90deg,
    rgba(190, 10, 25, 0.85) 0%,
    rgba(100, 0, 0, 0.96) 100%
  );

  /* opera 11.10+ */
  background: -o-linear-gradient(
    90deg,
    rgba(190, 10, 25, 0.85) 0%,
    rgba(100, 0, 0, 0.96) 100%
  );

  /* ie 6-9 */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#640000', endColorstr='#BE0A19', GradientType=0 );

  /* ie 10+ */
  background: -ms-linear-gradient(
    90deg,
    rgba(190, 10, 25, 0.85) 0%,
    rgba(100, 0, 0, 0.96) 100%
  );

  /* global 94%+ browsers support */
  background: linear-gradient(
    90deg,
    rgba(190, 10, 25, 0.85) 0%,
    rgba(100, 0, 0, 0.96) 100%
  );
  text-align: center;
  display:grid;
  // grid-template-rows:repeat(auto-fit,minmax(100px,1fr));
 `;
export default function StyledNav() {
  return (
    <Nav className="nav">
      <Ul className="nav-ul">
        <NavItem><NavLink className="nav-item-a" to={"/profile"}>Profile</NavLink></NavItem>
        <NavItem><NavLink className="nav-item-a" to={"/dialogs"}>Dialogs</NavLink></NavItem>
        <NavItem><NavLink className="nav-item-a" to={"/news"}>News</NavLink></NavItem>
        <NavItem><NavLink className="nav-item-a" to={"/music"}>Music</NavLink></NavItem>
        <NavItem><NavLink className="nav-item-a" to={"/settings"}>Settings</NavLink></NavItem>
      </Ul>
    </Nav>
  );
}
