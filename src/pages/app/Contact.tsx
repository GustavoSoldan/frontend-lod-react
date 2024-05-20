import { ArrowLeft } from 'lucide-react'
import { FaGithub, FaLaptopCode, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function Contact() {
  return (
    <div>
      <div className="flex flex-row items-start justify-center text-[28px] font-bold">
        <Link
          to="/dashboard"
          className="m-10 flex h-24 w-1/6 flex-row items-center justify-center gap-2 rounded-2xl
          border-2 border-gray-600 bg-slate-800 text-lg transition-all hover:bg-slate-900"
        >
          <ArrowLeft />
          Voltar
        </Link>

        <div
          className="relative flex h-screen w-1/4 flex-col items-center justify-center border-2 border-l-4 border-black
          bg-gradient-to-t from-red-700 via-red-800 to-red-800"
        >
          <div className="absolute inset-0 bg-cover bg-center hover:bg-[url(../../../public/images/Guilherme.jpeg)]">
            <div className="flex h-full flex-col items-center justify-center gap-6 backdrop-blur-sm backdrop-filter">
              <span>Guilherme Padilha</span>
              <div className="flex flex-row gap-6">
                <Link to="https://github.com/Guilherme-PM">
                  <FaGithub
                    size={50}
                    className="cursor-pointer rounded transition-all hover:bg-teal-500 hover:fill-black"
                  />
                </Link>
                <Link to="https://www.linkedin.com/in/guilherme-padilha-machado-1b289b224/">
                  <FaLinkedin
                    size={50}
                    className="cursor-pointer rounded transition-all hover:bg-teal-500 hover:fill-black"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative flex h-screen w-1/4 flex-col items-center justify-center border-2 border-black
          bg-gradient-to-t from-blue-600 via-blue-900 to-blue-900"
        >
          <div className="absolute inset-0 bg-cover bg-center hover:bg-[url(../../../public/images/Gustavo.jpeg)]">
            <div className="flex h-full flex-col items-center justify-center gap-6 backdrop-blur-sm backdrop-filter">
              <span>Gustavo Soldan</span>
              <div className="flex flex-row gap-6">
                <Link to="https://github.com/GustavoSolldan">
                  <FaGithub
                    size={50}
                    className="cursor-pointer rounded transition-all hover:bg-teal-500 hover:fill-black"
                  />
                </Link>
                <Link to="https://www.linkedin.com/in/gustavosoldan">
                  <FaLinkedin
                    size={50}
                    className="cursor-pointer rounded transition-all hover:bg-teal-500 hover:fill-black"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative flex h-screen w-1/4 flex-col items-center justify-center border-2 border-black
          bg-gradient-to-t from-violet-500 via-violet-900 to-violet-900"
        >
          <div className="absolute inset-0 bg-cover bg-center hover:bg-[url(../../../public/images/Enzo.jpeg)]">
            <div className="flex h-full flex-col items-center justify-center gap-6 backdrop-blur-sm backdrop-filter">
              <span>Enzo Rocha</span>
              <div className="flex flex-row gap-6">
                <Link to="https://github.com/elziorocha">
                  <FaGithub
                    size={50}
                    className="cursor-pointer rounded transition-all hover:bg-teal-500 hover:fill-black"
                  />
                </Link>
                <Link to="https://www.linkedin.com/in/elziorocha">
                  <FaLinkedin
                    size={50}
                    className="cursor-pointer rounded transition-all hover:bg-teal-500 hover:fill-black"
                  />
                </Link>
                <Link to="https://elziorochaportfolio.netlify.app/">
                  <FaLaptopCode
                    size={50}
                    className="cursor-pointer rounded transition-all hover:bg-teal-500 hover:fill-black"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative flex h-screen w-1/4 flex-col items-center justify-center border-2 border-black
          bg-gradient-to-t from-green-600 via-green-900 to-green-900"
        >
          <div className="absolute inset-0 bg-cover bg-right hover:bg-[url(../../../public/images/Leonardo.jpeg)]">
            <div className="flex h-full flex-col items-center justify-center gap-6 backdrop-blur-sm backdrop-filter">
              <span>Leonardo Do Valle</span>
              <div className="flex flex-row gap-6">
                <Link to="https://github.com/LeoDreamcatcher">
                  <FaGithub
                    size={50}
                    className="cursor-pointer rounded transition-all hover:bg-teal-500 hover:fill-black"
                  />
                </Link>
                <Link to="https://www.linkedin.com/in/leonardo-do-valle">
                  <FaLinkedin
                    size={50}
                    className="cursor-pointer rounded transition-all hover:bg-teal-500 hover:fill-black"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
