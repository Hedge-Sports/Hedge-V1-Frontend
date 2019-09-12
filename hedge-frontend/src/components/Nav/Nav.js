import "./nav.css";
import React from "react";

export default function Nav() {
  return (
    <nav>
      <div className="right-side">
        <div className="logo">
          <img src="/images/Hedge-Logo.svg" />
        </div>
        <ul>
          <li>
            <a href="#">Daily Fantasy</a>
          </li>
          <li>
            <a href="#">Sports Book</a>
          </li>
          <li>
            <a href="#">Poker</a>
          </li>
        </ul>
      </div>
      <div className="left-side">
        <div className="notifications">
          <a>
            <i class="far fa-bell"></i>
          </a>
        </div>
        <div className="user-account">
          <a className="user-account-icon">
            <i class="far fa-user"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}
