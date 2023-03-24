import { Link } from "react-router-dom";
import "./HomePage.css";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="homepage main">
      <motion.div
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
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
        </div>
        <div className="explore">
          <Link to={"/destination"}>Explore</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
