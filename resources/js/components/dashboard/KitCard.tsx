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
            <div className="relative bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
                {/* Blur overlay */}
                <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-10 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <button
                            onClick={handleKitClick}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Unlock This System
                        </button>
                        {kit.price && (
                            <p className="text-sm text-gray-600 mt-2">
                                ${kit.price}/month
                            </p>
                        )}
                    </div>
                </div>

                {/* Card content (blurred) */}
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            categoryColors[kit.category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-700'
                        }`}>
                            <span className="mr-1">
                                {categoryIcons[kit.category as keyof typeof categoryIcons] || '📦'}
                            </span>
                            {kit.category === 'va' ? 'VA Business' :
                             kit.category === 'real-estate' ? 'Real Estate' :
                             kit.category === 'local-business' ? 'Local Business' :
                             kit.category === 'coaching' ? 'Coaching' : 'System'}
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {kit.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        {kit.description}
                    </p>

                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Leads Generated</span>
                            <span className="font-medium">---</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Bookings</span>
                            <span className="font-medium">---</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Automations</span>
                            <span className="font-medium">---</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div 
            onClick={handleKitClick}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 cursor-pointer group"
        >
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        categoryColors[kit.category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-700'
                    }`}>
                        <span className="mr-1">
                            {categoryIcons[kit.category as keyof typeof categoryIcons] || '📦'}
                        </span>
                        {kit.category === 'va' ? 'VA Business' :
                         kit.category === 'real-estate' ? 'Real Estate' :
                         kit.category === 'local-business' ? 'Local Business' :
                         kit.category === 'coaching' ? 'Coaching' : 'System'}
                    </div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {kit.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                    {kit.description}
                </p>

                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Leads Generated</span>
                        <span className="font-medium text-green-600">
                            {kit.stats.leads.toLocaleString()}
                        </span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Bookings</span>
                        <span className="font-medium text-blue-600">
                            {kit.stats.bookings.toLocaleString()}
                        </span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Automations</span>
                        <span className="font-medium text-purple-600">
                            {kit.stats.automations} active
                        </span>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Click to manage</span>
                        <div className="flex items-center text-blue-600 text-sm group-hover:translate-x-1 transition-transform">
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
