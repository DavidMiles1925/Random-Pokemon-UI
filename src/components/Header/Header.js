import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className='header'>
      <Link className='header__link header__link_type_main' to='/main'>
        <h1>Random Pokemon Generator</h1>
      </Link>
    </div>
  );
}

export default Header;
