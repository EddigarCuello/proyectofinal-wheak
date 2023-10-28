import cat from "./assets/cat.png";
import paisaje1 from "./assets/paisaje1.jpg";
import paisaje2 from "./assets/paisaje2.jpg";
import comida from "./assets/comida.jpg";
import { Link } from "react-router-dom";
import { Chats, PopupPerfil,Notificaciones } from "./Componentes.jsx";

function Perfil() {
  const publicaciones = [
    {
      amigo: "Alice",
      descripcion: "¡Hoy es un día soleado!",
      imagen: paisaje2,
      ftperfil: cat,
    },
    {
      amigo: "Bob",
      descripcion: "!!Imagen muy interesante!!",
      imagen: paisaje1,
      ftperfil: cat,
    },
    {
      amigo: "Charlie",
      descripcion: "Cena deliciosa con amigos.",
      imagen: comida,
      ftperfil: cat,
    },
    // Agrega más publicaciones aquí
  ];

  const contenedor = document.getElementById("amigos-container");
  return (
    <>
      <div className="ml-[2vh] mt-[4vh] w-[98%]   bg-white rounded ">
        <nav className="flex justify-between items-center ">
          <div className="flex">
            <figure className="flex  items-top w-[65px] rounded-[100%] m-[1vh] bg-[#313866]">
              <Link to="/lobby">
                <img
                  className="w-[60px] mb-[-2px]  p-0 m-0 "
                  src={cat}
                  alt=""
                />
              </Link>
            </figure>
            <div className="flex justify-center items-center ">
              
              <Notificaciones/>
              <input
                className="outline-none border border-black mr-[5px]"
                type="text "
              />
              <i className="fa-solid fa-magnifying-glass text-[3ch] cursor-pointer"></i>
            </div>
          </div>
          <div>
            <PopupPerfil />
          </div>
        </nav>
        <div className="flex">
          <div className="flex flex-col w-[80px] items-center m-[10px] z-10 ">
            <Chats />
          </div>

          <div className="Publicaciones  h-[680px] w-[93%] overflow-x-auto  ">
            <div className="Muro border  h-[350px] ">
              <div className="Banner h-[250px] w-[100%] ">
                <img
                  className="w-[100%] h-[250px] rounded"
                  src={paisaje2}
                  alt=""
                />
              </div>
              <div className="flex gap-[25px] items-center relative bottom-[20px]">
                <img
                  className="ml-[10vh] h-[100px] w-[100px] rounded-[100%] bg-[#555555] "
                  src={cat}
                  alt=""
                />
                <p>"Usuario Logeado"</p>
              </div>
            </div>

            {publicaciones.map((publicacion, index) => (
              <div key={index} className="rounded border border-black p-4 m-4">
                <div className="flex  items-center">
                  <img
                    className="w-[25px] rounded-[100%] border border-black"
                    src={publicacion.ftperfil}
                    alt=""
                  />
                  <h3>{publicacion.amigo}</h3>
                </div>

                <p>{publicacion.descripcion}</p>
                <div className="w-[100%] flex justify-center items-center">
                  <img
                    className=" w-[50%] text-center rounded"
                    src={publicacion.imagen}
                    alt="Publicación"
                  />
                </div>
                <div className="flex gap-[1vh] text-[35px] ">
                  <i class="fa-solid fa-thumbs-up text-[#000079]"></i>
                  <i class="fa-solid fa-comments"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Perfil;
