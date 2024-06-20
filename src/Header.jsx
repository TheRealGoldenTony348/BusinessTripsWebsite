import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header-container">
      <nav>
        <ul>
          <li>
            <img width="150px" alt="Business Trips" src="/images/logo.png" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
