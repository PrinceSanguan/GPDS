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
        <section className="py-32 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center mb-20">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                        System Kits
                    </h2>
                    <p className="text-xl leading-8 text-gray-600 mb-4">
                        Pre-built business systems designed for your specific industry
                    </p>
                    <p className="text-lg text-gray-500">
                        No more cobbling together random tools. Get everything you need in one package.
                    </p>
                </div>
                
                {/* System Kits Grid */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 mb-20">
                    {systemKits.map((kit, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                                kit.popular 
                                    ? 'border-blue-500 ring-4 ring-blue-100' 
                                    : 'border-gray-200 hover:border-blue-300'
                            }`}
                        >
                            {kit.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            
                            <div className="p-8">
                                {/* Header */}
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {kit.title}
                                    </h3>
                                    <p className="text-sm text-blue-600 font-medium mb-4">
                                        {kit.subtitle}
                                    </p>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-gray-900">
                                            {kit.price}
                                        </span>
                                        <span className="text-gray-500 ml-2">one-time</span>
                                    </div>
                                </div>
                                
                                {/* Description */}
                                <p className="text-gray-600 text-center mb-8 leading-relaxed">
                                    {kit.description}
                                </p>
                                
                                {/* Features */}
                                <div className="mb-8">
                                    <h4 className="font-semibold text-gray-900 mb-4 text-center">
                                        What's included:
                                    </h4>
                                    <ul className="space-y-3">
                                        {kit.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                {/* Tech Stack & Benefit */}
                                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                                    <div className="text-center">
                                        <p className="text-sm text-gray-600 mb-2">
                                            <span className="font-medium">Tech Stack:</span> {kit.techStack}
                                        </p>
                                        <p className="text-sm font-medium text-blue-600">
                                            {kit.benefit}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* CTA Button */}
                                <button
                                    onClick={() => handleViewKit(kit.href)}
                                    className={`w-full py-4 px-6 rounded-lg text-sm font-semibold transition-all duration-200 ${
                                        kit.popular
                                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                                            : 'bg-gray-900 text-white hover:bg-gray-800'
                                    }`}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <div className="bg-gray-50 rounded-2xl p-12 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Need Something Custom?
                        </h3>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Can't find the perfect fit? We build custom systems tailored to your exact business needs and workflow.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={handleViewAllKits}
                                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                            >
                                View All Kits
                            </button>
                            <button className="bg-white border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
                                Request Custom Kit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
