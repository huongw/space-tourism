import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import { GiMusicSpell } from "react-icons/gi";
import logo from "../../assets/shared/logo.svg";

const song = require("./Timecop1983_Memories.mp3");

const Nav = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const handleAudio = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      audioRef.current.play();
    } else {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  };

  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar">
        <ul>
          <li className="nav-link">
            <NavLink exact="true" to={"/"}>
              <span className="bold">00</span> home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to={"/destination"}>
              <span className="bold">01</span> destination
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to={"/crew"}>
              <span className="bold">02</span> crew
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to={"/technology"}>
              <span className="bold">03</span> technology
            </NavLink>
          </li>
        </ul>
        <div className="audio">
          <GiMusicSpell onClick={handleAudio} />
          <audio ref={audioRef} src={song}></audio>
        </div>
      </div>
    </div>
  );
};

export default Nav;
