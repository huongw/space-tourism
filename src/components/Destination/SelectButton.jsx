import React from "react";

const SelectButton = ({ name, onClick, planet }) => {
  return (
    <button className={name === planet.name ? "active" : ""} onClick={onClick}>
      {name}
    </button>
  );
};

export default SelectButton;
