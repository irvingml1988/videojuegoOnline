import { useEffect, useState } from 'react';
import useFiltro from './useFiltro';

function Consolas({ setTotalArticulos, consolas, setConsolas, videojuegos }) {
    const { busqueda, setBusqueda, itemsFiltrados: consolasFiltradas } = useFiltro(consolas, 'nombre');
    const [consolaSeleccionada, setConsolaSeleccionada] = useState(null);

    useEffect(() => {
        actualizarTotal(videojuegos, consolas);
    }, [videojuegos, consolas]);

    const incrementarCantidad = (codigo) => {
        const nuevasConsolas = consolas.map(consola =>
            consola.codigo === codigo ? { ...consola, cantidad: (consola.cantidad || 0) + 1 } : consola
        );
        setConsolas(nuevasConsolas);
    };

    const decrementarCantidad = (codigo) => {
        const nuevasConsolas = consolas.map(consola =>
            consola.codigo === codigo ? { ...consola, cantidad: (consola.cantidad || 0) > 0 ? consola.cantidad - 1 : 0 } : consola
        );
        setConsolas(nuevasConsolas);
    };

    const actualizarTotal = (videojuegos, nuevasConsolas) => {
        const totalJuegos = Array.isArray(videojuegos) ? videojuegos.reduce((sum, juego) => sum + (juego.cantidad || 0), 0) : 0;
        const totalConsolas = Array.isArray(nuevasConsolas) ? nuevasConsolas.reduce((sum, consola) => sum + (consola.cantidad || 0), 0) : 0;
        setTotalArticulos(totalJuegos + totalConsolas);
    };

    const mostrarDetalle = (consola) => {
        setConsolaSeleccionada(consola);
    };

    return (
        <section id="consolas">
            <h2>Consolas</h2>
            <input 
                type="text" 
                placeholder="Buscar consolas..." 
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />
            <table>
                <caption>Lista de consolas</caption>
                <thead>
                    <tr>
                        <th>Consola</th>
                        <th>Almacenamiento</th>
                        <th>Color</th>
                        <th>Precio</th>
                        <th>Ver Detalle</th>
                        <th>Comprar</th>
                    </tr>
                </thead>
                <tbody>
                    {consolasFiltradas.map((item) => (
                        <tr key={item.codigo}>
                            <td>{item.nombre}</td>
                            <td>{item.almacenamiento}</td>
                            <td>{item.color}</td>
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
            {consolaSeleccionada && (
                <div className="detalle-juego">
                    <h3>Detalle de la Consola</h3>
                    {consolaSeleccionada.imagen && (
                        <img src={require(`./images/${consolaSeleccionada.imagen}`)} alt={consolaSeleccionada.nombre} />
                    )}
                    <p><strong>Consola:</strong> {consolaSeleccionada.nombre}</p>
                    <p><strong>Descripción:</strong> {consolaSeleccionada.descripcion}</p>
                    <p><strong>Almacenamiento:</strong> {consolaSeleccionada.almacenamiento}</p>
                    <p><strong>Color:</strong> {consolaSeleccionada.color}</p>
                    <p><strong>Precio:</strong> {consolaSeleccionada.precio}</p>
                    <p><strong>Código:</strong> {consolaSeleccionada.codigo}</p>
                 </div>
            )}
        </section>
    );
}

export default Consolas;
