import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <h1>Stuff and More!</h1>
        <div id="navbar">
            <Link to="./">
                Home
            </Link>

            <span></span>
            <span></span>

            <NavLink to="/auth/login">Login</NavLink>
        </div>
    </nav>
  );
};

export default NavBar;