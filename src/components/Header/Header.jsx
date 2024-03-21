import './Header.css';
import { Link, NavLink } from "react-router-dom";

const Header = () => {

  return (
    <nav className="text-2xl flex gap-6">
        <Link to={"/"}>Home</Link>
        {/* <Link to={"/users"}>Users</Link> */}

        <NavLink to={"/users"}>Users</NavLink>
        <NavLink to={"/about"}>About</NavLink>

        {/* <Link to={"/about"}>About</Link> */}
        <Link to={"/contact"}>Contact Us</Link>
    </nav>
  );
};

export default Header;
