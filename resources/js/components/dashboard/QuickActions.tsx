import { router } from '@inertiajs/react';

export default function QuickActions() {
    const actions = [
        {
            name: 'Add New Kit',
            description: 'Browse and add a new system to your dashboard',
            icon: '➕',
            color: 'bg-blue-600',
            href: '/kits',
        },
        {
            name: 'View All Leads',
            description: 'Check your latest leads and conversions',
            icon: '👥',
            color: 'bg-green-600',
            href: '/dashboard/leads',
        },
        {
            name: 'Performance Report',
            description: 'See how your systems are performing',
            icon: '📊',
            color: 'bg-purple-600',
            href: '/dashboard/performance',
        },
        {
            name: 'Book Support',
            description: 'Get help from our expert team',
            icon: '💬',
            color: 'bg-orange-600',
            href: '/dashboard/support',
        },
    ];

    const handleActionClick = (href: string) => {
        router.visit(href);
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {actions.map((action) => (
                    <button
                        key={action.name}
                        onClick={() => handleActionClick(action.href)}
                        className="text-left p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 group"
                    >
                        <div className="flex items-center mb-3">
                            <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center text-white text-lg`}>
                                {action.icon}
                            </div>
                        </div>
                        
                        <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                            {action.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                            {action.description}
                        </p>
                    </button>
                ))}
            </div>
        </div>
    );
}
