import Link from 'next/link';
import React from 'react';

const GamesIcons = ({ name, key, link, isDone }) => {
    return (
        // <div key={key} className="text-slate-300 cursor-pointer border-2 p-5 rounded-md shadow-lg  hover:shadow-lg hover:shadow-slate-500/50 transition duration-300">
        <>
            {!isDone ? (
                <div key={key} className="relative font-extrabold min-w-[250px] min-h-[130px] bg-[#232323] text-neutral-500 cursor-pointer border border-neutral-500 p-4 rounded-lg ">
                    {name}
                    <p className='text-red-500 absolute bottom-2 right-3'>Soon To Play</p>
                </div>
            ) : (

                <Link href={link}>
                    <div key={key} className="relative font-extrabold min-w-[250px] min-h-[130px] bg-[#232323] text-slate-300 cursor-pointer border border-slate-200 p-4 rounded-lg hover:shadow-lg hover:shadow-slate-500/50  transition duration-500">
                        {name}
                    </div>
                </Link>
            )}

        </>
    );
}

export default GamesIcons;
