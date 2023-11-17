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
    fechaNacimiento: '',
    usuario: '',
    contraseña: '',
    correo: ''
  });

  // Manejador para cambios en los campos del formulario
  const handleChange = (campo, valor) => {
    setDatosRegistro({ ...datosRegistro, [campo]: valor });
  };

  // Manejador para el clic en el botón de registro
  const handleClickRegistro = () => {
    // Aquí puedes agregar lógica adicional si es necesario
    console.log('Datos del formulario:', datosRegistro);
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
          {/* Utiliza tu componente CampoFormulario para cada campo del formulario */}
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
          <CampoFormulario
            etiqueta="Fecha de nacimiento"
            type="date"
            value={datosRegistro.fechaNacimiento}
            onChange={(valor) => handleChange('fechaNacimiento', valor)}
          />
          <CampoFormulario
            etiqueta="Usuario"
            type="text"
            value={datosRegistro.usuario}
            onChange={(valor) => handleChange('usuario', valor)}
          />
          <CampoFormulario
            etiqueta="Contraseña"
            type="text"
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
