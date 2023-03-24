import TechList from "../../components/Technology/TechList";
import { data } from "../../data/data";
import "./TechPage.css";

const TechPage = () => {
  return (
    <div className="techpage main">
      <h1>
        <span className="bold">03</span> space launch 101
      </h1>
      <TechList data={data.technology} />
    </div>
  );
};

export default TechPage;
