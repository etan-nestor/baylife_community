import { useState, useRef } from 'react';
import { BiSearchAlt, BiMenu } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { ListItems, DropDownLinks } from '../../data/Items';
import { Link } from 'react-router-dom';
import DarkMode from '../DarkMode';
import logo from '../../assets/images/logos/logo02.png';
import UserGuide from '../Guide/UserGuide';
import Search from '../Search/Search';

const Nav = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const searchInputRef = useRef(null);
    const searchContainerRef = useRef(null);

    const handleSearchIconClick = () => {
        setShowSearch(true);
        searchInputRef.current.focus();
    };

    const handleBlur = (e) => {
        setTimeout(() => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(document.activeElement)) {
                setShowSearch(false);
            }
        }, 100);
    };

    return (
        <div className="bg-green-400 fixed w-full md:h-[4rem] h-[3.5rem] dark:bg-gray-700 py-2">
            <div className="flex justify-between items-center px-4 md:px-[8em]">

                {/* menus */}
                <div className="flex items-center gap-4">
                    <div className="md:hidden mr-2">
                        <button className='px-2 py-1 bg-green-500 drop-shadow-md rounded-full' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <BiMenu className="text-2xl text-white" />
                        </button>
                    </div>
                    {/* items */}
                    <div className="hidden md:block">
                        <ul className="flex justify-center items-center gap-10">
                            {ListItems.map((item) => (
                                <li className="cursor-pointer text-xl dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-green-400 font-semibold drop-shadow-lg text-black px-4 py-2 rounded-lg bg-green-400 border border-green-400 hover:border-white hover:border-1 transition duration-300 ease-in-out" key={item.id}>
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
                                                <a className="inline-block w-full hover:bg-green-400 rounded-md p-2 dark:hover:bg-black hover:drop-shadow-lg transition duration-300 ease-in-out dark:hover:text-white" href={data.link}>
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
                {/* logo */}
                <div className="md:hidden">
                    <img className="w-[80px] -mt-1" src={logo} alt="logo" />
                </div>
                {/* buttons */}
                <div className="flex justify-center items-center gap-2 md:gap-5 md:-mr-[7em] -mr-8">
                    <button className="md:block cursor-pointer text-sm md:text-xl dark:bg-gray-700 dark:text-white dark:border-gray-100 dark:hover:border-green-400 font-semibold drop-shadow-lg text-black md:px-4 md:py-2 px-2 py-1 rounded-lg bg-green-400 border border-gray-800 hover:border-white hover:border-1 transition duration-300 ease-in-out">
                        Connexion
                    </button>
                    <button className="hidden md:block cursor-pointer text-xl dark:bg-gray-700 dark:text-white dark:border-gray-100 dark:hover:border-green-400 font-semibold drop-shadow-lg text-black px-4 py-2 rounded-lg bg-green-400 border border-gray-800 hover:border-white hover:border-1 transition duration-300 ease-in-out">
                        S'inscrire
                    </button>
                    <div className="flex justify-center items-center gap-2 relative" ref={searchContainerRef} onBlur={handleBlur}>
                        <div onClick={handleSearchIconClick} className="cursor-pointer bg-green-500 md:px-2 md:py-2 py-1 px-1 rounded-full md:drop-shadow-lg drop-shadow-sm">
                            <BiSearchAlt className="md:text-2xl text-sm text-white md:font-bold text-semibold" />
                        </div>
                        <input className="hidden md:block bg-green-500 border w-[200px] py-2 rounded-lg text-white border-green-400 placeholder-gray-200 shadow-inner drop-shadow-lg outline-none text-xl font-semibold px-7" type="text" ref={searchInputRef} onFocus={() => setShowSearch(true)} placeholder="Rechercher......" />
                        {showSearch && <Search />}
                    </div>
                    <div className="mr-8 dark-mode-button">
                        <DarkMode />
                    </div>
                </div>
            </div>

            {/* responsive menu items */}

            {isMenuOpen && (
                <div className="md:hidden mt-3 ml-1 bg-green-500 dark:bg-gray-800 w-[200px] h-[14rem] rounded-lg">
                    <ul className="flex flex-col items-start justify-center pt-4 gap-4 px-4 py-1">
                        {ListItems.map((item) => (
                            <li className="cursor-pointer w-full text-sm dark:text-white  dark:hover:border-green-400 font-semibold text-black px-2 py-1 rounded-md  border border-transparent hover:border-white hover:border-1 transition duration-300 ease-in-out" key={item.id}>
                                <Link to={item.link}>{item.name}</Link>
                            </li>
                        ))}
                        <li className="cursor-pointer w-full text-sm dark:text-white  dark:hover:border-green-400 font-semibold text-black px-2 py-1 rounded-md  border border-transparent hover:border-white hover:border-1 transition duration-300 ease-in-out group relative  border-green-400 hover:border-1">
                            <Link to="/membres" className="flex items-center gap-[5px] py-1">
                                Membres
                                <span>
                                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                                </span>
                            </Link>
                            <div className="absolute z-[9999] hidden group-hover:block w-[300px] rounded-md bg-green-200 p-2 text-black dark:text-white dark:bg-gray-600 dark:hover:text-green-990">
                                <ul>
                                    {DropDownLinks.map((data) => (
                                        <li key={data.id}>
                                            <Link className="inline-block w-full hover:bg-green-400 rounded-md p-2 dark:hover:bg-black hover:drop-shadow-lg transition duration-300 ease-in-out dark:hover:text-white" to={data.link}>
                                                {data.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            )}

            <UserGuide />
        </div>
    );
};

export default Nav;
