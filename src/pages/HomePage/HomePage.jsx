import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="hero">
        <div>
          <div className="hero-title">
            <h1>So, you want to travel to</h1>
            <h2 className="bold">Space</h2>
          </div>
          <p className="hero-txt">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explore">Explore</div>
      </div>
    </div>
  );
};

export default HomePage;
