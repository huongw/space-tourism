import { motion } from "framer-motion";

const CrewListItem = ({ member }) => {
  return (
    <div className="crew">
      <div className="content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>{member.role}</h3>
          <h2>{member.name}</h2>
          <p>{member.bio}</p>
        </motion.div>
      </div>
      <motion.div
        className="img-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={member.images.png} alt="" />
      </motion.div>
    </div>
  );
};

export default CrewListItem;
