interface StatsOverviewProps {
    stats: {
        totalLeads: number;
        totalBookings: number;
        totalAutomations: number;
        activeKits: number;
    };
}

type ChangeType = 'positive' | 'negative' | 'neutral';

export default function StatsOverview({ stats }: StatsOverviewProps) {
    const statItems = [
        {
            name: 'Total Leads Generated',
            value: stats.totalLeads.toLocaleString(),
            icon: '👥',
            color: 'text-green-600',
            bgColor: 'bg-green-50',
            change: '+12%',
            changeType: 'positive' as ChangeType,
        },
        {
            name: 'Bookings This Month',
            value: stats.totalBookings.toLocaleString(),
            icon: '📅',
            color: 'text-blue-600',
            bgColor: 'bg-blue-50',
            change: '+8%',
            changeType: 'positive' as ChangeType,
        },
        {
            name: 'Active Automations',
            value: stats.totalAutomations.toLocaleString(),
            icon: '⚙️',
            color: 'text-purple-600',
            bgColor: 'bg-purple-50',
            change: '+3',
            changeType: 'positive' as ChangeType,
        },
        {
            name: 'System Kits Running',
            value: stats.activeKits.toString(),
            icon: '🧩',
            color: 'text-orange-600',
            bgColor: 'bg-orange-50',
            change: 'Stable',
            changeType: 'neutral' as ChangeType,
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statItems.map((item) => (
                <div key={item.name} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 rounded-lg ${item.bgColor} flex items-center justify-center`}>
                            <span className="text-2xl">{item.icon}</span>
                        </div>
                        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            item.changeType === 'positive' 
                                ? 'text-green-700 bg-green-100' 
                                : item.changeType === 'negative'
                                ? 'text-red-700 bg-red-100'
                                : 'text-gray-700 bg-gray-100'
                        }`}>
                            {item.changeType === 'positive' && (
                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" />
                                </svg>
                            )}
                            {item.changeType === 'negative' && (
                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" />
                                </svg>
                            )}
                            {item.change}
                        </div>
                    </div>
                    
                    <div className="mt-4">
                        <div className={`text-3xl font-bold ${item.color} mb-1`}>
                            {item.value}
                        </div>
                        <div className="text-sm text-gray-600">
                            {item.name}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
