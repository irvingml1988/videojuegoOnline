import React, { useState, useEffect } from 'react';
import useFiltro from './useFiltro';

function Juegos({ setTotalArticulos, videojuegos, setVideojuegos, consolas }) {
    const { busqueda, setBusqueda, itemsFiltrados: juegosFiltrados } = useFiltro(videojuegos, 'nombre');
    const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);

    useEffect(() => {
        actualizarTotal(videojuegos, consolas);
    }, [videojuegos, consolas]);

    const incrementarCantidad = (codigo) => {
        const nuevosVideojuegos = videojuegos.map(juego =>
            juego.codigo === codigo ? { ...juego, cantidad: (juego.cantidad || 0) + 1 } : juego
        );
        setVideojuegos(nuevosVideojuegos);
    };

    const decrementarCantidad = (codigo) => {
        const nuevosVideojuegos = videojuegos.map(juego =>
            juego.codigo === codigo ? { ...juego, cantidad: (juego.cantidad || 0) > 0 ? juego.cantidad - 1 : 0 } : juego
        );
        setVideojuegos(nuevosVideojuegos);
    };

    const actualizarTotal = (nuevosVideojuegos, consolas) => {
        const totalJuegos = Array.isArray(nuevosVideojuegos) ? nuevosVideojuegos.reduce((sum, juego) => sum + (juego.cantidad || 0), 0) : 0;
        const totalConsolas = Array.isArray(consolas) ? consolas.reduce((sum, consola) => sum + (consola.cantidad || 0), 0) : 0;
        setTotalArticulos(totalJuegos + totalConsolas);
    };

    const handleChange = (e) => {
        setBusqueda(e.target.value);
    };

    const mostrarDetalle = (juego) => {
        setJuegoSeleccionado(juego);
    };

    return (
        <section id="juegos">
            <h2>Juegos</h2>
            <input 
                type="text" 
                placeholder="Buscar juegos..." 
                value={busqueda}
                onChange={handleChange}
            />
            <table>
                <caption>Lista de videojuegos</caption>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Género</th>
                        <th>Precio</th>
                        <th>Ver Detalle</th>
                        <th>Comprar</th>
                    </tr>
                </thead>
                <tbody>
                    {juegosFiltrados.map((item) => (
                        <tr key={item.codigo}>
                            <td>{item.nombre}</td>
                            <td>{item.genero}</td>
                            <td>{item.precio}</td>
                            <td>
                                <button onClick={() => mostrarDetalle(item)}>Ver</button>
                            </td>
                            <td>
                                <button onClick={() => decrementarCantidad(item.codigo)}>-</button>
                                <span>{item.cantidad || 0}</span>
                                <button onClick={() => incrementarCantidad(item.codigo)}>+</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {juegoSeleccionado && (
                <div className="detalle-juego">
                    <h3>Detalle del Juego</h3>
                    {juegoSeleccionado.imagen && (
                        <img src={require(`./images/${juegoSeleccionado.imagen}`)} alt={juegoSeleccionado.nombre} />
                    )}
                    <p><strong>Nombre:</strong> {juegoSeleccionado.nombre}</p>
                    <p><strong>Consola:</strong> {juegoSeleccionado.consola}</p>
                    <p><strong>Género:</strong> {juegoSeleccionado.genero}</p>
                    <p><strong>Precio:</strong> {juegoSeleccionado.precio}</p>
                    <p><strong>Código:</strong> {juegoSeleccionado.codigo}</p>
                </div>
            )}
        </section>
    );
}

export default Juegos;
