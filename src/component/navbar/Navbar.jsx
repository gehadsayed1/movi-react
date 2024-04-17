import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { shanta } from "../../context/Context";

export default function Navbar() {
  let {getDataInput} = useContext(shanta)
  return (

    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-black ">
        <div className="container">
          <Link className="navbar-brand text-danger fw-bold fs-3" to="#">
            Netflix
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="Home">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-white" to="Tvpage">
                  Tvpage
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-white" to="Movie">
                  Movie
                </Link>
              </li>
           
              <li className="nav-item ">
              <input className="form-control me-2" type="search" onChange={getDataInput} placeholder="Search" aria-label="Search"/>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}



