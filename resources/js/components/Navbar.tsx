import { useState } from 'react';
import { Link, router } from '@inertiajs/react';

interface NavbarProps {
    currentRoute?: string;
}

export default function Navbar({ currentRoute = '' }: NavbarProps) {
    const [isSystemKitsOpen, setIsSystemKitsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [dropdownTimer, setDropdownTimer] = useState<NodeJS.Timeout | null>(null);

    const systemKits = [
        { name: 'Launch & Go', subtitle: 'for VAs', href: '/kits/launch-and-go' },
        { name: 'Succeed in Real Estate', subtitle: 'for real estate agents', href: '/kits/real-estate-success' },
        { name: 'Local Biz CRM', subtitle: 'for service pros', href: '/kits/local-biz-crm' },
    ];

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Blog', href: '/blog' },
        { name: 'About', href: '/about' },
    ];

    const handleAuditClick = () => {
        router.visit('/audit');
    };

    const handleLoginClick = () => {
        router.visit('/login');
    };

    const handleDropdownEnter = () => {
        if (dropdownTimer) {
            clearTimeout(dropdownTimer);
            setDropdownTimer(null);
        }
        setIsSystemKitsOpen(true);
    };

    const handleDropdownLeave = () => {
        const timer = setTimeout(() => {
            setIsSystemKitsOpen(false);
        }, 300); // 300ms delay before closing
        setDropdownTimer(timer);
    };

    return (
        <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left: Brand */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="w-12 h-12 rounded-full bg-blue-100 overflow-hidden">
                                <img 
                                    src="/Images/GPDS Logo.png" 
                                    alt="GPDS Logo" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-2xl font-bold text-gray-900">GPDS</span>
                        </Link>
                    </div>

                    {/* Center/Right: Navigation Items (Desktop) */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        {/* Home */}
                        <Link 
                            href="/" 
                            className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors ${
                                currentRoute === '/' ? 'text-blue-600 border-b-2 border-blue-600' : ''
                            }`}
                        >
                            Home
                        </Link>

                        {/* System Kits Dropdown */}
                        <div className="relative">
                            <button
                                onMouseEnter={handleDropdownEnter}
                                onMouseLeave={handleDropdownLeave}
                                className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors ${
                                    currentRoute.startsWith('/kits') ? 'text-blue-600' : ''
                                }`}
                            >
                                System Kits
                            </button>

                            {/* Dropdown Menu */}
                            {isSystemKitsOpen && (
                                <div 
                                    className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                                    onMouseEnter={handleDropdownEnter}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    <Link
                                        href="/kits"
                                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100"
                                    >
                                        <div className="font-semibold">View All System Kits</div>
                                        <div className="text-xs text-gray-500 mt-1">Browse all available systems</div>
                                    </Link>
                                    
                                    {systemKits.map((kit, index) => (
                                        <Link
                                            key={index}
                                            href={kit.href}
                                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                                        >
                                            <div className="font-semibold">{kit.name}</div>
                                            <div className="text-xs text-gray-500 mt-1">{kit.subtitle}</div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Other Nav Items */}
                        {navItems.slice(1).map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors ${
                                    currentRoute === item.href ? 'text-blue-600 border-b-2 border-blue-600' : ''
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* CTA Button */}
                        <button
                            onClick={handleAuditClick}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm ml-4"
                        >
                            Start My Free Audit
                        </button>

                        {/* Login Button */}
                        <button
                            onClick={handleLoginClick}
                            className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                        >
                            Login
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                        >
                            {isMobileMenuOpen ? 'Close' : 'Menu'}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t border-gray-200 py-4">
                        <div className="space-y-2">
                            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                                Home
                            </Link>
                            
                            {/* Mobile System Kits */}
                            <div>
                                <div className="px-3 py-2 text-base font-medium text-gray-900">System Kits</div>
                                <div className="pl-6 space-y-1">
                                    <Link href="/kits" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                                        View All Kits
                                    </Link>
                                    {systemKits.map((kit, index) => (
                                        <Link
                                            key={index}
                                            href={kit.href}
                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                                        >
                                            {kit.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {navItems.slice(1).map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            {/* Mobile CTAs */}
                            <div className="pt-4 space-y-2">
                                <button
                                    onClick={handleAuditClick}
                                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Start My Free Audit
                                </button>
                                <button
                                    onClick={handleLoginClick}
                                    className="w-full text-gray-700 border border-gray-300 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
