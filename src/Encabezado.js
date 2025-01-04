import React from 'react';
import { Link } from 'react-router-dom';

function Encabezado({ totalArticulos, manejarCarrito }) {
    return (
        <header>
            <div className="header-content">
                <h1>Bienvenido a Kratos's Games</h1>
                <nav>
                    <ul>
                        <li><Link to="inicio">Inicio test</Link></li> 
                        <li><Link to="juegos">Juegos</Link></li> 
                        <li><Link to="consolas">Consolas</Link></li> 
                        <li><Link to="clientes">Atención a Clientes</Link></li>
                    </ul>
                </nav>
                <a href="#carrito" className="carrito-compras" onClick={manejarCarrito}>
                    <i className="fas fa-shopping-cart"></i>
                    <span className="contador-carrito">{totalArticulos}</span>
                </a>
            </div>
        </header>
    );
}

export default Encabezado;
