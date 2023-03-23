import "./DesPage.css";
import { data } from "../../data/data";
import PlanetList from "../../components/Destination/PlanetList";

const DesPage = () => {
  return (
    <div className="despage">
      <h1>
        <span>01</span> pick your destination
      </h1>
      <PlanetList data={data.destinations} />
    </div>
  );
};

export default DesPage;
