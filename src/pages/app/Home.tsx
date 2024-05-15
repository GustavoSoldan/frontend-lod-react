export function Home() {
    return (
        <div className="flex flex-col w-full items-center justify-center">
            <div className="flex flex-col h-72 w-full items-center justify-center bg-gradient-to-r from-teal-700 via-teal-800 to-cyan-800 p-12 border-b-[6px] border-b-gray-800">
                <div className="text-5xl font-bold [text-shadow:3px_4px_1px_var(--tw-shadow-color)] shadow-black">
                    League Of Draaaaaaaaaaaaaaaaven
                </div>
                <input className="mt-10 flex w-2/6 rounded-xl p-5 text-black focus:outline-none shadow-[4px_4px_1px_rgba(0,0,0,0.9)] border-2 border-black"
                    placeholder="Busque o seu nome de invocador" />
                <div className="flex flex-row w-3/6 justify-between [text-shadow:2px_1px_1px_var(--tw-shadow-color)] shadow-black">
                    <div className="mt-8 text-2xl font-bold text-sm">
                        200M+ de usuários ativos
                    </div>
                    <div className="mt-8 text-2xl font-bold">
                        1B+ de partidas analisadas
                    </div>
                </div>
            </div>
            <div className="p-8 mt-8 bg-teal-600 rounded-2xl text-xl font-bold [text-shadow:2px_2px_1px_var(--tw-shadow-color)] shadow-black border-4 border-black">Ir para a Dashboard</div>
        </div>
    )
}