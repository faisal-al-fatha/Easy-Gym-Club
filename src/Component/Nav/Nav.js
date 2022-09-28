import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return (

        <div className="navbar bg-base-100 drop-shadow-xl">
            <div className="flex-1 text-teal-700 ml-16">
                <div className='text-2xl font-semibold'>
                    <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Easy Gym Club</a>
            </div>
            <div className="flex-none">

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-square avatar">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Cart</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Nav;