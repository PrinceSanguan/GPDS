import { router } from '@inertiajs/react';

export default function SystemKitsSection() {
    const systemKits = [
        {
            title: "Launch & Go",
            subtitle: "for VAs",
            description: "Complete virtual assistant business system with client onboarding, project management, and billing automation.",
            features: [
                "Client portal & onboarding",
                "Project tracking system",
                "Automated invoicing",
                "Service delivery workflows"
            ],
            techStack: "Notion + Stripe + Calendar + Email",
            benefit: "Land premium clients and deliver like a pro",
            price: "$497",
            popular: false,
            href: "/kits/launch-and-go"
        },
        {
            title: "Succeed in Real Estate",
            subtitle: "for real estate agents",
            description: "Everything you need to generate, nurture, and close more real estate leads without the tech headaches.",
            features: [
                "Lead capture & qualification",
                "Automated follow-up sequences",
                "Property showcase system",
                "Closing coordination tools"
            ],
            techStack: "CRM + Email + SMS + Calendly",
            benefit: "10x your lead conversion rate",
            price: "$697",
            popular: true,
            href: "/kits/real-estate-success"
        },
        {
            title: "Local Biz CRM",
            subtitle: "for service pros",
            description: "Streamlined system for local service businesses to attract, convert, and retain customers effortlessly.",
            features: [
                "Local SEO optimization",
                "Review management",
                "Appointment booking",
                "Customer communication"
            ],
            techStack: "WordPress + Reviews + Booking + SMS",
            benefit: "Dominate your local market",
            price: "$397",
            popular: false,
            href: "/kits/local-biz-crm"
        }
    ];

    const handleViewKit = (href: string) => {
        router.visit(href);
    };

    const handleViewAllKits = () => {
        router.visit('/kits');
    };

    return (
        <section className="py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center mb-20">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6 drop-shadow-lg">
                        System Kits
                    </h2>
                    <p className="text-xl leading-8 text-[#c7af6e] drop-shadow">
                        Complete business systems for every industry
                    </p>
                </div>
                
                {/* Kits Grid */}
                <div className="mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {systemKits.map((kit, index) => (
                            <div key={index} className={`relative bg-white/10 p-8 rounded-xl border-2 ${kit.popular ? 'border-[#c7af6e] ring-2 ring-[#c7af6e]' : 'border-[#c7af6e]/40'} shadow-lg`}>
                                {kit.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-[#c7af6e] text-white px-4 py-1 rounded-full text-sm font-medium shadow">Most Popular</span>
                                    </div>
                                )}
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-white drop-shadow">{kit.title}</h3>
                                    <div className="text-[#c7af6e] font-semibold mb-2">{kit.subtitle}</div>
                                    <div className="text-3xl font-bold text-white drop-shadow">{kit.price}</div>
                                    <p className="mt-2 text-white/90 drop-shadow">{kit.description}</p>
                                </div>
                                <ul className="mt-6 space-y-3 text-white/90">
                                    {kit.features.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <span className="w-2 h-2 bg-[#c7af6e] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={() => handleViewKit(kit.href)} className="mt-8 w-full bg-[#c7af6e] text-white font-semibold py-3 rounded-lg shadow hover:bg-white hover:text-[#c7af6e] transition-colors border-2 border-[#c7af6e]">View Details</button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Kits Button */}
                <div className="mt-12 flex justify-center">
                    <button onClick={handleViewAllKits} className="bg-white/10 text-white px-8 py-4 rounded-lg font-bold border-2 border-[#c7af6e] hover:bg-[#c7af6e] hover:text-white transition-all shadow-lg">View All Kits</button>
                </div>
            </div>
        </section>
    );
}
