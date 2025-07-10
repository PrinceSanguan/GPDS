import { router } from '@inertiajs/react';

export default function QuickActions() {
    const actions = [
        {
            name: 'Add New Kit',
            description: 'Browse and add a new system to your dashboard',
            icon: '➕',
            color: 'bg-[#c7af6e]',
            href: '/kits',
        },
        {
            name: 'View All Leads',
            description: 'Check your latest leads and conversions',
            icon: '👥',
            color: 'bg-[#c7af6e]',
            href: '/dashboard/leads',
        },
        {
            name: 'Performance Report',
            description: 'See how your systems are performing',
            icon: '📊',
            color: 'bg-[#c7af6e]',
            href: '/dashboard/performance',
        },
        {
            name: 'Book Support',
            description: 'Get help from our expert team',
            icon: '💬',
            color: 'bg-[#c7af6e]',
            href: '/dashboard/support',
        },
    ];

    const handleActionClick = (href: string) => {
        router.visit(href);
    };

    return (
        <div className="bg-white/20 backdrop-blur-xl rounded-xl shadow-lg border border-[#c7af6e] p-6">
            <h3 className="text-lg font-semibold text-white mb-4 drop-shadow-lg">
                Quick Actions
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {actions.map((action) => (
                    <button
                        key={action.name}
                        onClick={() => handleActionClick(action.href)}
                        className="text-left p-4 rounded-lg border border-[#c7af6e]/30 hover:border-[#c7af6e] hover:shadow-lg transition-all duration-200 group bg-white/10 backdrop-blur-md"
                    >
                        <div className="flex items-center mb-3">
                            <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center text-[#004aad] text-lg shadow-md`}>
                                {action.icon}
                            </div>
                        </div>
                        
                        <h4 className="font-semibold text-white mb-1 group-hover:text-[#c7af6e] drop-shadow-lg transition-colors">
                            {action.name}
                        </h4>
                        <p className="text-sm text-[#c7af6e] drop-shadow-lg">
                            {action.description}
                        </p>
                    </button>
                ))}
            </div>
        </div>
    );
}
