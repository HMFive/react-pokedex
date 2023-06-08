import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import pokedex from '../../assets/icons8-pokedex-48.png';
import pokemon from '../../assets/icons8-pokemon-48.png';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(isDarkModeEnabled);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="border-gray-200 text-white bg-red-500 dark:bg-red-700 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={`/`} className="flex items-center">
          <img src={pokemon} className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PokeList</span>
        </Link>

        <div className="md:hidden flex items-center">
          <Link
            to={`/pokedex`}
            className="ml-auto py-2 pl-3 pr-4 text-white bg-red-500 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white dark:bg-red-600 md:dark:bg-transparent"
          >
            <img src={pokedex} className="h-12" alt="Pokédex" />
          </Link>
        </div>

        <div className="hidden md:block" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link
                to={`/pokedex`}
                className="block py-2 pl-3 pr-4 text-white bg-red-500 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white dark:bg-red-600 md:dark:bg-transparent"
              >
                <img src={pokedex} className="h-12" alt="Pokédex" />
              </Link>
            </li>
          </ul>
        </div>
        <button onClick={toggleDarkMode}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>


      </div>
    </nav>
  );
}

export default Navbar;
