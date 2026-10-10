'use client'
import { FaHome, FaBookOpen, FaQuestionCircle } from "react-icons/fa";
import React, { useState } from 'react';
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const navItems = [
        {
            id: 1,
            text: "Home",
            path: "/",
            icon: FaHome,
        },
        {
            id: 2,
            text: "Lessons",
            path: "/lessons",
            icon: FaBookOpen,
        },
        {
            id: 3,
            text: "FAQ",
            path: "/faq",
            icon: FaQuestionCircle,
        },
    ];

    const Links = navItems.map(item => {
        const Icon = item.icon;
        return (
            <Link
                key={item.id}
                href={item.path}
                className="flex items-center gap-3"
            >
                <Icon />
                {item.text}
            </Link>
        );
    })

    return (
        <div className="flex justify-between m-5">

            <span className="flex gap-2 items-center" onClick={() => setOpen(!open)}>
                <span className="lg:hidden">
                    {
                        open ? <IoCloseSharp size={25} /> : <GiHamburgerMenu size={25} />
                    }
                </span>
                <div className="md:hidden">
                    {
                        Links
                    }
                </div>
                <h2>Navbar</h2>
            </span>

            <div className="hidden md:flex space-x-5">
                {
                    Links
                }
            </div>

            <div>
                <button>Login</button>
            </div>
        </div>
    );
};

export default Navbar;