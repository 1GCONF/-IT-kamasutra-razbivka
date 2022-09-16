import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./Nav.css";
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
export default function Navitem(props) {
  return (
    <NavItem className="nav-item">
      <NavLink className="nav-item-a" to={"/" + props.name}>
        {props.name}
      </NavLink>
    </NavItem>
  );
}
