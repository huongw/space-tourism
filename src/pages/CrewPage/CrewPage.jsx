import "./CrewPage.css";
import { data } from "../../data/data";
import CrewList from "../../components/Crew/CrewList";

const CrewPage = () => {
  return (
    <div className="crewpage">
      <h1>
        <span className="bold">02</span> meet your crew
      </h1>
      <CrewList data={data.crew} />
    </div>
  );
};

export default CrewPage;
