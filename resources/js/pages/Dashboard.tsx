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
                <div className="bg-white/20 backdrop-blur-xl border border-[#c7af6e] rounded-xl p-8 text-white shadow-lg">
                    <h1 className="text-3xl font-bold mb-2 drop-shadow-lg">
                        Welcome back, {user.name}! Let's build smart today.
                    </h1>
                    <p className="text-[#c7af6e] text-lg drop-shadow-lg">
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
                            className={`px-4 py-2 rounded-lg font-medium transition-colors drop-shadow-lg border border-[#c7af6e]/30 ${
                                filterCategory === category
                                    ? 'bg-[#c7af6e] text-[#004aad] border-[#c7af6e]'
                                    : 'bg-white/10 text-white hover:bg-[#c7af6e]/20 hover:text-[#004aad]'
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
                        <h2 className="text-2xl font-bold text-white drop-shadow-lg">
                            Your Active Systems ({ownedKits.length})
                        </h2>
                        <button className="bg-[#c7af6e] text-[#004aad] px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#004aad] border border-[#c7af6e] shadow-md transition-colors">
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
                        <div className="bg-white/10 backdrop-blur-xl border border-[#c7af6e]/30 rounded-xl p-8 text-center shadow-lg">
                            <div className="w-16 h-16 bg-[#c7af6e]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl text-[#004aad]">🚀</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-lg">
                                No active systems yet
                            </h3>
                            <p className="text-[#c7af6e] mb-4 drop-shadow-lg">
                                Get started by adding your first system kit below.
                            </p>
                        </div>
                    )}
                </section>

                {/* Available Kits Section */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-white drop-shadow-lg">
                            Available System Kits
                        </h2>
                        <a 
                            href="/kits" 
                            className="text-[#c7af6e] font-semibold hover:text-white transition-colors drop-shadow-lg"
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
                <section className="bg-white/10 backdrop-blur-xl border border-[#c7af6e]/30 rounded-xl p-8 shadow-lg">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                                Need Help Getting Started?
                            </h3>
                            <p className="text-[#c7af6e] drop-shadow-lg">
                                Our team is here to help you set up and optimize your systems.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button className="bg-white text-[#004aad] border border-[#c7af6e] px-6 py-2 rounded-lg font-semibold hover:bg-[#c7af6e] hover:text-[#004aad] shadow-md transition-colors">
                                View Help Center
                            </button>
                            <button className="bg-[#c7af6e] text-[#004aad] px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#004aad] border border-[#c7af6e] shadow-md transition-colors">
                                Book Support Call
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </DashboardLayout>
    );
}
