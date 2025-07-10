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
        <nav className="bg-white/10 shadow-sm border-b border-[#c7af6e]/40 backdrop-blur sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left: Brand */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="w-12 h-12 rounded-full bg-[#c7af6e]/20 overflow-hidden">
                                <img 
                                    src="/Images/GPDS Logo.png" 
                                    alt="GPDS Logo" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-2xl font-bold text-white drop-shadow">GPDS</span>
                        </Link>
                    </div>

                    {/* Center/Right: Navigation Items (Desktop) */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        {/* Home */}
                        <Link 
                            href="/" 
                            className={`text-white hover:text-[#c7af6e] px-3 py-2 text-sm font-medium transition-colors ${
                                currentRoute === '/' ? 'text-[#c7af6e] border-b-2 border-[#c7af6e]' : ''
                            } drop-shadow`}
                        >
                            Home
                        </Link>

                        {/* System Kits Dropdown */}
                        <div className="relative">
                            <button
                                onMouseEnter={handleDropdownEnter}
                                onMouseLeave={handleDropdownLeave}
                                className={`text-white hover:text-[#c7af6e] px-3 py-2 text-sm font-medium transition-colors ${
                                    currentRoute.startsWith('/kits') ? 'text-[#c7af6e]' : ''
                                } drop-shadow`}
                            >
                                System Kits
                            </button>

                            {/* Dropdown Menu */}
                            {isSystemKitsOpen && (
                                <div 
                                    className="absolute top-full left-0 mt-1 w-80 bg-white/10 rounded-lg shadow-lg border border-[#c7af6e]/40 py-2 z-50 backdrop-blur"
                                    onMouseEnter={handleDropdownEnter}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    <Link
                                        href="/kits"
                                        className="block px-4 py-3 text-sm text-white hover:bg-[#c7af6e]/20 border-b border-[#c7af6e]/20"
                                    >
                                        <div className="font-semibold">View All System Kits</div>
                                        <div className="text-xs text-[#c7af6e] mt-1">Browse all available systems</div>
                                    </Link>
                                    
                                    {systemKits.map((kit, index) => (
                                        <Link
                                            key={index}
                                            href={kit.href}
                                            className="block px-4 py-3 text-sm text-white hover:bg-[#c7af6e]/20"
                                        >
                                            <div className="font-semibold">{kit.name}</div>
                                            <div className="text-xs text-[#c7af6e] mt-1">{kit.subtitle}</div>
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
                                className={`text-white hover:text-[#c7af6e] px-3 py-2 text-sm font-medium transition-colors ${
                                    currentRoute === item.href ? 'text-[#c7af6e] border-b-2 border-[#c7af6e]' : ''
                                } drop-shadow`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* CTA Button */}
                        <button
                            onClick={handleAuditClick}
                            className="bg-[#c7af6e] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-white hover:text-[#c7af6e] transition-colors shadow-sm ml-4 drop-shadow"
                        >
                            Start My Free Audit
                        </button>

                        {/* Login Button */}
                        <button
                            onClick={handleLoginClick}
                            className="text-white hover:text-[#c7af6e] px-3 py-2 text-sm font-medium transition-colors flex items-center drop-shadow"
                        >
                            Login
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white hover:text-[#c7af6e] px-3 py-2 text-sm font-medium"
                        >
                            {isMobileMenuOpen ? 'Close' : 'Menu'}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t border-[#c7af6e]/40 py-4 bg-white/10 backdrop-blur">
                        <div className="space-y-2">
                            <Link href="/" className="block px-3 py-2 text-base font-medium text-white hover:text-[#c7af6e]">Home</Link>
                            
                            {/* Mobile System Kits */}
                            <div>
                                <div className="px-3 py-2 text-base font-medium text-white">System Kits</div>
                                <div className="pl-6 space-y-1">
                                    <Link href="/kits" className="block px-3 py-2 text-sm text-[#c7af6e] hover:text-white">View All Kits</Link>
                                    {systemKits.map((kit, index) => (
                                        <Link
                                            key={index}
                                            href={kit.href}
                                            className="block px-3 py-2 text-sm text-[#c7af6e] hover:text-white"
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
                                    className="block px-3 py-2 text-base font-medium text-white hover:text-[#c7af6e]"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            {/* Mobile CTAs */}
                            <div className="pt-4 space-y-2">
                                <button
                                    onClick={handleAuditClick}
                                    className="w-full bg-[#c7af6e] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-white hover:text-[#c7af6e] transition-colors drop-shadow"
                                >
                                    Start My Free Audit
                                </button>
                                <button
                                    onClick={handleLoginClick}
                                    className="w-full text-white border border-[#c7af6e] px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#c7af6e] hover:text-white transition-colors drop-shadow"
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
