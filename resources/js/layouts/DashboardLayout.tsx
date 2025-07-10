import { PropsWithChildren, useState } from 'react';
import { Link, router } from '@inertiajs/react';

interface User {
    name: string;
    email: string;
    plan: string;
}

interface DashboardLayoutProps extends PropsWithChildren {
    user: User;
}

export default function DashboardLayout({ user, children }: DashboardLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navigation = [
        { name: 'Dashboard', href: '/dashboard', icon: '🏠', current: true },
        { name: 'My Kits', href: '/dashboard/kits', icon: '🧩', current: false },
        { name: 'Performance', href: '/dashboard/performance', icon: '📊', current: false },
        { name: 'Automations', href: '/dashboard/automations', icon: '⚙️', current: false },
        { name: 'Leads & CRM', href: '/dashboard/leads', icon: '👥', current: false },
        { name: 'Bookings', href: '/dashboard/bookings', icon: '📅', current: false },
    ];

    const handleLogout = () => {
        router.post('/logout');
    };

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-[#004aad] via-[#004aad] to-[#c7af6e]">
            {/* Mobile sidebar backdrop */}
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 z-50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                >
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
                </div>
            )}

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white/20 backdrop-blur-xl shadow-lg border-r border-[#c7af6e] transform ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto lg:flex lg:flex-col`}>
                {/* Sidebar Header */}
                <div className="flex h-16 items-center justify-between px-6 border-b border-[#c7af6e] flex-shrink-0">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-[#004aad] overflow-hidden">
                            <img 
                                src="/Images/GPDS Logo.png" 
                                alt="GPDS Logo" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="text-xl font-bold text-white">GPDS</span>
                    </Link>
                    <button 
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden text-white hover:text-[#c7af6e]"
                    >
                        ✕
                    </button>
                </div>

                {/* Sidebar Navigation */}
                <div className="flex-1 flex flex-col min-h-0">
                    <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors drop-shadow-lg ${
                                    item.current
                                        ? 'bg-[#c7af6e]/20 text-[#c7af6e] border-r-2 border-[#c7af6e]'
                                        : 'text-white hover:text-[#c7af6e] hover:bg-[#c7af6e]/10'
                                }`}
                            >
                                <span className="mr-3 text-lg">{item.icon}</span>
                                {item.name}
                            </Link>
                        ))}

                        <div className="mt-8 pt-6 border-t border-[#c7af6e]/30">
                            <div className="space-y-1">
                                <Link
                                    href="/dashboard/settings"
                                    className="group flex items-center px-3 py-2 text-sm font-medium text-white rounded-lg hover:text-[#c7af6e] hover:bg-[#c7af6e]/10 transition-colors drop-shadow-lg"
                                >
                                    <span className="mr-3 text-lg">⚙️</span>
                                    Settings
                                </Link>
                                <Link
                                    href="/dashboard/support"
                                    className="group flex items-center px-3 py-2 text-sm font-medium text-white rounded-lg hover:text-[#c7af6e] hover:bg-[#c7af6e]/10 transition-colors drop-shadow-lg"
                                >
                                    <span className="mr-3 text-lg">💬</span>
                                    Support
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="w-full group flex items-center px-3 py-2 text-sm font-medium text-white rounded-lg hover:text-[#c7af6e] hover:bg-[#c7af6e]/10 transition-colors drop-shadow-lg"
                                >
                                    <span className="mr-3 text-lg">🚪</span>
                                    Logout
                                </button>
                            </div>
                        </div>
                    </nav>

                    {/* User info at bottom */}
                    <div className="flex-shrink-0 p-4 border-t border-[#c7af6e]/30 bg-white/10 backdrop-blur-md">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#004aad] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="ml-3 min-w-0 flex-1">
                                <p className="text-sm font-medium text-white truncate drop-shadow-lg">
                                    {user.name}
                                </p>
                                <p className="text-xs text-[#c7af6e] truncate drop-shadow-lg">
                                    {user.plan} Plan
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Top bar */}
                <div className="flex-shrink-0 bg-white/20 backdrop-blur-xl shadow-lg border-b border-[#c7af6e]">
                    <div className="flex h-16 items-center justify-between px-6">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="text-[#004aad] hover:text-[#c7af6e] lg:hidden"
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        <div className="flex items-center space-x-4">
                            {/* Notifications */}
                            <button className="relative p-2 text-[#004aad] hover:text-[#c7af6e] transition-colors">
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 7h6m-6 4h6m-6 4h4" />
                                </svg>
                                {/* Notification badge */}
                                <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#c7af6e] rounded-full"></span>
                            </button>

                            {/* Quick help */}
                            <Link
                                href="/dashboard/support"
                                className="bg-[#004aad] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#c7af6e] hover:text-[#004aad] transition-colors"
                            >
                                Need Help?
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Page content */}
                <main className="flex-1 py-8 px-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}