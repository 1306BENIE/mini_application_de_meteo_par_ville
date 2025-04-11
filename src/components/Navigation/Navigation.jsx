import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = ({ props }) => {
  return (
    <>
      <nav>
        <ul>
          {props.map((item, index) => (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
