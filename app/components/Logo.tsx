import React from 'react';
import name from "~/Image/name.png";
import yourImage from "~/images/yourImage.png";

const Logo = () => (
  <img
    src={name}
    alt="Logo"
    className="absolute top-0 right-0 mt-4 mr-4 w-12 h-12"
  />
);

export default Logo;
