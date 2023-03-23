import { useState } from "react";
import CrewListItem from "./CrewListItem";
import "./Crew.css";

const CrewList = ({ data }) => {
  const [member, setMember] = useState("Douglas Hurley");

  return (
    <div>
      
      {member === "Douglas Hurley" && <CrewListItem member={data[0]} setMember={setMember}/>}
      {member === "Mark Shuttleworth" && <CrewListItem member={data[1]} setMember={setMember}/>}
      {member === "Victor Glover" && <CrewListItem member={data[2]} setMember={setMember}/>}
      {member === "Anousheh Ansari" && <CrewListItem member={data[3]} setMember={setMember}/>}
    </div>
  );
};

export default CrewList;
