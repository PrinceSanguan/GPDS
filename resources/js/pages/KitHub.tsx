import { Head } from '@inertiajs/react';
import { useState } from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';

interface Kit {
    id: string;
    name: string;
    description: string;
    category: string;
    stats: {
        leads: number;
        bookings: number;
        automations: number;
        conversionRate: number;
    };
    lastActivity: string;
}

interface User {
    name: string;
    email: string;
    plan: string;
}

interface KitHubProps {
    user: User;
    kit: Kit;
}

export default function KitHub({ user, kit }: KitHubProps) {
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        { id: 'overview', name: 'Overview', icon: '📊' },
        { id: 'funnels', name: 'Funnels & Pages', icon: '🧩' },
        { id: 'automations', name: 'Automations', icon: '⚙️' },
        { id: 'leads', name: 'Leads & CRM', icon: '👥' },
        { id: 'bookings', name: 'Bookings', icon: '📅' },
        { id: 'performance', name: 'Performance', icon: '📈' },
        { id: 'settings', name: 'Settings', icon: '🔧' },
    ];

    const categoryIcons = {
        'va': '💼',
        'real-estate': '🏠',
        'local-business': '🏪',
        'coaching': '🎯',
    };

    return (
        <DashboardLayout user={user}>
            <Head title={`${kit.name} - Kit Hub`} />
            
            <div className="space-y-6">
                {/* Kit Header */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                                {categoryIcons[kit.category as keyof typeof categoryIcons] || '📦'}
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">{kit.name}</h1>
                                <p className="text-gray-600">{kit.description}</p>
                                <p className="text-sm text-gray-500 mt-1">
                                    Last activity: {kit.lastActivity}
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-2 text-green-600">
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                <span className="text-sm font-medium">Active</span>
                            </div>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                Quick Launch
                            </button>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <div className="text-2xl font-bold text-green-600">{kit.stats.leads}</div>
                        <div className="text-sm text-gray-600">Total Leads</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <div className="text-2xl font-bold text-blue-600">{kit.stats.bookings}</div>
                        <div className="text-sm text-gray-600">Bookings</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <div className="text-2xl font-bold text-purple-600">{kit.stats.automations}</div>
                        <div className="text-sm text-gray-600">Active Automations</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <div className="text-2xl font-bold text-orange-600">{kit.stats.conversionRate}%</div>
                        <div className="text-sm text-gray-600">Conversion Rate</div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className="border-b border-gray-200">
                        <nav className="flex space-x-8 px-6">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                                        activeTab === tab.id
                                            ? 'border-blue-500 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                                >
                                    <span>{tab.icon}</span>
                                    <span>{tab.name}</span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="p-6">
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {/* Recent Activity */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                                <div className="flex-1">
                                                    <p className="text-sm font-medium text-gray-900">New lead captured</p>
                                                    <p className="text-xs text-gray-500">2 minutes ago</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                                <div className="flex-1">
                                                    <p className="text-sm font-medium text-gray-900">Booking confirmed</p>
                                                    <p className="text-xs text-gray-500">1 hour ago</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                <div className="flex-1">
                                                    <p className="text-sm font-medium text-gray-900">Email sequence triggered</p>
                                                    <p className="text-xs text-gray-500">3 hours ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quick Actions */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                                        <div className="space-y-3">
                                            <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                                <div className="flex items-center space-x-3">
                                                    <span className="text-lg">✏️</span>
                                                    <div>
                                                        <p className="font-medium text-gray-900">Edit Funnel Pages</p>
                                                        <p className="text-sm text-gray-600">Customize your landing pages and forms</p>
                                                    </div>
                                                </div>
                                            </button>
                                            <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                                <div className="flex items-center space-x-3">
                                                    <span className="text-lg">🎨</span>
                                                    <div>
                                                        <p className="font-medium text-gray-900">Update Branding</p>
                                                        <p className="text-sm text-gray-600">Change colors, logo, and copy</p>
                                                    </div>
                                                </div>
                                            </button>
                                            <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                                <div className="flex items-center space-x-3">
                                                    <span className="text-lg">🔗</span>
                                                    <div>
                                                        <p className="font-medium text-gray-900">Share Funnel Link</p>
                                                        <p className="text-sm text-gray-600">Get your custom funnel URL</p>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'funnels' && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Funnels & Pages</h3>
                                <p className="text-gray-600">Manage your landing pages, forms, and conversion funnels.</p>
                                {/* Add funnel management interface here */}
                            </div>
                        )}

                        {activeTab === 'automations' && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Email & SMS Automations</h3>
                                <p className="text-gray-600">Configure your automated workflows and sequences.</p>
                                {/* Add automation management interface here */}
                            </div>
                        )}

                        {activeTab === 'leads' && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Leads & CRM</h3>
                                <p className="text-gray-600">View and manage your leads and customer relationships.</p>
                                {/* Add CRM interface here */}
                            </div>
                        )}

                        {activeTab === 'bookings' && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Settings</h3>
                                <p className="text-gray-600">Configure your appointment booking system.</p>
                                {/* Add booking management interface here */}
                            </div>
                        )}

                        {activeTab === 'performance' && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
                                <p className="text-gray-600">Analyze your system's performance and ROI.</p>
                                {/* Add analytics interface here */}
                            </div>
                        )}

                        {activeTab === 'settings' && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Kit Settings</h3>
                                <p className="text-gray-600">Configure your system settings and preferences.</p>
                                {/* Add settings interface here */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
