import { FaGithub, FaLaptopCode, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function Contact() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center text-[28px] font-bold">
        <div
          className="flex h-screen w-1/4 flex-col items-center justify-center gap-6
          bg-blue-500 transition-all hover:bg-purple-900"
        >
          Guilherme Padilha
          <FaGithub
            size={50}
            className="cursor-pointer transition-all hover:fill-black"
          />
          <FaLinkedin
            size={50}
            className="cursor-pointer transition-all hover:fill-black"
          />
        </div>
        <div
          className="flex h-screen w-1/4 flex-col items-center justify-center gap-6
          bg-red-500 transition-all hover:bg-purple-900"
        >
          Gustavo Soldan
          <FaGithub
            size={50}
            className="cursor-pointer transition-all hover:fill-black"
          />
          <FaLinkedin
            size={50}
            className="cursor-pointer transition-all hover:fill-black"
          />
        </div>
        <Link
          to="/dashboard"
          className="m-10 flex h-24 w-1/6 flex-col items-center justify-center rounded-3xl
          bg-teal-700 text-lg transition-all hover:bg-teal-800"
        >
          Voltar
        </Link>
        <div
          className="flex h-screen w-1/4 flex-col items-center justify-center gap-6
          bg-purple-800 transition-all hover:bg-purple-900"
        >
          Enzo Rocha
          <FaGithub
            size={50}
            className="cursor-pointer transition-all hover:fill-black"
          />
          <FaLinkedin
            size={50}
            className="cursor-pointer transition-all hover:fill-black"
          />
          <FaLaptopCode
            size={50}
            className="cursor-pointer transition-all hover:fill-black"
          />
        </div>
        <div
          className="flex h-screen w-1/4 flex-col items-center justify-center gap-6
          bg-green-700 transition-all hover:bg-green-800"
        >
          Leonardo Do Valle
          <FaGithub
            size={50}
            className="cursor-pointer transition-all hover:fill-black"
          />
          <FaLinkedin
            size={50}
            className="cursor-pointer transition-all hover:fill-black"
          />
        </div>
      </div>
    </div>
  )
}
