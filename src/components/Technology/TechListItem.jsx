import { technologies } from "../../data/constants";
import SelectButton from "../SelectButton";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3>the terminology...</h3>
          <h2>{tech.name}</h2>
          <p>{tech.description}</p>
        </motion.div>
      </div>
      <motion.div
        className="img-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <img src={tech.images.portrait} alt={tech.name} />
      </motion.div>
    </div>
  );
};

export default TechListItem;
