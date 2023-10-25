import cat from "./assets/cat.png";

function Login() {
  return (
    <>
      <div class="container bg-white mx-auto w-[450px] p-1 rounded mt-[25vh] ">
        <div class="container mx-auto flex items-center justify-center mb-[5vh] mt-[50px]">
          <img class="w-1/4 mx-auto p-0 mr-3" src={cat} alt="" />
          <h1 class="text-black mx-auto p-0 ml-3">WHEAK</h1>
        </div>

        <h2 class="flex justify-center items-center mb-[3vh]">User Data</h2>

        <form class="ml-[10vh]" action="">
          <div>
            <label htmlFor="">Usuario</label>
            <input
              class="w-[50%] ml-10 mb-[4vh] border-b border-black"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Contraseña</label>
            <input
              class="w-[50%] ml-3 mb-[4vh] border-b border-black"
              ctype="text"
            />
          </div>
          <div class="flex justify-center">
            <button
              class="bg-[#313866] w-1/4  rounded ml-[-10vh] mb-[50px] text-white"
              type="submit"
            >Entrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
