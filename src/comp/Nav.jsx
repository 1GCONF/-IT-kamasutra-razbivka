import React from "react";
import Navitem from "./Navitem";
export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-ul">
        <Navitem name='profile'/>
        <Navitem name='messages'/>
        <Navitem name='news'/>
        <Navitem name='music'/>
        <Navitem name='settings'/>
      </ul>
    </nav>
  );
}
