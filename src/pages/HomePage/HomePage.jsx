import { Link } from "react-router-dom";
import "./HomePage.css";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="homepage main">
      <div className="hero">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-title">
            <h5>So, you want to travel to</h5>
            <h2 className="bold">Space</h2>
          </div>
          <p className="hero-txt">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </motion.div>
        <motion.div
          className="explore"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <Link to={"/destination"}>Explore</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
