import React from "react";

const SelectButton = ({ name, onClick, compare }) => {
  return (
    <button className={name === compare.name ? "active" : ""} onClick={onClick}>
      {name}
    </button>
  );
};

export default SelectButton;
