export function Help() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex h-36 w-full items-center justify-center bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 p-12 text-3xl font-bold">
        Como podemos te ajudar?
      </div>
      <input
        className="mt-10 flex w-3/6 rounded-xl p-5 text-black focus:outline-none"
        placeholder="O que procura?"
      ></input>
      <div className=" mt-6 flex flex-wrap">
        <div className="m-2.5 bg-teal-500 p-12 hover:scale-105">icone</div>
        <div className="m-2.5 bg-teal-500 p-12 hover:scale-105">icone</div>
        <div className="m-2.5 bg-teal-500 p-12 hover:scale-105">icone</div>
        <div className="m-2.5 bg-teal-500 p-12 hover:scale-105">icone</div>
      </div>
    </div>
  )
}
