import React from "react";

const SelectButton = ({ name, onClick, compare, btnName }) => {
  return (
    <button className={name === compare.name ? "active" : ""} onClick={onClick}>
      {btnName}
    </button>
  );
};

export default SelectButton;
