import { Head } from '@inertiajs/react';
import { useState } from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import KitCard from '@/components/dashboard/KitCard';
import StatsOverview from '@/components/dashboard/StatsOverview';
import QuickActions from '@/components/dashboard/QuickActions';

interface Kit {
    id: string;
    name: string;
    description: string;
    status: 'owned' | 'locked';
    category: string;
    stats: {
        leads: number;
        bookings: number;
        automations: number;
    };
    price?: number;
    image?: string;
}

interface User {
    name: string;
    email: string;
    plan: string;
}

interface DashboardProps {
    user: User;
    kits: Kit[];
    totalStats: {
        totalLeads: number;
        totalBookings: number;
        totalAutomations: number;
        activeKits: number;
    };
}

export default function Dashboard({ user, kits, totalStats }: DashboardProps) {
    const [filterCategory, setFilterCategory] = useState<string>('all');
    
    const ownedKits = kits.filter(kit => kit.status === 'owned');
    const lockedKits = kits.filter(kit => kit.status === 'locked');
    
    const filteredOwnedKits = filterCategory === 'all' 
        ? ownedKits 
        : ownedKits.filter(kit => kit.category === filterCategory);
    
    const filteredLockedKits = filterCategory === 'all' 
        ? lockedKits 
        : lockedKits.filter(kit => kit.category === filterCategory);

    const categories = ['all', 'va', 'real-estate', 'local-business', 'coaching'];

    return (
        <DashboardLayout user={user}>
            <Head title="Dashboard" />
            
            <div className="space-y-8">
                {/* Welcome Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
                    <h1 className="text-3xl font-bold mb-2">
                        Welcome back, {user.name}! Let's build smart today.
                    </h1>
                    <p className="text-blue-100 text-lg">
                        Your systems are working 24/7 to grow your business.
                    </p>
                </div>

                {/* Stats Overview */}
                <StatsOverview stats={totalStats} />

                {/* Quick Actions */}
                <QuickActions />

                {/* Kit Filter */}
                <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setFilterCategory(category)}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                filterCategory === category
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {category === 'all' ? 'All Kits' : 
                             category === 'va' ? 'VA Business' :
                             category === 'real-estate' ? 'Real Estate' :
                             category === 'local-business' ? 'Local Business' :
                             'Coaching'}
                        </button>
                    ))}
                </div>

                {/* Owned Kits Section */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">
                            Your Active Systems ({ownedKits.length})
                        </h2>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            + Add New Kit
                        </button>
                    </div>
                    
                    {filteredOwnedKits.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredOwnedKits.map(kit => (
                                <KitCard key={kit.id} kit={kit} />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-gray-50 rounded-xl p-8 text-center">
                            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl">🚀</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                No active systems yet
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Get started by adding your first system kit below.
                            </p>
                        </div>
                    )}
                </section>

                {/* Available Kits Section */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">
                            Available System Kits
                        </h2>
                        <a 
                            href="/kits" 
                            className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                        >
                            Browse All Kits →
                        </a>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredLockedKits.slice(0, 6).map(kit => (
                            <KitCard key={kit.id} kit={kit} />
                        ))}
                    </div>
                </section>

                {/* Help Section */}
                <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Need Help Getting Started?
                            </h3>
                            <p className="text-gray-600">
                                Our team is here to help you set up and optimize your systems.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button className="bg-white text-gray-700 border border-gray-300 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                                View Help Center
                            </button>
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                Book Support Call
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </DashboardLayout>
    );
}
