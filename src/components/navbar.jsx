import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/Home">Inicio</Link>
            <Link to="/form">Formulario</Link>
        </nav>
    );
}

export default Navbar;