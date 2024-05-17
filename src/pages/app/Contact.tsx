import { ArrowLeft } from 'lucide-react'
import { FaGithub, FaLaptopCode, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function Contact() {
  return (
    <div>
      <div className="flex flex-row items-start justify-center text-[28px] font-bold">
        <Link
          to="/dashboard"
          className="m-10 flex h-24 w-1/6 flex-row items-center justify-center gap-2 rounded-3xl
          border-4 border-teal-500 bg-white text-lg text-black transition-all
          hover:border-white hover:bg-teal-500 hover:text-white"
        >
          <ArrowLeft />
          Voltar
        </Link>

        <div className="relative flex h-screen w-1/4 flex-col items-center justify-center border-2 border-l-4 border-black bg-green-600">
          <div className="absolute inset-0 bg-cover bg-center hover:bg-[url(../../../public/images/img-login.png)]">
            <div className="flex h-full flex-col items-center justify-center gap-6 backdrop-blur-sm backdrop-filter">
              <span>Guilherme Padilha</span>
              <div className="flex flex-row gap-6">
                <Link to='https://github.com/Guilherme-PM'><FaGithub
                  size={50}
                  className="cursor-pointer transition-all hover:fill-black hover:bg-teal-500 rounded"
                /></Link>
                <Link to="https://www.linkedin.com/in/Guilherme-PM"><FaLinkedin
                  size={50}
                  className="cursor-pointer transition-all hover:fill-black hover:bg-teal-500 rounded"
                /></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-screen w-1/4 flex-col items-center justify-center border-2 border-black bg-blue-800">
          <div className="absolute inset-0 bg-cover bg-center hover:bg-[url(../../../public/images/img-login.png)]">
            <div className="flex h-full flex-col items-center justify-center gap-6 backdrop-blur-sm backdrop-filter">
              <span>Gustavo Soldan</span>
              <div className="flex flex-row gap-6">
                <Link to='https://github.com/GustavoSolldan'><FaGithub
                  size={50}
                  className="cursor-pointer transition-all hover:fill-black hover:bg-teal-500 rounded"
                /></Link>
                <Link to="https://www.linkedin.com/in/gustavosoldan"><FaLinkedin
                  size={50}
                  className="cursor-pointer transition-all hover:fill-black hover:bg-teal-500 rounded"
                /></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-screen w-1/4 flex-col items-center justify-center border-2 border-black bg-violet-900">
          <div className="absolute inset-0 bg-cover bg-center hover:bg-[url(../../../public/images/img-login.png)]">
            <div className="flex h-full flex-col items-center justify-center gap-6 backdrop-blur-sm backdrop-filter">
              <span>Enzo Rocha</span>
              <div className="flex flex-row gap-6">
                <Link to='https://github.com/elziorocha'><FaGithub
                  size={50}
                  className="cursor-pointer transition-all hover:fill-black hover:bg-teal-500 rounded"
                /></Link>
                <Link to="https://www.linkedin.com/in/elziorocha"><FaLinkedin
                  size={50}
                  className="cursor-pointer transition-all hover:fill-black hover:bg-teal-500 rounded"
                /></Link>
                <Link to="https://elziorochaportfolio.netlify.app/"><FaLaptopCode
                  size={50}
                  className="cursor-pointer transition-all hover:fill-black hover:bg-teal-500 rounded"
                /></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-screen w-1/4 flex-col items-center justify-center border-2 border-black bg-green-900">
          <div className="absolute inset-0 bg-cover bg-center hover:bg-[url(../../../public/images/img-login.png)]">
            <div className="flex h-full flex-col items-center justify-center gap-6 backdrop-blur-sm backdrop-filter">
              <span>Leonardo Do Valle</span>
              <div className="flex flex-row gap-6">
                <Link to='https://github.com/LeoDreamcatcher'><FaGithub
                  size={50}
                  className="cursor-pointer transition-all hover:fill-black hover:bg-teal-500 rounded"
                /></Link>
                <Link to="https://www.linkedin.com/in/leonardo-do-valle"><FaLinkedin
                  size={50}
                  className="cursor-pointer transition-all hover:fill-black hover:bg-teal-500 rounded"
                /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
