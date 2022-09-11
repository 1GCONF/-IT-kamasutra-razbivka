import React from "react";
import styled from "styled-components";
const NavItem = styled.li`
  width:60%;
  transform: perspective(50px) rotateY(10deg);
  box-shadow: 0 4px 0 #121212c5;
  text-align: center;
  padding: 1ch;
  margin: 2.5ex;
  border: 1px solid rgba(0, 0, 0, 0.352);
  border-radius: 50%;
  cursor: pointer;
  
  justify-self end;
  &:hover,
  &:focus {
    transform: perspective(50px) rotateY(10deg) translate(-0, 4px);
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
`;
const A = styled.a`
  padding: 3ex;
  text-transform: capitalize;
  color: rgb(176, 156, 203);
  font-weight: 600;
  font-size: 0.9rem;
  text-shadow: 2px 3px 7px #00295c;
`;
export default function Navitem(props) {
  return (
    <NavItem className="nav-item">
      <A className="user-a" href={"/" + props.name}>
        {props.name}
      </A>
    </NavItem>
  );
}
