import { router } from '@inertiajs/react';

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

interface KitCardProps {
    kit: Kit;
}

export default function KitCard({ kit }: KitCardProps) {
    const handleKitClick = () => {
        if (kit.status === 'owned') {
            router.visit(`/dashboard/kits/${kit.id}`);
        } else {
            router.visit(`/kits/${kit.id}`);
        }
    };

    const categoryIcons = {
        'va': '💼',
        'real-estate': '🏠',
        'local-business': '🏪',
        'coaching': '🎯',
    };

    const categoryColors = {
        'va': 'bg-purple-100 text-purple-700',
        'real-estate': 'bg-green-100 text-green-700',
        'local-business': 'bg-orange-100 text-orange-700',
        'coaching': 'bg-blue-100 text-blue-700',
    };

    if (kit.status === 'locked') {
        return (
            <div className="relative bg-white/20 backdrop-blur-xl rounded-xl shadow-lg border border-[#c7af6e] overflow-hidden hover:shadow-xl transition-shadow duration-200">
                {/* Blur overlay */}
                <div className="absolute inset-0 bg-white/70 backdrop-blur-md z-10 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-12 h-12 bg-[#c7af6e] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <button
                            onClick={handleKitClick}
                            className="bg-[#c7af6e] text-[#004aad] px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#004aad] transition-colors shadow-md"
                        >
                            Unlock This System
                        </button>
                        {kit.price && (
                            <p className="text-sm text-[#c7af6e] mt-2">
                                ${kit.price}/month
                            </p>
                        )}
                    </div>
                </div>

                {/* Card content (blurred) */}
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#c7af6e]/20 text-[#c7af6e] shadow">
                            <span className="mr-1">
                                {categoryIcons[kit.category as keyof typeof categoryIcons] || '📦'}
                            </span>
                            {kit.category === 'va' ? 'VA Business' :
                             kit.category === 'real-estate' ? 'Real Estate' :
                             kit.category === 'local-business' ? 'Local Business' :
                             kit.category === 'coaching' ? 'Coaching' : 'System'}
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-lg">
                        {kit.name}
                    </h3>
                    <p className="text-[#c7af6e] text-sm mb-4 drop-shadow-lg">
                        {kit.description}
                    </p>

                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-[#c7af6e]/80">Leads Generated</span>
                            <span className="font-medium text-white">---</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-[#c7af6e]/80">Bookings</span>
                            <span className="font-medium text-white">---</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-[#c7af6e]/80">Automations</span>
                            <span className="font-medium text-white">---</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div 
            onClick={handleKitClick}
            className="bg-white/20 backdrop-blur-xl rounded-xl shadow-lg border border-[#c7af6e] overflow-hidden hover:shadow-xl transition-all duration-200 cursor-pointer group"
        >
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#c7af6e]/20 text-[#c7af6e] shadow">
                        <span className="mr-1">
                            {categoryIcons[kit.category as keyof typeof categoryIcons] || '📦'}
                        </span>
                        {kit.category === 'va' ? 'VA Business' :
                         kit.category === 'real-estate' ? 'Real Estate' :
                         kit.category === 'local-business' ? 'Local Business' :
                         kit.category === 'coaching' ? 'Coaching' : 'System'}
                    </div>
                    <div className="w-3 h-3 bg-[#c7af6e] rounded-full shadow"></div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#c7af6e] drop-shadow-lg transition-colors">
                    {kit.name}
                </h3>
                <p className="text-[#c7af6e] text-sm mb-4 drop-shadow-lg">
                    {kit.description}
                </p>

                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-[#c7af6e]/80">Leads Generated</span>
                        <span className="font-medium text-white">
                            {kit.stats.leads.toLocaleString()}
                        </span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-[#c7af6e]/80">Bookings</span>
                        <span className="font-medium text-white">
                            {kit.stats.bookings.toLocaleString()}
                        </span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-[#c7af6e]/80">Automations</span>
                        <span className="font-medium text-white">
                            {kit.stats.automations} active
                        </span>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#c7af6e]/30">
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-[#c7af6e]/80">Click to manage</span>
                        <div className="flex items-center text-[#c7af6e] text-sm group-hover:translate-x-1 transition-transform">
                            <span>Open Kit</span>
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
