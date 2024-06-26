import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Search = () => {
    return (
        <div className="absolute md:top-[3.5em] top-[2.5em] md:-right-[6em] -right-[4rem] z-99 dark:bg-gray-800 bg-green-500 md:h-64 md:w-[450px] w-[330px] text-white p-4 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out">
            {/* Votre formulaire de recherche */}
            <h1 className="md:text-xl text-sm text-center mb-2 font-semibold">Commencez votre recherche</h1>
            <form className='flex justify-start flex-col md:gap-3 gap-2 items-center'>
                <input placeholder="Rechercher ..." className="bg-green-500 border md:w-[350px] w-[230px] py-1 rounded-lg text-white dark:bg-transparent border-green-400 placeholder-gray-200 shadow-inner drop-shadow-lg outline-none text-sm md:text-[18px] pl-2"
                    type="text" />
                <div className="flex justify-center items-center gap-2">
                    <input
                        type="checkbox"
                        id="searchByTitle"
                        name="searchByTitle"
                        className="form-checkbox md:h-5 md:w-5 h-3 w-3 text-green-500 border-green-500 focus:ring-green-500 rounded"
                    />
                    <label className="text-semibold text-sm md:text-[18px]" htmlFor="searchByTitle">Rechercher par titre uniquement</label>
                </div>
                <div className="flex justify-start items-center gap-2">
                    <label className="text-semibold text-sm md:text-[18px]" htmlFor="searchByMember">Par :</label>
                    <input id="searchByMember" name="searchByMember" placeholder="Membre ..." className="bg-green-500 dark:bg-transparent border md:w-[300px] w-[230px] py-1 rounded-lg text-white border-green-400 placeholder-gray-200 shadow-inner drop-shadow-lg outline-none text-sm md:text-[18px] pl-2"
                        type="text" />
                </div>
                <div className="flex mt-3 items-center gap-4">
                    <button className="flex items-center gap-2 bg-green-400 px-2 py-1 md:px-3 md:py-2 rounded-lg text-white hover:bg-green-600 transition duration-300">
                        <BiSearch />
                        <span className='text-sm md:text-[18px]'>Rechercher</span>
                    </button>
                    <Link to="/recherche-avancee" className="bg-gray-500 dark:border dark:bg-gray-800 dark:border-green-400 px-2 py-1 md:px-3 md:py-2 text-sm md:text-[18px] rounded-lg text-white dark:hover:border-white hover:bg-gray-600 transition duration-300">
                        Recherche avancée
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Search;
