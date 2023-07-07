export default function Login() {
  return (
    <main className="bg-black min-h-screen flex justify-center items-center">
      <form className="flex flex-col gap-10 bg-neutral-700/10 p-10 rounded-xl max-w-lg w-full">
        <img
          src="https://kodemia.mx/icons/kodemia-logo.svg"
          alt="logo"
          className="h-20"
        />
        <input
          type="text"
          name=""
          className="bg-black border border-neutral-700 rounded text-white p-2 text-center"
          placeholder="Usuario"
        />
        <input
          type="password"
          name=""
          className="bg-black border border-neutral-700 rounded text-white p-2 text-center"
          placeholder="Contraseña"
        />
        <input
          type="submit"
          value="Ingresar"
          className="bg-white rounded p-2 font-semibold cursor-pointer"
        />
      </form>
    </main>
  );
}
