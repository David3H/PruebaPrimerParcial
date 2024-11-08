import './App.css';
import React, { useState } from 'react';
import Card from './Card';

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [submittedData, setSubmittedData] = useState(null); 
  const [nombre, setNombre] = useState('');
  const [errorNombre, setErrorNombre] = useState('');
  const [dni, setDni] = useState('');
  const [errorDni, setErrorDni] = useState('');
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [errorClave, setErrorClave] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre.trim().length < 3 || /^\s/.test(nombre)) {
      setErrorNombre('El nombre no debe tener espacios en blanco y debe ser al menos 3 caracteres');
    } else {
      setErrorNombre('');
    }

    if (dni.trim().length < 6) {
      setErrorDni('El dni debe tener al menos 6 caracteres');
    } else {
      setErrorDni('');
    }

    if (clave.trim().length < 8) {
      setErrorClave('La contraseña debe tener al menos 8 caracteres');
    } else {
      setErrorClave('');
    }
    // Si no hay errores, enviar el formulario
    if (!errorNombre && !errorDni && !errorClave) {
      setSubmittedData({ nombre, dni, usuario });
      setNombre('');
      setDni('');
      setUsuario('')
      setClave('');
    }
  };

  return (
    <>
        <div className="app">
      <h1>Formulario Registro</h1>
      <form className='formulario' onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        {errorNombre && <p style={{ color: 'red' }}>{errorNombre}</p>}
        <label htmlFor="dni">Dni:</label>
        <input type="text" id="dni" name="dni" value={dni} onChange={(e) => setDni(e.target.value)} required />
        {errorDni && <p style={{ color: 'red' }}>{errorDni}</p>}
        <label htmlFor="usuario">Usuario:</label>
        <input type="text" id="usuario" name="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
        <label htmlFor="clave">Contraseña:</label>
        <input type="password" id="clave" name="clave" value={clave} onChange={(e) => setClave(e.target.value)} required />
        {errorClave && <p style={{ color: 'red' }}>{errorClave}</p>}
        <div className='alinearBoton'>
          <button type="submit">Registrar</button>
        </div>
      </form>
    </div>
    <div>
    {submittedData && (
        <Card
          nombre={submittedData.nombre}
          dni={submittedData.dni}
          usuario={submittedData.usuario}
        />
      )}
    </div>
    </>
  );
}

export default App;
