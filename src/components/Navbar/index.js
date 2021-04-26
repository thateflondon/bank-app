import React from "react";
import { Nav, NavbarContainer, NavLogo } from "./NavbarElements";

function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">ECO</NavLogo>
          <h1>test</h1>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
