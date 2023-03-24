import { technologies } from "../../data/constants";
import SelectButton from "../SelectButton";

const TechListItem = ({ tech, setTech }) => {
  return (
    <div className="tech">
      <div className="content">
        <div className="button-wrapper">
          {technologies.map((t) => {
            return (
              <SelectButton
                key={t.id}
                name={t.name}
                onClick={() => setTech(t.name)}
                compare={tech}
                btnName={t.id}
              />
            );
          })}
        </div>
        <div>
          <h3>the terminology...</h3>
          <h2>{tech.name}</h2>
          <p>{tech.description}</p>
        </div>
      </div>
      <div className="img-wrapper">
        <img src={tech.images.portrait} alt={tech.name} />
      </div>
    </div>
  );
};

export default TechListItem;
