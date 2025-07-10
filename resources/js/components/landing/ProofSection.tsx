export default function ProofSection() {
    const testimonials = [
        {
            quote: "20 discovery calls booked in 3 days",
            details: "After implementing the VA Launch & Go system, my calendar went from empty to completely booked. The automation handles everything while I focus on delivering results.",
            author: "Sarah M.",
            role: "Virtual Assistant",
            metric: "20 calls",
            timeframe: "3 days"
        },
        {
            quote: "From 2 to 18 leads/week after system launch",
            details: "The Real Estate system transformed my business overnight. I went from struggling to find leads to having more qualified prospects than I can handle.",
            author: "Mike R.",
            role: "Real Estate Agent",
            metric: "18 leads/week",
            timeframe: "vs 2 before"
        },
        {
            quote: "Finally, a CRM that doesn't make me want to scream",
            details: "I tried 5 different systems before GPDS. This is the first one that actually makes sense and doesn't require a PhD to operate.",
            author: "Jennifer L.",
            role: "Business Coach",
            metric: "5 systems tried",
            timeframe: "GPDS wins"
        }
    ];

    const stats = [
        { number: "500+", label: "Systems Deployed" },
        { number: "98%", label: "Client Satisfaction" },
        { number: "24hr", label: "Average Setup Time" },
        { number: "300%", label: "Average ROI Increase" }
    ];

    return (
        <section className="py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center mb-20">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6 drop-shadow-lg">
                        Proof & Results
                    </h2>
                    <p className="text-xl leading-8 text-[#c7af6e] mb-4 drop-shadow">
                        Real wins from real businesses using GPDS systems
                    </p>
                    <p className="text-lg text-white/80 drop-shadow">
                        Don't just take our word for it. See what happens when simple systems meet smart execution.
                    </p>
                </div>
                
                {/* Stats Grid */}
                <div className="mx-auto mb-20 max-w-4xl">
                    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white/10 rounded-xl p-8 text-center shadow-lg border-2 border-[#c7af6e] hover:shadow-xl transition-shadow">
                                <div className="text-4xl font-bold text-white mb-2 drop-shadow">{stat.number}</div>
                                <div className="text-sm text-[#c7af6e] font-medium drop-shadow">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Testimonials Grid */}
                <div className="mx-auto max-w-4xl">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="bg-white/10 rounded-xl p-8 shadow-lg border-2 border-[#c7af6e]">
                                <blockquote className="text-[#c7af6e] italic mb-4 drop-shadow">"{t.quote}"</blockquote>
                                <p className="text-white/90 mb-2 drop-shadow">{t.details}</p>
                                <div className="text-sm text-white font-semibold drop-shadow">{t.author}</div>
                                <div className="text-xs text-[#c7af6e] drop-shadow">{t.role}</div>
                                <div className="text-xs text-white/80 mt-2 drop-shadow">{t.metric} <span className="text-[#c7af6e]">{t.timeframe}</span></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
