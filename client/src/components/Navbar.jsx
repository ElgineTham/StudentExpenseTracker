import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link className="navbar-brand" to="/edit">
                Expense Tracker
            </Link>
            <ul className="navbar-nav me-auto">
                <Link className="nav-link" to="/">
                    Home
                </Link>
                <Link className="nav-link" to="/expenses">
                    Expenses
                </Link>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;
