import cat from "./assets/cat.png";
import { Link } from 'react-router-dom';


function Register() {

  const ClickAlert = () => {
    alert('¡El registro es solo visual');
  };

  return (
    <>
      <div className="container bg-white mx-auto w-[500px] p-1 rounded mt-[7vh] ">
        <div className="container mx-auto flex items-center justify-center mb-[5vh] mt-[50px]">
          <img className="w-1/4 mx-auto p-0 mr-3" src={cat} alt="" />
          <h1 className="text-black mx-auto p-0 ml-3 text-[35px] font-px">WHEAK</h1>
        </div>

        <h2 className="flex justify-center items-center mb-[3vh] font-bold">REGISTRO</h2>

        <form className="ml-[10vh]" action=""> 

        <div>
            <label htmlFor="">Nombre</label>
            <input
              className="w-[50%] ml-3 mb-[4vh] border-b border-black"
              ctype="text"
            />
          </div>

          <div>
            <label htmlFor="">Apellido</label>
            <input
              className="w-[50%] ml-3 mb-[4vh] border-b border-black"
              ctype="text"
            />
          </div>


          <div>
            <label htmlFor="">Fecha de nacimiento</label>
            <input
              className="w-[50%] ml-3 mb-[4vh] border-b border-black"
              type="date"
            />
          </div>

          <div>
            <label htmlFor="">Usuario</label>
            <input
              className="w-[50%] ml-10 mb-[4vh] border-b border-black"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Contraseña</label>
            <input
              className="w-[50%] ml-3 mb-[4vh] border-b border-black"
              ctype="text"
            />
          </div>

          <div>
            <label htmlFor="">Correo</label>
            <input
              className="w-[50%] ml-3 mb-[4vh] border-b border-black"
              ctype="email"
            />
          </div>
          
          <div className="flex justify-center">
            <button
              className="bg-[#313866] w-1/4  rounded ml-[-10vh] mb-[20px] text-white"
              type="submit"
              onClick={ClickAlert}
            >Entrar
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center mb-[50px]">
        <p>Ya tiene una cuenta <Link class="underline" to="/" >Inicia Sesion</Link></p>
      </div>
      </div>
    </>
  );
}

export default Register;