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
        <section className="py-32 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center mb-20">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                        Proof & Results
                    </h2>
                    <p className="text-xl leading-8 text-gray-600 mb-4">
                        Real wins from real businesses using GPDS systems
                    </p>
                    <p className="text-lg text-gray-500">
                        Don't just take our word for it. See what happens when simple systems meet smart execution.
                    </p>
                </div>
                
                {/* Stats Grid */}
                <div className="mx-auto mb-20 max-w-4xl">
                    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Testimonials */}
                <div className="mx-auto mb-20 max-w-6xl">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                                {/* Quote Badge */}
                                <div className="mb-6">
                                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-4">
                                        <span className="font-bold text-blue-600 text-sm">"{testimonial.quote}"</span>
                                    </div>
                                </div>
                                
                                {/* Details */}
                                <p className="text-gray-600 mb-8 leading-relaxed italic">
                                    "{testimonial.details}"
                                </p>
                                
                                {/* Author & Metrics */}
                                <div className="flex items-end justify-between">
                                    <div>
                                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-bold text-blue-600">{testimonial.metric}</div>
                                        <div className="text-xs text-gray-500">{testimonial.timeframe}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Before/After Comparison */}
                <div className="mx-auto max-w-5xl">
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        From Chaos to Growth: The GPDS Transformation
                    </h3>
                    <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Before */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl font-bold text-red-600">×</span>
                                </div>
                                <h4 className="font-bold text-gray-900 mb-4 text-lg">Before GPDS</h4>
                                <ul className="text-gray-600 space-y-3">
                                    <li className="flex items-start space-x-2">
                                        <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>15+ different tools to manage</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Manual processes everywhere</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Inconsistent follow-up</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Stressed & overwhelmed</span>
                                    </li>
                                </ul>
                            </div>
                            
                            {/* Process */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl font-bold text-blue-600">→</span>
                                </div>
                                <h4 className="font-bold text-gray-900 mb-4 text-lg">24-Hour Setup</h4>
                                <ul className="text-gray-600 space-y-3">
                                    <li className="flex items-start space-x-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Custom system deployment</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Brand integration</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Training & support</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>System optimization</span>
                                    </li>
                                </ul>
                            </div>
                            
                            {/* After */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl font-bold text-green-600">✓</span>
                                </div>
                                <h4 className="font-bold text-gray-900 mb-4 text-lg">After GPDS</h4>
                                <ul className="text-gray-600 space-y-3">
                                    <li className="flex items-start space-x-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>1 integrated system</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>94% automation rate</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Consistent growth</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Peace of mind</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
