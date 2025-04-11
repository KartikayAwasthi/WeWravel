import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../components/logo.png"; // Adjust path as per your folder structure
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Navbar - Fixed on top */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white p-4 shadow-md">
                <div className="container mx-auto flex items-center justify-between">
                    
                    {/* Logo */}
                    <Link to="/" className="flex items-center text-2xl font-bold">
                        <img 
                            src={logo} 
                            alt="WeWravel Logo" 
                            className="h-12 w-12 mr-2 rounded-full bg-yellow-500"
                        />
                    </Link>

                    {/* Navigation Links (Desktop) */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="hover:underline px-4 py-2 rounded-md hover:bg-yellow-300 transition hover:text-black hover:font-bold">
                            Home
                        </Link>
                        <Link to="/destinations" className="hover:underline px-4 py-2 rounded-md hover:bg-yellow-300 transition hover:text-black hover:font-bold">
                            Destinations
                        </Link>
                        <Link to="/about" className="hover:underline px-4 py-2 rounded-md hover:bg-yellow-300 transition hover:text-black hover:font-bold">
                            About Us
                        </Link>
                        <Link to="/reviews" className="hover:underline px-4 py-2 rounded-md hover:bg-yellow-300 transition hover:text-black hover:font-bold">
                            Reviews
                        </Link>
                        
                        <Link to="/contact" className="hover:underline px-4 py-2 rounded-md hover:bg-yellow-300 transition hover:text-black hover:font-bold">
                            Contact Us
                        </Link>
                        <Link to="/gallery" className="hover:underline px-4 py-2 rounded-md hover:bg-yellow-300 transition hover:text-black hover:font-bold">
                            Gallery
                        </Link>

                        {/* Instagram Icon (Desktop) */}
                        <a 
                            href="https://www.instagram.com/wewravel/reels/"  
                            target="_blank"  
                            rel="noopener noreferrer"
                            className="text-white hover:text-pink-500 transition text-2xl"
                        >
                            <FaInstagram />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <ul className="fixed top-[80px] left-0 w-full bg-black text-center z-40 md:hidden">
                    <li>
                        <Link to="/" className="block px-4 py-2 text-white hover:bg-yellow-300 transition hover:text-black hover:font-bold">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/destinations" className="block px-4 py-2 text-white hover:bg-yellow-300 transition hover:text-black hover:font-bold">
                            Destinations
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="block px-4 py-2 text-white hover:bg-yellow-300 transition hover:text-black hover:font-bold">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/reviews" className="block px-4 py-2 text-white hover:bg-yellow-300 transition hover:text-black hover:font-bold">
                            Reviews
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="block px-4 py-2 text-white hover:bg-yellow-300 transition hover:text-black hover:font-bold">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="block px-4 py-2 text-white hover:bg-yellow-300 transition hover:text-black hover:font-bold">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/gallery" className="block px-4 py-2 text-white hover:bg-yellow-300 transition hover:text-black hover:font-bold">
                            Gallery
                        </Link>
                    </li>
                    
                    {/* Instagram Icon (Mobile) */}
                    <li className="py-2">
                        <a 
                            href="https://www.instagram.com/wewravel/reels/"  
                            target="_blank"  
                            rel="noopener noreferrer"
                            className="text-white hover:text-pink-500 transition text-2xl"
                        >
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
            )}

            {/* Main Content Wrapper - Push content down to avoid overlap */}
            <div className="pt-[64px]">
                {/* Your main page content goes here */}
            </div>
        </>
    );
};

export default NavBar;
