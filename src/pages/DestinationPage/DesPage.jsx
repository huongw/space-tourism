import "./DesPage.css";
import { data } from "../../data/data";
import PlanetList from "../../components/Destination/PlanetList";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const DesPage = () => {
  return (
    <div className="despage main">
      <div className="flex-wrapper">
        <h1>
          <span className="bold">01</span> pick your destination
        </h1>
        <Link className="next" to={"/crew"}>
          pick your crew <RiArrowRightSLine />
        </Link>
      </div>
      <PlanetList data={data.destinations} />
    </div>
  );
};

export default DesPage;
