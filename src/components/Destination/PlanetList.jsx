import React, { useState } from "react";
import PlanetListItem from "./PlanetListItem";

import "./Destination.css";

const PlanetList = ({ data }) => {
  const [planet, setPlanet] = useState("Moon");

  return (
    <div className="planet-container">
      {planet === "Moon" && (
        <PlanetListItem planet={data[0]} setPlanet={setPlanet} />
      )}
      {planet === "Mars" && (
        <PlanetListItem planet={data[1]} setPlanet={setPlanet} />
      )}
      {planet === "Europa" && (
        <PlanetListItem planet={data[2]} setPlanet={setPlanet} />
      )}
      {planet === "Titan" && (
        <PlanetListItem planet={data[3]} setPlanet={setPlanet} />
      )}
    </div>
  );
};

export default PlanetList;
