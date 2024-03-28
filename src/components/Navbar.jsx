import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="navbar-content">
            <Link to={"/pokemon"}>Pokedex</Link>
            <input type="text" placeholder="Search for pokemon" />
          </div>
        </div>
      </div>
    </>
  );
}
