import cat from "./assets/cat.png";
import paisaje1 from "./assets/paisaje1.jpg";
import paisaje2 from "./assets/paisaje2.jpg";
import comida from "./assets/comida.jpg";
import { Link } from "react-router-dom";

function Lobby() {
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

  const contenedor = document.getElementById("amigos-container");
  return (
    <>
      <div className="ml-[2vh] mt-[4vh] w-[98%]   bg-white rounded rounded ">
        <nav className="flex justify-between items-center ">
          <div className="flex">
            <figure className="flex  items-top w-[65px] rounded-[100%] m-[1vh] bg-[#313866]">
              <img className="w-[60px] mb-[-2px]  p-0 m-0 " src={cat} alt="" />
            </figure>
            <div className="flex justify-center items-center gap-[3vh]">
              <i className="fa-solid fa-bell ml-[1vw] text-[3ch]"></i>
              <i className="fa-solid fa-magnifying-glass text-[3ch]"></i>
            </div>
          </div>
          <div>
            <Link to="/">
              <i className="fa-solid fa-user text-[3ch] pr-[1vh]"></i>
            </Link>
          </div>
        </nav>
        <div className="flex">
          <div className="flex flex-col w-[80px] items-center m-[10px] ">
            <h2>Amigos</h2>
            <div className="   amigos-container border border-black w-[80px] h-[80vh] overflow-y-auto overflow-x-auto pt-[1vh]">
              {publicaciones.map((publicaion, index) => (
                <div className="flex" justify-center>
                  <img
                    className="w-[25px] mb-[1vh] border border-black rounded-[100%]"
                    src={publicaion.ftperfil}
                    alt=""
                  />
                  <p key={index}>{publicaion.amigo} </p>
                </div>
              ))}
            </div>
          </div>

          <div className="Publicaciones h-[680px] w-[93%] overflow-x-auto  ">
            {publicaciones.map((publicacion, index) => (
              <div key={index} className="border border-black p-4 m-4">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Lobby;
