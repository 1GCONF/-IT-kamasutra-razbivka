import React from "react";

export default function Navitem(props) {
  return (
    <li className="nav-item">
      <a className="user-a" href="./">
         {props.name}
      </a>
    </li>
  );
}
