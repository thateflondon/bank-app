import React from "react";
import { Nav, NavbarContainer, NavLogo } from "./NavbarElements";

function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo href>ECO</NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
