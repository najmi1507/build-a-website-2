import React from "react";

function Header() {
  return (
    <header>
      <div>
        <h1> Weather App </h1>
      </div>
      <nav>
        <a href="/?city=Jakarta"> Jakarta </a>
        <a href="/?city=New%20York"> New York </a>
        <a href="/?city=Tokyo"> Tokyo </a>
        <a href="/?city=Dubai"> Dubai </a>
        <a href="/?city=Kuala%20Lumpur"> Kuala Lumpur </a>
      </nav>
    </header>
  );
}

export default Header;
