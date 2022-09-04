import React from "react";

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="user-ul">
        <li className="user-li">
          <a className="user-a" href="./">
            profile
          </a>
        </li>
        <li className="user-li">
          <a className="user-a" href="./">
            messages
          </a>
        </li>
        <li className="user-li">
          <a className="user-a" href="./">
            news
          </a>
        </li>
        <li className="user-li">
          <a className="user-a" href="./">
            music
          </a>
        </li>
        <li className="user-li">
          <a className="user-a" href="./">
            settings
          </a>
        </li>
      </ul>
    </nav>
  );
}
