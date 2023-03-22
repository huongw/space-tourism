import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">logo</div>
      <div className="navbar">
        <ul>
          <li className="nav-link">
            <NavLink exact to={"/"}>
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
      </div>
    </div>
  );
};

export default Nav;
