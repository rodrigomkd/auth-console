import React from 'react';
import { NavLink } from "react-router-dom";

const navStyle = {
    color: '#00d2d3'
};

const NavBar = () => (
    <div class="sidebar-header">
        <nav className="navbar navbar-dark bg-dark">
            <h3 style={navStyle}>Home</h3>
            <NavLink className="text-white" to="/logout">Logout</NavLink>
        </nav>
    </div>
);

export { NavBar };