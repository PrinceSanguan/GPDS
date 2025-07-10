import { Head } from '@inertiajs/react';
import { useState } from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';

interface Client {
    id: string;
    name: string;
    email: string;
    kits: string[];
    status: 'active' | 'setup' | 'paused';
    lastActivity: string;
}

interface SetupTask {
    id: string;
    clientName: string;
    kitName: string;
    status: 'in-setup' | 'customizing' | 'ready-for-review' | 'launched';
    assignedTo: string;
    dueDate: string;
}

interface User {
    name: string;
    email: string;
    plan: string;
    role: 'admin' | 'va' | 'client';
}

interface TeamDashboardProps {
    user: User;
    clients: Client[];
    setupTasks: SetupTask[];
}

export default function TeamDashboard({ user, clients, setupTasks }: TeamDashboardProps) {
    const [selectedClient, setSelectedClient] = useState<string>('');
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        { id: 'overview', name: 'Overview', icon: '📊' },
        { id: 'clients', name: 'All Clients', icon: '👥' },
        { id: 'setup-queue', name: 'Setup Queue', icon: '🚧' },
        { id: 'templates', name: 'Kit Templates', icon: '📋' },
    ];

    const statusColors = {
        'in-setup': 'bg-yellow-100 text-yellow-800',
        'customizing': 'bg-blue-100 text-blue-800',
        'ready-for-review': 'bg-purple-100 text-purple-800',
        'launched': 'bg-green-100 text-green-800',
    };

    const clientStatusColors = {
        'active': 'bg-green-100 text-green-800',
        'setup': 'bg-yellow-100 text-yellow-800',
        'paused': 'bg-gray-100 text-gray-800',
    };

    return (
        <DashboardLayout user={user}>
            <Head title="Team Dashboard" />
            
            <div className="space-y-6">
                {/* Team Header */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
                    <h1 className="text-3xl font-bold text-[#004aad] mb-2">
                        Team Dashboard
                    </h1>
                    <p className="text-purple-100">
                        Manage client setups, assist with implementations, and track progress.
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <div className="text-2xl font-bold text-blue-600">{clients.length}</div>
                        <div className="text-sm text-gray-600">Total Clients</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <div className="text-2xl font-bold text-green-600">
                            {clients.filter(c => c.status === 'active').length}
                        </div>
                        <div className="text-sm text-gray-600">Active Clients</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <div className="text-2xl font-bold text-yellow-600">
                            {setupTasks.filter(t => t.status !== 'launched').length}
                        </div>
                        <div className="text-sm text-gray-600">Pending Setups</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <div className="text-2xl font-bold text-purple-600">
                            {setupTasks.filter(t => t.status === 'ready-for-review').length}
                        </div>
                        <div className="text-sm text-gray-600">Ready for Review</div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className="border-b border-gray-200">
                        <nav className="flex space-x-2 mb-6">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                        activeTab === tab.id
                                            ? 'bg-[#004aad] text-white'
                                            : 'bg-[#c7af6e]/20 text-[#004aad] hover:bg-[#c7af6e]/40'
                                    }`}
                                >
                                    <span className="mr-2">{tab.icon}</span>
                                    {tab.name}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="p-6">
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {/* Recent Tasks */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Tasks</h3>
                                        <div className="space-y-3">
                                            {setupTasks.slice(0, 5).map((task) => (
                                                <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                    <div className="flex-1">
                                                        <p className="text-sm font-medium text-gray-900">
                                                            {task.clientName} - {task.kitName}
                                                        </p>
                                                        <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
                                                    </div>
                                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                                        statusColors[task.status]
                                                    }`}>
                                                        {task.status.replace('-', ' ')}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quick Actions */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                                        <div className="space-y-3">
                                            <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                                <div className="flex items-center space-x-3">
                                                    <span className="text-lg">👥</span>
                                                    <div>
                                                        <p className="font-medium text-gray-900">Add New Client</p>
                                                        <p className="text-sm text-gray-600">Create a new client account</p>
                                                    </div>
                                                </div>
                                            </button>
                                            <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                                <div className="flex items-center space-x-3">
                                                    <span className="text-lg">📋</span>
                                                    <div>
                                                        <p className="font-medium text-gray-900">Create Kit Template</p>
                                                        <p className="text-sm text-gray-600">Build a new system template</p>
                                                    </div>
                                                </div>
                                            </button>
                                            <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                                <div className="flex items-center space-x-3">
                                                    <span className="text-lg">📊</span>
                                                    <div>
                                                        <p className="font-medium text-gray-900">Performance Report</p>
                                                        <p className="text-sm text-gray-600">View cross-client analytics</p>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'clients' && (
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900">All Clients</h3>
                                    <select
                                        value={selectedClient}
                                        onChange={(e) => setSelectedClient(e.target.value)}
                                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                                    >
                                        <option value="">All Clients</option>
                                        {clients.map((client) => (
                                            <option key={client.id} value={client.id}>
                                                {client.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Client
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Kits
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Last Activity
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {clients.map((client) => (
                                                <tr key={client.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div>
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {client.name}
                                                            </div>
                                                            <div className="text-sm text-gray-500">
                                                                {client.email}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                                            clientStatusColors[client.status]
                                                        }`}>
                                                            {client.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        {client.kits.length} kits
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {client.lastActivity}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                                                            Assist
                                                        </button>
                                                        <button className="text-gray-600 hover:text-gray-900">
                                                            View
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {activeTab === 'setup-queue' && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-6">Setup Queue Board</h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                    {['in-setup', 'customizing', 'ready-for-review', 'launched'].map((status) => (
                                        <div key={status} className="bg-gray-50 rounded-lg p-4">
                                            <h4 className="font-medium text-gray-900 mb-3 capitalize">
                                                {status.replace('-', ' ')}
                                            </h4>
                                            <div className="space-y-3">
                                                {setupTasks
                                                    .filter(task => task.status === status)
                                                    .map((task) => (
                                                        <div
                                                            key={task.id}
                                                            className="bg-white p-3 rounded-lg shadow-sm border border-gray-200"
                                                        >
                                                            <p className="font-medium text-sm text-gray-900">
                                                                {task.clientName}
                                                            </p>
                                                            <p className="text-xs text-gray-600 mb-2">
                                                                {task.kitName}
                                                            </p>
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-xs text-gray-500">
                                                                    {task.assignedTo}
                                                                </span>
                                                                <span className="text-xs text-gray-500">
                                                                    {task.dueDate}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'templates' && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Kit Templates</h3>
                                <p className="text-gray-600 mb-6">
                                    Manage and create new system kit templates for clients.
                                </p>
                                
                                <div className="bg-gray-50 rounded-lg p-8 text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-2xl">📋</span>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                        Template Management Coming Soon
                                    </h4>
                                    <p className="text-gray-600">
                                        This feature will allow you to create and manage kit templates.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
