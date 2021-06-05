import React from "react";

function Footer() {
  var y = new Date().getFullYear();
  return (
    <footer>
      <p>copyright @ {y}</p>
    </footer>
  );
}

export default Footer;
