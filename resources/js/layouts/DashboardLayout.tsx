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
        <div className="flex min-h-screen bg-gray-50">
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
            <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto lg:flex lg:flex-col`}>
                
                {/* Sidebar Header */}
                <div className="flex h-16 items-center justify-between px-6 border-b border-gray-200 flex-shrink-0">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 overflow-hidden">
                            <img 
                                src="/Images/GPDS Logo.png" 
                                alt="GPDS Logo" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="text-xl font-bold text-gray-900">GPDS</span>
                    </Link>
                    <button 
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden text-gray-400 hover:text-gray-600"
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
                                className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                                    item.current
                                        ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                            >
                                <span className="mr-3 text-lg">{item.icon}</span>
                                {item.name}
                            </Link>
                        ))}

                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <div className="space-y-1">
                                <Link
                                    href="/dashboard/settings"
                                    className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-gray-900 hover:bg-gray-50 transition-colors"
                                >
                                    <span className="mr-3 text-lg">⚙️</span>
                                    Settings
                                </Link>
                                <Link
                                    href="/dashboard/support"
                                    className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-gray-900 hover:bg-gray-50 transition-colors"
                                >
                                    <span className="mr-3 text-lg">💬</span>
                                    Support
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="w-full group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-gray-900 hover:bg-gray-50 transition-colors"
                                >
                                    <span className="mr-3 text-lg">🚪</span>
                                    Logout
                                </button>
                            </div>
                        </div>
                    </nav>

                    {/* User info at bottom */}
                    <div className="flex-shrink-0 p-4 border-t border-gray-200 bg-gray-50">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="ml-3 min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    {user.name}
                                </p>
                                <p className="text-xs text-gray-500 truncate">
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
                <div className="flex-shrink-0 bg-white shadow-sm border-b border-gray-200">
                    <div className="flex h-16 items-center justify-between px-6">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="text-gray-400 hover:text-gray-600 lg:hidden"
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        <div className="flex items-center space-x-4">
                            {/* Notifications */}
                            <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 7h6m-6 4h6m-6 4h4" />
                                </svg>
                                {/* Notification badge */}
                                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                            </button>

                            {/* Quick help */}
                            <Link
                                href="/dashboard/support"
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
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