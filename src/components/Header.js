import React from "react";
import logo from "../logo.png";

export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <img src={logo} className="logo" />
          <h4>Generate and customise meme</h4>
        </nav>
      </header>
    </div>
  );
}
