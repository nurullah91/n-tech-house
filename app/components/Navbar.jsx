import Link from 'next/link';
import React from 'react';
import logo from '../../public/Screenshot_2023-08-28_001942-removebg-preview.png'
import Image from 'next/image';
const Navbar = () => {

    const navItem = <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/shop">Shop</Link></li>
        <li><Link href="/computers">Computers</Link></li>
        <li><Link href="/mobile">Mobile</Link></li>
        <li><Link href="/gadgets">Gadgets</Link></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    
                    <Image
                    src={logo}
                    alt='NTech logo'
                    width={50}
                    quality={100}
                    placeholder='blur'
                    />
                    <h3 className="btn btn-ghost normal-case text-xl">NTech House</h3>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;