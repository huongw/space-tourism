import { members } from "../../data/constants";
import SelectButton from "../SelectButton";

const CrewListItem = ({ member, setMember }) => {
  return (
    <div className="crew">
      <div className="content">
        <h3>{member.role}</h3>
        <h2>{member.name}</h2>
        <p>{member.bio}</p>
        <div className="button-wrapper">
          {members.map((m) => {
            return (
              <SelectButton
                key={m.id}
                name={m.name}
                onClick={() => setMember(m.name)}
                compare={member}
              />
            );
          })}
        </div>
      </div>
      <div className="img-wrapper">
        <img src={member.images.png} alt="" />
      </div>
    </div>
  );
};

export default CrewListItem;
