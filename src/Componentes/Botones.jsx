// components/BotonPersonalizado.js
import React from 'react';

function BotonPersonalizado({ onClick }) {
  return (
    <div className="flex justify-center">
      <button
        className="bg-[#313866] w-1/4  rounded ml-[-10vh] mb-[20px] text-white"
        type="submit"
        onClick={onClick}
      >
        Entrar
      </button>
    </div>
  );
}

export default BotonPersonalizado;
