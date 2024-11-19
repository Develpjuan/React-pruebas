import React, { useEffect } from "react";

function Home() {
    const user = JSON.parse(localStorage.getItem('user')) || { user: { nombre: "Invitado" } };
    console.log(user.user.nombre);

    useEffect(() => {
        localStorage.removeItem('user');
    }, []);

    
    return (
        <div>
            <h1>{ `Bienvenido a la pagina principal ${ user.user.nombre }` }</h1>
        </div>
    );
}

export default Home;