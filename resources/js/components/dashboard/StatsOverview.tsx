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
            color: 'text-[#c7af6e]',
            bgColor: 'bg-[#c7af6e]/20',
            change: '+12%',
            changeType: 'positive' as ChangeType,
        },
        {
            name: 'Bookings This Month',
            value: stats.totalBookings.toLocaleString(),
            icon: '📅',
            color: 'text-[#c7af6e]',
            bgColor: 'bg-[#c7af6e]/20',
            change: '+8%',
            changeType: 'positive' as ChangeType,
        },
        {
            name: 'Active Automations',
            value: stats.totalAutomations.toLocaleString(),
            icon: '⚙️',
            color: 'text-[#c7af6e]',
            bgColor: 'bg-[#c7af6e]/20',
            change: '+3',
            changeType: 'positive' as ChangeType,
        },
        {
            name: 'System Kits Running',
            value: stats.activeKits.toString(),
            icon: '🧩',
            color: 'text-[#c7af6e]',
            bgColor: 'bg-[#c7af6e]/20',
            change: 'Stable',
            changeType: 'neutral' as ChangeType,
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statItems.map((item) => (
                <div key={item.name} className="bg-white/20 backdrop-blur-xl rounded-xl shadow-lg border border-[#c7af6e] p-6">
                    <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 rounded-lg ${item.bgColor} flex items-center justify-center shadow-md`}>
                            <span className="text-2xl text-[#004aad]">{item.icon}</span>
                        </div>
                        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium drop-shadow-lg ${
                            item.changeType === 'positive' 
                                ? 'text-[#004aad] bg-[#c7af6e]/30' 
                                : item.changeType === 'negative'
                                ? 'text-red-700 bg-[#c7af6e]/30'
                                : 'text-[#c7af6e] bg-white/10'
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
                        <div className={`text-3xl font-bold ${item.color} mb-1 drop-shadow-lg`}>
                            {item.value}
                        </div>
                        <div className="text-sm text-[#c7af6e] drop-shadow-lg">
                            {item.name}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
