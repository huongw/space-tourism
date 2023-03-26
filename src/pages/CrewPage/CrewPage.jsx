import "./CrewPage.css";
import { data } from "../../data/data";
import CrewList from "../../components/Crew/CrewList";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const CrewPage = () => {
  return (
    <div className="crewpage main">
      <div className="flex-wrapper">
        <h1>
          <span className="bold">02</span> meet your crew
        </h1>
        <Link className="next" to={"/technology"}>
          space launch 101 <RiArrowRightSLine />
        </Link>
      </div>

      <CrewList data={data.crew} />
    </div>
  );
};

export default CrewPage;
