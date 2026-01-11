import React, { useState } from "react";
import { Link } from "react-router";
import { X, Menu } from "lucide-react";
function Header() {
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen)
    }
    const closeMenu = () => {
        setisMenuOpen(false)
    }
    return (
        <header className="border-b border-gray-800 fixed top-0 left-0 right-0 z-50 bg-[#18181b]/80 backdrop-blur-md">
            <nav className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link to={'/'} className="text-xl font-bold text-orange-500" onClick={() => closeMenu}>
                        PRCRAFT
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        <Link className="text-gray-300 hover:text-white transition-colors"
                            to={'/installation'}
                        >
                            Installation
                        </Link>

                        <Link className="text-gray-300 hover:text-white transition-colors"
                            to={'/docs'}
                        >
                            Documentation
                        </Link>

                        <a className="text-gray-300 hover:text-white transition-colors"
                            href="https://github.com/mohdaffann/prcraft"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </div>

                    <button className="md:hidden text-gray-300 hover:text-white transition-colors"
                        onClick={toggleMenu} aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-gray-800 pt-4">
                        <Link className="text-gray-300 hover:text-white transition-colors"
                            to={'/installation'}
                            onClick={closeMenu}
                        >
                            Installation
                        </Link>

                        <Link className="text-gray-300 hover:text-white transition-colors"
                            to={'/docs'}
                            onClick={closeMenu}
                        >
                            Documentation
                        </Link>

                        <a className="text-gray-300 hover:text-white transition-colors"
                            href="https://github.com/mohdaffann/prcraft"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header;
