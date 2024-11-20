import React from "react";
import hm from "../../assets/hm-logo.png"; // Adjust the path based on your directory structure

const HMIcon = () => {
  return (
    <img
      src={hm}
      alt="H&M-logo Icon"
      style={{ width: "48px", height: "64px" }} // You can adjust the size as needed
    />
  );
};

export default HMIcon;
