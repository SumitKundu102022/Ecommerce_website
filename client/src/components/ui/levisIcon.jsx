import React from "react";
import levisLogo from "../../assets/levi_s-image.png"; // Adjust the path based on your directory structure

const LevisIcon = () => {
  return (
    <img
      src={levisLogo}
      alt="Levi's Icon"
      style={{ width: "50px", height: "64px" }} // You can adjust the size as needed
    />
  );
};

export default LevisIcon;
