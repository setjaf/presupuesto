import React  from 'react';
import {Link} from 'react-router-dom';

export default function Inicio() {
  return(
    <section>
      <h1>Mis Finanzas</h1>

      <Link to='/nuevoUsuario'>Registrarme</Link>
      <Link to='/login'>Iniciar sesión</Link>

    </section>
  );
}
