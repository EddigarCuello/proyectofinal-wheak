import React, { useState } from "react";
import { Link } from "react-router-dom";
import cat from "./assets/cat.png";
import paisaje1 from "./assets/paisaje1.jpg";
import paisaje2 from "./assets/paisaje2.jpg";
import comida from "./assets/comida.jpg";

export function PopupLobby() {
  const [isVisible, setIsVisible] = useState(false);

  const OpcionesPerfil = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div>
      <i
        onClick={OpcionesPerfil}
        className="fa-solid fa-user text-[3ch] pr-[1vh] cursor-pointer"
      ></i>

      {isVisible && (
        <div className="Opciones-perfil border border-black w-[250px] h-[150px] absolute bg-[white] top-[70px] right-[40px] flex flex-col justify-center items-center rounded-[15px]">
          <Link to="/perfil">
            <i class="fa-solid fa-person mb-[25%]"> Perfil</i>
          </Link>
          <Link to="/">
            <i class="fa-solid fa-right-to-bracket mt-[20%] "> Cerrar Sesion</i>
          </Link>
        </div>
      )}
    </div>
  );
}

export function PopupPerfil() {
  const [isVisible, setIsVisible] = useState(false);

  const OpcionesPerfil = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div>
      <i
        onClick={OpcionesPerfil}
        className="fa-solid fa-user text-[3ch] pr-[1vh] cursor-pointer"
      ></i>

      {isVisible && (
        <div className="Opciones-perfil border border-black w-[250px] h-[150px] absolute bg-[white] top-[70px] right-[40px] flex flex-col justify-center items-center rounded-[15px]">
          <Link to="/lobby">
            <i class="fa-solid fa-house pb-[25%]">Lobby</i>
          </Link>
          <Link to="/">
            <i class="fa-solid fa-right-to-bracket mt-[20%]  "> Cerrar Sesion</i>
          </Link>
        </div>
      )}
    </div>
  );
}

export function Chats() {
  const publicaciones = [
    {
      amigo: "Alice",
      descripcion: "¡Hoy es un día soleado!",
      imagen: paisaje2,
      ftperfil: paisaje1,
    },
    {
      amigo: "Bob",
      descripcion: "!!Imagen muy interesante!!",
      imagen: paisaje1,
      ftperfil: paisaje2,
    },
    {
      amigo: "Charlie",
      descripcion: "Cena deliciosa con amigos.",
      imagen: comida,
      ftperfil: cat,
    },
    // Agrega más publicaciones aquí
  ];

  const chatMensajes = [
    {
      mensaje: "¡Hola, ¿cómo estás?",
      horaEnvio: "09:30 AM",
    },

    {
      mensaje: "He estado trabajando en un proyecto interesante.",
      horaEnvio: "09:45 AM",
    },
    {
      mensaje: "Es genial. ¿Quieres saber más al respecto?",
      horaEnvio: "09:50 AM",
    },
    // Puedes agregar más mensajes aquí
  ];

  const [selectedFriend, setSelectedFriend] = useState(null);

  const openPopup = (friend) => {
    setSelectedFriend(friend);
  };

  const closePopup = () => {
    setSelectedFriend(null);
  };

  return (
    <>
      <h2>Amigos</h2>
      <div className="amigos-container rounded border border-black w-[80px] h-[80vh] overflow-y-auto overflow-x-auto pt-[1vh]">
        {publicaciones.map((friend, index) => (
          <div className="flex" justify-center>
            <img
              className="w-[25px] mb-[1vh] border border-black rounded-[100%]"
              src={friend.ftperfil}
              alt=""
            />
            <p
              onClick={() => openPopup(friend)}
              key={index}
              className="cursor-pointer"
            >
              {friend.amigo}
            </p>
          </div>
        ))}
      </div>

      {selectedFriend && (
        <div className="Opciones-perfil border border-black w-[300px] h-[400px] absolute bg-[white] top-[380px] left-[110px] flex flex-col rounded-t-[15px]">
          <div className="flex justify-center  mt-[20px] ">
            <p className="underline mb-[20px]">{selectedFriend.amigo}</p>
            <div className="bg-[#313866] rounded-[100%] w-[20px] h-[20px] absolute   right-[20px] flex justify-center items-center">
              <i
                class="fa-solid fa-x text-white cursor-pointer "
                onClick={closePopup}
              ></i>
            </div>
          </div>
          <div className="border border-black h-[100%]   rounded-t-[10px]">
            {chatMensajes.map((chat, index) => (
              <div className="flex-col pl-[10px] mt-[10px]" justify-center>
                <p key={index} className="bg-[#666666] w-[80%] rounded-[10px]">
                  {chat.mensaje}
                </p>
                <p className="text-[13px] text-bold">{chat.horaEnvio}</p>
              </div>
            ))}
            <input
              className="border border-black  w-[99.5%] absolute bottom-0 outline-none ring-0 pl-[6px]"
              type="text"
              placeholder="Escribe algo..."
            />
          </div>
        </div>
      )}
    </>
  );
}

export function Notificaciones() {
  const [isVisible, setIsVisible] = useState(false);

  const Notificaciones = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div>
      <i
        onClick={Notificaciones}
        className="fa-solid fa-bell ml-[1vw] mr-[20px] text-[3ch] cursor-pointer"
      ></i>

      {isVisible && (
        <div className="Opciones-perfil border border-black w-[250px] h-[150px] absolute bg-[white] top-[75px] left-[120px] flex flex-col rounded-[15px] overflow-x-auto overflow-y-auto p-[10px]  ">
          <div className="flex flex-col items-center">
            <h2 className="mb-[10px] text-[20px] border border-b-black">
              Notificaciones
            </h2>
            <p className="mb-[10px] bg-[#888888] rounded p-1">
              Has Recibido un mensaje
            </p>
            <p className="mb-[10px] bg-[#888888] rounded p-1">
              Has Recibido un mensaje
            </p>
            <p className="mb-[10px] bg-[#888888] rounded p-1">
              Has Recibido un mensaje
            </p>
            <p className="mb-[10px] bg-[#888888] rounded p-1">
              Has Recibido un mensaje
            </p>
            <p className="mb-[10px] bg-[#888888] rounded p-1">
              Has Recibido un mensaje
            </p>
            <p className="mb-[10px] bg-[#888888] rounded p-1">
              Has Recibido un mensaje
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
