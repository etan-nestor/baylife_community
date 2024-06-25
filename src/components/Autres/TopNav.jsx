/* eslint-disable no-unused-vars */
import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/images/logos/logo02.png'
import discord01 from '../../assets/images/autres/discord02.png'
import topnavBg from '../../assets/images/autres/topnav.jpg'

const TopNav = () => {
    return (
        <div style={{ backgroundImage: `url(${topnavBg})` }} className="w-full bg-cover bg-center pt-5 h-70">
            <div className="flex justify-between items-center gap-20">
                <div className="ml-[8em] mb-5">
                    <Link to='/'>
                        <img className='w-[150px] h-[90px] rounded-full' src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <div className="">
                        <img className="w-[80px]" src={discord01} alt="discord Logo" />
                    </div>
                    <div className="flex flex-col gap-2 mr-[8em]">
                        <div className="r">
                            <h1 className="text-2xl text-white font-bold">Discord Server</h1>
                        </div>
                        <div className="two">
                            <h3 className="text-xl text-green-400 font-semibold">
                                256 membres connectés
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav
