import { Link } from "react-router-dom";

import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <Link className="logo" to="/">
                    <h2>🎬 Movie Explorer</h2>
                </Link>
                <Link to="/">Home</Link>
            </nav>
        </div>
    )
}

export default Navbar
