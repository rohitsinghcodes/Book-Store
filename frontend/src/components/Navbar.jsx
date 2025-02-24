import React, { useState } from 'react'
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { GrSearch } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";

import avatarImg from "../assets/avatar.png"
import { Link } from 'react-router';
import { useAuth } from '../context/AuthContext';

const navigation = [
    {
        name: "Dashboard", href: "/dashboard"
    },
    {
        name: "Orders", href: "/orders"
    },
    {
        name: "Cart Page", href: "/cart"
    },
    {
        name: "Check Out", href: "/checkout"
    }
]
export default function Navbar() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const cartItem = useSelector(state => state.cart.cartItems)
    const { currentUser, logout } = useAuth()

    const hangleLogout = () => {
        logout()
    }

    return (
        <div>
            <header className='max-w-screen-2xl md:px-14 mx-auto px-4 py-6 '>
                <nav className='flex justify-between items-center'>
                    <div className='flex items-center md:gap-16 gap-4'>
                        <Link to="/">
                            <HiMiniBars3CenterLeft className='size-6' />
                        </Link>
                        <div className='relative sm: w-40 space-x-2'>
                            <GrSearch className='absolute inline-block left-3 inset-y-2' />
                            <input type="text" placeholder='Search Here' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none' />
                        </div>
                    </div>
                    <div className='relative flex items-center md:space-x-2'>
                        <div>
                            {
                                currentUser ? <>
                                    <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                        <img src={avatarImg} className={`size-7 rounded-full  ${currentUser ? 'ring-2 ring-blue-500' : ''}`} alt="" />
                                    </button>
                                    {
                                        isDropdownOpen && (
                                            <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                                                <ul className='py-2'>
                                                    {
                                                        navigation.map((item) => (
                                                            <li key={item.name} onClick={() => {
                                                                setIsDropdownOpen(false)
                                                            }}>
                                                                <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100' >
                                                                    {item.name}</Link>
                                                            </li>
                                                        ))
                                                    }
                                                    <li>
                                                        <button onClick={hangleLogout} className='block w-full text-left px-4 py-2 text-sm hover:bg-gray-100'>Logout</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    }
                                </> :
                                    <Link to="/login">
                                        <FaRegUser className='size-6' />
                                    </Link>
                            }
                        </div>
                        <button className='hidden sm:block'>
                            <FiHeart />
                        </button>

                        <Link to="/cart" className='bg-primary p-1 sm:px-6 py-2 flex items-center rounded-sm'>
                            <MdOutlineShoppingCart />
                            {
                                cartItem.length > 0 ? <span className='text-sm font-semibold sm:ml-1'>{cartItem.length}</span> : <span className='text-sm font-semibold sm:ml-1'>0</span>
                            }

                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}
