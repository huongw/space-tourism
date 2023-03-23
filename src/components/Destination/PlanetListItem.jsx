import { buttons } from "../../data/constants";
import SelectButton from "./SelectButton";

const PlanetListItem = ({ planet, setPlanet }) => {
  return (
    <>
      <div className="img-wrapper">
        <img src={planet.images.png} alt={planet.name} />
      </div>
      <div className="content">
        <div className="button-wrapper">
          {buttons.map((button) => {
            return (
              <SelectButton
                key={button.id}
                name={button.name}
                onClick={() => setPlanet(button.name)}
                planet={planet}
              />
            );
          })}
        </div>

        <h2 className="planet-name">{planet.name}</h2>
        <p className="planet-desc">{planet.description}</p>
        <div>
          <div>
            <p>{planet.distance}</p>
          </div>
          <div>
            <p>{planet.travel}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetListItem;
