
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="text-2xl flex gap-6">
        <Link to={"/"}>Home</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact Us</Link>
    </nav>
  );
};

export default Header;
