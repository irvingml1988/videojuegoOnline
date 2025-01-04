import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './AppStyls.css';
import SeccionInicio from "./Inicio";
import SeccionJuegos from "./Juegos";
import SeccionConsolas from "./Consolas";
import SeccionClientes from "./Clientes.js";
import Encabezado from './Encabezado';
import { juegosInventario } from './juegosBD.js'; 
import { consolasInventario } from './consolasBD.js'; 

function App() {
    const [totalArticulos, setTotalArticulos] = useState(0);
    const [videojuegos, setVideojuegos] = useState(juegosInventario);
    const [consolas, setConsolas] = useState(consolasInventario);

    const manejarCarrito = () => {
        if (totalArticulos === 0) {
            alert("El carrito está vacío.");
            return;
        }

        const articulos = videojuegos.concat(consolas).filter(item => item.cantidad && item.cantidad > 0);
        const nombresArticulos = articulos.map(item => `${item.nombre} (Cantidad: ${item.cantidad}, Precio por unidad: $${item.precio}, Subtotal: $${(item.precio * item.cantidad).toFixed(2)})`).join('\n');
        const sumaPrecios = articulos.reduce((sum, item) => sum + (item.precio * item.cantidad), 0).toFixed(2);

        alert(`Total de artículos: ${totalArticulos}\n\n${nombresArticulos}\n\nTotal: $${sumaPrecios}`);
    };

    return (
        <Router>
            <Encabezado totalArticulos={totalArticulos} manejarCarrito={manejarCarrito} />
            <main>
                <Routes>
                    <Route path="/" element={<SeccionInicio />} />
                    <Route path="/inicio" element={<SeccionInicio />} />
                    <Route path="/juegos" element={
                        <SeccionJuegos 
                            setTotalArticulos={setTotalArticulos} 
                            videojuegos={videojuegos} 
                            setVideojuegos={setVideojuegos} 
                            consolas={consolas} 
                            setConsolas={setConsolas} 
                        />} 
                    />
                    <Route path="/consolas" element={
                        <SeccionConsolas 
                            setTotalArticulos={setTotalArticulos} 
                            consolas={consolas} 
                            setConsolas={setConsolas} 
                            videojuegos={videojuegos} 
                            setVideojuegos={setVideojuegos} 
                        />} 
                    />
                    <Route path="/clientes" element={<SeccionClientes />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
