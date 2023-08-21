import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>
      <Link className='header__link header__link_type_main' to='/main'>
        <h1>Pokemon of the Day</h1>
      </Link>
    </div>
  );
}

export default Header;
