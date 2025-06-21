import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo / Home Link */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/">
                            <span className="text-xl font-bold text-gray-900">Logo</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
                            Home
                        </Link>
                        
                        {/* System Kits Dropdown */}
                        <div className="relative">
                            <button 
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium flex items-center"
                            >
                                System Kits
                                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            
                            {isDropdownOpen && (
                                <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div className="py-1">
                                        <Link href="/system-kits/option1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Option 1
                                        </Link>
                                        <Link href="/system-kits/option2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Option 2
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        <Link href="/how-it-works" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
                            How It Works
                        </Link>
                        <Link href="/pricing" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
                            Pricing
                        </Link>
                        <Link href="/blog" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
                            Blog / Insights
                        </Link>
                        <Link href="/about" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
                            About
                        </Link>
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/free-audit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                            Start Free Audit
                        </Link>
                        <Link href="/login" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
                            Login
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50">
                            Home
                        </Link>
                        <Link href="/system-kits" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50">
                            System Kits
                        </Link>
                        <Link href="/how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50">
                            How It Works
                        </Link>
                        <Link href="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50">
                            Pricing
                        </Link>
                        <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50">
                            Blog / Insights
                        </Link>
                        <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50">
                            About
                        </Link>
                        <div className="pt-4 pb-2 border-t border-gray-200">
                            <Link href="/free-audit" className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-base font-medium text-center mb-2">
                                Start Free Audit
                            </Link>
                            <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;