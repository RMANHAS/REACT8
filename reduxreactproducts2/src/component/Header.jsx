import React from "react";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

export default function Header() {
 const items= useSelector(state=>state.cart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Redux
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <NavLink className="nav-link active" aria-current="page" to="/cart">
                  cart
                </NavLink>
              <li className="nav-item">
              
                  <button
                    type="button"
                    className="btn btn-primary position-relative"
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                     {items.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
               
              </li>
              <li className="nav-item dropdown"></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
