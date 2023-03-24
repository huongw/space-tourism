import { members } from "../../data/constants";
import SelectButton from "../SelectButton";
import { motion } from "framer-motion";

const CrewListItem = ({ member, setMember }) => {
  return (
    <div className="crew">
      <div className="content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3>{member.role}</h3>
          <h2>{member.name}</h2>
          <p>{member.bio}</p>
        </motion.div>
        <div className="button-wrapper">
          {members.map((m) => {
            return (
              <SelectButton
                key={m.id}
                name={m.name}
                onClick={() => setMember(m.name)}
                compare={member}
                btnName={""}
              />
            );
          })}
        </div>
      </div>
      <motion.div
        className="img-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <img src={member.images.png} alt="" />
      </motion.div>
    </div>
  );
};

export default CrewListItem;
