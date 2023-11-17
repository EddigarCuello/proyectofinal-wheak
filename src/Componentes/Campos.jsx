// components/CampoFormulario.js
import React from 'react';

function CampoFormulario({ etiqueta, tipo }) {
  return (
    <div>
      <label htmlFor="">{etiqueta}</label>
      <input className="w-[50%] ml-3 mb-[4vh] border-b border-black" type={tipo} />
    </div>
  );
}

export default CampoFormulario;
