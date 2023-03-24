import { planets } from "../../data/constants";
import SelectButton from "../SelectButton";

const PlanetListItem = ({ planet, setPlanet }) => {
  return (
    <>
      <div className="img-wrapper">
        <img src={planet.images.png} alt={planet.name} />
      </div>
      <div className="content">
        <div className="button-wrapper">
          {planets.map((p) => {
            return (
              <SelectButton
                key={p.id}
                name={p.name}
                onClick={() => setPlanet(p.name)}
                compare={planet}
                btnName={p.name}
              />
            );
          })}
        </div>

        <h2 className="planet-name">{planet.name}</h2>
        <p className="planet-desc">{planet.description}</p>

        <hr />

        <div className="dist-travel">
          <div>
            <h3>avg. distance</h3>
            <p>{planet.distance}</p>
          </div>
          <div>
            <h3>est. travel time</h3>
            <p>{planet.travel}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetListItem;
