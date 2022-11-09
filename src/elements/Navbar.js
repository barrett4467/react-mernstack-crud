import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div>
            <Link to="/">React MERN Stack App</Link>
            <Link to="/create">Create Student</Link>
            <Link to="/student-list">Student List</Link>
        </div>
    )
}

export default Navbar;