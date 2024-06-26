import { BsFacebook } from "react-icons/bs"; 
import { BsTelegram } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const BottomNav = () => {
    const words = ['Community MEMBERS', 'Community NEWS', 'Community MESSAGES', 'Community FORUMS', 'Community SHOP', 'Community GAMING', 'Community OFFERS'];
    const colors = ['text-yellow-600', 'text-red-100', 'text-yellow-400', 'text-yellow-200', 'text-red-200', 'text-red-400'];

    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, (80 * words[wordIndex].length + 50) + 1000);

        return () => clearInterval(interval);
    }, [wordIndex, words]);

    return (
        <div className="bg-green-300 py-4 dark:bg-gray-600 flex justify-between items-center mt-[4rem]">
            <div className="flex flex-col md:flex-row items-center gap-5 ml-4 md:ml-[8em]">
                <h5 className="border-b-4 border-b-slate-500 text-[18px] text-black font-semibold cursor-pointer hover:text-gray-800 dark:text-white dark:border-b-4 dark:border-b-green-500">
                    Nouveaux messages
                </h5>
                <h5 className="border-b-4 border-b-slate-500 text-[18px] text-black font-semibold cursor-pointer hover:text-gray-800 dark:text-white dark:border-b-4 dark:border-b-green-500">
                    Rechercher dans les forums
                </h5>
            </div>
            <div className="absolute left-[50%] transform -translate-x-1/2 md:static md:transform-none md:left-auto">
                <h1 className="text-xl font-semibold dark:text-white">
                    BAYLife {' '}
                    <span className={colors[wordIndex]}>
                        <Typewriter
                            words={[words[wordIndex]]}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={80}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
            </div>
            <div className="mr-4 md:mr-[8em] flex justify-center items-center gap-5">
                <Link className="hover:transform hover:translate-y-1 transition duration-300">
                    <BsFacebook  className="text-2xl dark:text-white text-black" />
                </Link>
                <Link className="hover:transform hover:-translate-y-1 transition duration-300">
                    <BsDiscord className="text-2xl dark:text-white text-black" />
                </Link>
                <Link className="hover:transform hover:translate-y-1 transition duration-300">
                    <FaInstagramSquare className="text-2xl dark:text-white text-black" />
                </Link>
                <Link className="hover:transform hover:-translate-y-1 transition duration-300">
                    <BsTelegram className="text-2xl dark:text-white text-black" />
                </Link>
            </div>
        </div>
    );
};

export default BottomNav;
