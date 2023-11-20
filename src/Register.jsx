// Register.jsx
import React, { useState } from 'react';
import CampoFormulario from './Componentes/Campos.jsx';
import BotonPersonalizado from './Componentes/Botones.jsx';
import { Link } from 'react-router-dom';
import cat from "./assets/cat.png";

function Register() {
  // Estado local para almacenar los datos del formulario
  const [datosRegistro, setDatosRegistro] = useState({
    nombre: '',
    apellido: '',
    fechaNacimiento: new Date(),
    usuario: '',
    contraseña: '',
    correo: ''
  });

  const handleChange = (campo, valor) => {
    setDatosRegistro({ ...datosRegistro, [campo]: valor });
  };

  const handleClickRegistro = async () => {
    try {
      const registroResponse = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosRegistro),
      });

      if (!registroResponse.ok) {
        // Manejo de errores del servidor
        const errorData = await registroResponse.json();
        throw new Error(errorData.message || 'Error desconocido en el servidor');
      }

      const registroData = await registroResponse.json();
      console.log('Respuesta del servidor:', registroData);

      // Redirección o cualquier otra acción después del registro exitoso
      // Por ejemplo, podrías usar react-router-dom para redirigir a la página de inicio de sesión
      // history.push('/login');
    } catch (error) {
      console.error('Error al intentar registrar el usuario:', error.message);
      // Puedes mostrar un mensaje de error al usuario si lo deseas
    }
  };
  return (
    <>
      <div className="container bg-white mx-auto w-[500px] p-1 rounded mt-[7vh] ">
        <div className="container mx-auto flex items-center justify-center mb-[5vh] mt-[50px]">
          <img className="w-1/4 mx-auto p-0 mr-3" src={cat} alt="Gato" />
          <h1 className="text-black mx-auto p-0 ml-3 text-[35px] font-px">WHEAK</h1>
        </div>

        <h2 className="flex justify-center items-center mb-[3vh] font-bold">REGISTRO</h2>

        <form className="ml-[10vh]" action="">
          <CampoFormulario
            etiqueta="Nombre"
            type="text"
            value={datosRegistro.nombre}
            onChange={(valor) => handleChange('nombre', valor)}
          />
          <CampoFormulario
            etiqueta="Apellido"
            type="text"
            value={datosRegistro.apellido}
            onChange={(valor) => handleChange('apellido', valor)}
          />
          {/* Cambiado a un campo de fecha HTML nativo */}
          <input
            type="date"
            value={datosRegistro.fechaNacimiento}
            onChange={(e) => handleChange('fechaNacimiento', e.target.value)}
          />
          <CampoFormulario
            etiqueta="Usuario"
            type="text"
            value={datosRegistro.usuario}
            onChange={(valor) => handleChange('usuario', valor)}
          />
          <CampoFormulario
            etiqueta="Contraseña"
            type="password"
            value={datosRegistro.contraseña}
            onChange={(valor) => handleChange('contraseña', valor)}
          />
          <CampoFormulario
            etiqueta="Correo"
            type="email"
            value={datosRegistro.correo}
            onChange={(valor) => handleChange('correo', valor)}
          />
          
          {/* Utiliza tu componente BotonPersonalizado para el botón */}
          <BotonPersonalizado onClick={handleClickRegistro} />
        </form>

        <div className="flex items-center justify-center mb-[50px]">
          <p>Ya tiene una cuenta <Link className="underline" to="/">Inicia Sesión</Link></p>
        </div>
      </div>
    </>
  );
}

export default Register;
