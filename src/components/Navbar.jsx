import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const navigate = useNavigate(); // Corrected useNavigate usage

    const handleGetStarted = () => {
        navigate('/Create_account'); // Navigate to the Create Account page
    };

    const toggle = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                        <span className="text-xl tracking-tight">Travel Point</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12 py-2">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <button
                            onClick={() => navigate('/Login')}
                            className="py-2 px-3 border rounded-md">
                            Sign In
                        </button>
                        <button
                            onClick={handleGetStarted}
                            className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 border rounded-md">
                            Create Account
                        </button>
                    </div>
                    <div className="lg:hidden flex flex-col justify-end">
                        <button onClick={toggle}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 top-0 z-20 bg-neutral-900 w-full h-screen p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul className="space-y-4">
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href} className="text-white">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <button
                                onClick={() => navigate('/Login')}
                                className="py-6 px-3 border rounded-md">
                                Sign In
                            </button>
                            <button
                                onClick={handleGetStarted}
                                className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md text-neutral-50">
                                Create an Account
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
