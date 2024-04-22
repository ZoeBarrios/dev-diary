import { Link } from "wouter";
import Diary from "/img/diary.png";

export default function Header() {
  return (
    <header className="bg-secondary drop-shadow flex flex-row justify-between align-center items-center min-h-20">
      <div className="flex-1 ml-5 flex flex-row gap-3 items-center">
        <img src={Diary} alt="logo" className="w-15 h-16 -rotate-6" />

        <span className="font-bold text-2xl text-text-secondary bg-clip-text text-transparent bg-gradient-to-r from-text to-text-secondary">
          Dev Diary
        </span>
      </div>
      <nav className="mr-5">
        <ul className="flex flex-row justify-between flex-1 gap-5">
          <Link to="/">
            <li className="p-2 text-text-secondary text-lg cursor-pointer hover:bg-primary hover:rounded-xl">
              Ultimas entradas
            </li>
          </Link>
          <Link to="/about">
            <li className="p-2 text-text-secondary text-lg cursor-pointer hover:bg-primary hover:rounded-xl">
              Sobre mi
            </li>
          </Link>
          <li className="p-2 text-text-secondary text-lg cursor-pointer hover:bg-primary hover:rounded-xl">
            Iniciar sesión
          </li>
        </ul>
      </nav>
    </header>
  );
}
