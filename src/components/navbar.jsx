import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header>
            <nav>
                <Link to="/Home">Inicio</Link>
                <Link to="/Form">Formulario</Link>
            </nav>
        </header>
        
    );
}

export default Navbar;