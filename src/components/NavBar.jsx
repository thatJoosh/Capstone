import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <h1>Stuff and More!</h1>
        <div id="navbar">
            <Link to="./">Home</Link>
        </div>
    </nav>
  );
};

export default NavBar;