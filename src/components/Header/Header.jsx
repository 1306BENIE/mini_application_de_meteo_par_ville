import React from "react";
import { Navigation } from "../Navigation";

const Header = ({ NavItems }) => {
  return (
    <>
      <Navigation props={NavItems} />
    </>
  );
};

export default Header;
