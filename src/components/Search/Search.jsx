
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Search = () => {
    return (
        <div className="absolute top-[12.5em] right-5 z-99 dark:bg-gray-900 bg-green-400 h-64 w-[450px] text-white p-4 rounded-lg">
            {/* Votre formulaire de recherche */}
            <h1 className="text-xl text-center mb-2 font-semibold">Commencez votre recherche</h1>
            <form className='flex justify-start flex-col gap-3 items-center'>
                <input placeholder="Rechercher ..." className="bg-green-500 border w-[350px] py-1 rounded-lg text-white border-green-400 placeholder-gray-200 shadow-inner drop-shadow-lg outline-none text-[18px] pl-2"
                    type="text" />
                <div className="flex justify-start items-center gap-2">
                    <input
                        type="checkbox"
                        id="searchByTitle"
                        name="searchByTitle"
                        className="border-gray-300 rounded w-5"
                    />
                    <label className="text-semibold text-[18px]" htmlFor="searchByTitle">Rechercher par titre uniquement</label>
                </div>
                <div className="flex justify-start items-center gap-2">
                    <label className="text-semibold text-[18px]" htmlFor="searchByMember">Par :</label>
                    <input id="searchByMember" name="searchByMember" placeholder="Membre ..." className="bg-green-500 border w-[300px] py-1 rounded-lg text-white border-green-400 placeholder-gray-200 shadow-inner drop-shadow-lg outline-none text-[18px] pl-2"
                        type="text" />
                </div>
                <div className="flex mt-3 items-center gap-4">
                    <button className="flex items-center gap-2 bg-green-500 px-3 py-2 rounded-lg text-white hover:bg-green-600 transition duration-300">
                        <BiSearch />
                        <span className='text-[18px]'>Rechercher</span>
                    </button>
                    <Link to="/recherche-avancee" className="bg-gray-600 px-3 py-2 text-[18px] rounded-lg text-white hover:bg-gray-700 transition duration-300">
                        Recherche avancée
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Search;
