import React, { useState } from "react";

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen) //!false
    }
    return (
        <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-bold ml-10">
                    <span className="text-yellow-500">Port</span>
                    <span className="text-white">folio</span>
                </div>

                {/* Toggle Menu Button */}
                <div className="md:hidden">
                    <button id='menu-toggle' className="text-white" onClick={toggleMenu}>
                        <svg fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"> </path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden md:flex space-x-4">
                    <li><a href="#profile" className="text-white hover:font-bold hover:text-yellow-500 mr-5">Profile</a></li>
                    <li><a href="#project" className="text-white hover:font-bold hover:text-yellow-500 mr-5">Project</a></li>
                    <li><a href="#certificate" className="text-white hover:font-bold hover:text-yellow-500 mr-10">Certificate</a></li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen ? (
                <ul className="flex-col md:hidden mt-3">
                    <li className="py-1 ml-10"><a href="#profile" className="text-white hover:font-bold hover:text-yellow-500">Profile</a></li>
                    <li className="py-1 ml-10"><a href="#project" className="text-white hover:font-bold hover:text-yellow-500">Project</a></li>
                    <li className="py-1 ml-10"><a href="#certificate" className="text-white hover:font-bold hover:text-yellow-500  ">Certificate</a></li>
                </ul>
            ) : null}

        </nav>
    );
}

export default Navbar;
