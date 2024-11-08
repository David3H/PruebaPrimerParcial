//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import './Card.css'
import React from 'react';

function Card({ nombre, dni, usuario }) {
  return (
    <div className="card">
      <h2>Datos del usuario registrados</h2>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>DNI:</strong> {dni}</p>
      <p><strong>Usuario:</strong> {usuario}</p>
    </div>
  );
}

export default Card;
