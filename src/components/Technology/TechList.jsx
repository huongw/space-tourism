import React, { useState } from "react";
import TechListItem from "./TechListItem";
import "./Tech.css";

const TechList = ({ data }) => {
  const [tech, setTech] = useState("Launch vehicle");

  return (
    <div>
      {tech === "Launch vehicle" && (
        <TechListItem tech={data[0]} setTech={setTech} />
      )}
      {tech === "Spaceport" && (
        <TechListItem tech={data[1]} setTech={setTech} />
      )}
      {tech === "Space capsule" && (
        <TechListItem tech={data[2]} setTech={setTech} />
      )}
    </div>
  );
};

export default TechList;
