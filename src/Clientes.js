import { useState } from 'react';

function Clientes() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [numeroPedido, setNumeroPedido] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [clientes, setClientes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoCliente = {
      id: clientes.length + 1,
      nombre,
      email,
      telefono,
      direccion,
      numeroPedido,
      observaciones
    };
    setClientes([...clientes, nuevoCliente]);
    setNombre('');
    setEmail('');
    setTelefono('');
    setDireccion('');
    setNumeroPedido('');
    setObservaciones('');
  };

  return (
    <section id="clientes">
      <h2>Devoluciones</h2>
      <p className="justifyText">
        Para solicitar una devolución, es necesario completar este formulario con la información requerida. Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo para proporcionarte los detalles del proceso de devolución.
      </p>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="nombre">Nombre:</label>
              </td>
              <td>
                <input 
                  type="text" 
                  id="nombre" 
                  value={nombre} 
                  onChange={(e) => setNombre(e.target.value)} 
                  style={{ width: '100%' }} 
                  required 
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email:</label>
              </td>
              <td>
                <input 
                  type="email" 
                  id="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  style={{ width: '100%' }} 
                  required 
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="telefono">Teléfono:</label>
              </td>
              <td>
                <input 
                  type="tel" 
                  id="telefono" 
                  value={telefono} 
                  onChange={(e) => setTelefono(e.target.value)} 
                  style={{ width: '100%' }} 
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="direccion">Dirección:</label>
              </td>
              <td>
                <input 
                  type="text" 
                  id="direccion" 
                  value={direccion} 
                  onChange={(e) => setDireccion(e.target.value)} 
                  style={{ width: '100%' }} 
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="numeroPedido">Número de Pedido:</label>
              </td>
              <td>
                <input 
                  type="text" 
                  id="numeroPedido" 
                  value={numeroPedido} 
                  onChange={(e) => setNumeroPedido(e.target.value)} 
                  style={{ width: '100%' }} 
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="observaciones">Observaciones:</label>
              </td>
              <td>
                <textarea 
                  id="observaciones" 
                  value={observaciones} 
                  onChange={(e) => setObservaciones(e.target.value)} 
                  style={{ width: '100%' }} 
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: 'center' }}>
                <button type="submit">Enviar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <h3>Lista de Clientes</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Número de Pedido</th>
            <th>Observaciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.email}</td>
              <td>{cliente.telefono}</td>
              <td>{cliente.direccion}</td>
              <td>{cliente.numeroPedido}</td>
              <td>{cliente.observaciones}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <h2>Comentarios</h2>      
    </section>
  );
}

export default Clientes;
