
import "./Header.css"

import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <header className="bg-white shadow-md header header">
    <div className="container mx-auto flex justify-between items-center">
      <a href="./index.html">
        <img src="./img/logo.svg" alt="logo" className="logo" width="63" height="52" />
      </a>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-800  rounded-md md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav
        className={`absolute top-16 left-0 w-full bg-white p-5 shadow-md md:static md:flex md:space-x-6 md:shadow-none md:w-auto ${
          isOpen ? "block" : "hidden md:block"
        }`}
      >
        <ul className="header__menu flex flex-col md:flex-row md:space-x-6 text-gray-800">
          <li className="header__item">
            <a href="./about.html" className="header__link block">Почему мы?</a>
          </li>
          <li className="header__item">
            <a href="./about.html" className="header__link block">Номера</a>
          </li>
          <li className="header__item">
            <a href="./about.html" className="header__link block">Отзывы</a>
          </li>
          <li className="header__item">
            <a href="./about.html" className="header__link block">Как нас найти</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header
