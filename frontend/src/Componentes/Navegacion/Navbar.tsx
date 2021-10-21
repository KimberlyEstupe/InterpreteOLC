import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  //Inicio Navegacion
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Interprete
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Analizador
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/AcercaDe">
                Acerca De
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Gramatica">
                Gramatica
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  //Fin Navegacion
};

export default Navbar;
