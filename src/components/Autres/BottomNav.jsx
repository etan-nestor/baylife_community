import React from 'react'

const BottomNav = () => {
    return (
        <div className="bg-green-300 py-4 dark:bg-gray-600">
            <div className="flex items-center gap-5 ml-[8em]">
                <h5 className="border-b-4 border-b-slate-500 text-[18px] text-black font-semibold cursor-pointer hover:text-gray-800 dark:text-white dark:border-b-4 dark:border-b-green-500">Nouveaux messages</h5>
                <h5 className="border-b-4 border-b-slate-500 text-[18px] text-black font-semibold cursor-pointer hover:text-gray-800 dark:text-white dark:border-b-4 dark:border-b-green-500">Rechercher dans les forums</h5>
            </div>
        </div>
    )
}

export default BottomNav
