import {useState} from 'react';
import { BiSearchAlt } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { ListItems, DropDownLinks } from '../../data/Items';
import { Link } from 'react-router-dom';
import DarkMode from '../DarkMode';
import UserGuide from '../Guide/UserGuide';
import Search from '../Search/Search';

const Nav = () => {
const [showSearch, setShowSearch] = useState(false);

    const handleSearchIconClick = () => {
        setShowSearch(true);
    };
    return (
        <div>
            <div className="bg-green-400 dark:bg-gray-700 py-2">
                {/* flex onglets */}
                <div className="flex justify-between items-center">
                    {/* les menus */}
                    <div className="menu">
                        {/* items */}
                        <div className="ml-[8em]">
                            <ul className="flex justify-center items-center gap-10">
                                {ListItems.map((item) => (
                                    <li
                                        className="cursor-pointer text-xl dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-green-400 font-semibold drop-shadow-lg text-black px-4 py-2 rounded-lg bg-green-400 border border-green-400 hover:border-white hover:border-1 transition duration-300 ease-in-out"
                                        key={item.id}
                                    >
                                        <Link to={item.link}>{item.name}</Link>
                                    </li>
                                ))}
                                <li className="text-xl font-semibold dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-green-400 text px-4 py-1 rounded-lg drop-shadow-lg bg-green-400 group relative cursor-pointer border border-green-400 hover:border-white hover:border-1 transition duration-300 ease-in-out">
                                    <Link to="/membres" className="flex items-center gap-[5px] py-1">
                                        Membres
                                        <span>
                                            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                                        </span>
                                    </Link>
                                    <div className="absolute z-[9999] hidden group-hover:block w-[400px] rounded-md bg-green-200 p-2 text-black dark:text-white dark:bg-gray-600 dark:hover:text-green-990">
                                        <ul>
                                            {DropDownLinks.map((data) => (
                                                <li key={data.id}>
                                                    <a
                                                        className="inline-block w-full hover:bg-green-400 rounded-md p-2 dark:hover:bg-black hover:drop-shadow-lg transition duration-300 ease-in-out dark:hover:text-white"
                                                        href={data.link}
                                                    >
                                                        {data.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* les recherches et autres */}
                    <div className="flex justify-center items-center gap-5">
                        {/* rech et autres */}
                        <div className="flex justify-center items-center gap-5">
                            <button className="cursor-pointer text-xl dark:bg-gray-700 dark:text-white dark:border-gray-100 dark:hover:border-green-400 font-semibold drop-shadow-lg text-black px-4 py-2 rounded-lg bg-green-400 border border-gray-800 hover:border-white hover:border-1 transition duration-300 ease-in-out">
                                Connexion
                            </button>
                            <button className="cursor-pointer text-xl dark:bg-gray-700 dark:text-white dark:border-gray-100 dark:hover:border-green-400 font-semibold drop-shadow-lg text-black px-4 py-2 rounded-lg bg-green-400 border border-gray-800 hover:border-white hover:border-1 transition duration-300 ease-in-out">
                                S'inscrire
                            </button>
                            <div className="flex justify-center items-center gap-2">
                                <div onClick={handleSearchIconClick} className="cursor-pointer bg-green-500 px-2 py-2 rounded-full drop-shadow-lg">
                                    <BiSearchAlt className="text-2xl text-white font-bold" />
                                </div>
                                <input
                                    className="bg-green-500 border w-[200px] py-2 rounded-lg text-white border-green-400 placeholder-gray-200 shadow-inner drop-shadow-lg outline-none text-xl font-semibold px-7"
                                    type="text"
                                    onFocus={() => setShowSearch(true)}
                                    placeholder="Rechercher......"
                                />
                            </div>
                        </div>
                        <div className="mr-8 dark-mode-button">
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
            {showSearch && <Search />}
            <UserGuide />
        </div>
    );
};

export default Nav;
