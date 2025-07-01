import { router } from '@inertiajs/react';

export default function HowItWorksSection() {
    const steps = [
        {
            number: "1",
            title: "Pick Your System Kit",
            description: "Choose the pre-built system that matches your business type and needs.",
            details: [
                "Real Estate agents get lead capture & nurturing",
                "VAs get client onboarding & project management", 
                "Local businesses get booking & review systems",
                "Or request a custom solution"
            ]
        },
        {
            number: "2", 
            title: "We Deploy With Your Brand",
            description: "Our team customizes everything with your branding, workflows, and business rules.",
            details: [
                "Your colors, fonts, and visual identity",
                "Your specific business processes",
                "Your tone of voice and messaging",
                "Your integrations and tools"
            ]
        },
        {
            number: "3",
            title: "Plug In & Grow",
            description: "Launch your new system and watch your business run smoother than ever.",
            details: [
                "Automated lead capture and follow-up",
                "Streamlined client onboarding",
                "Efficient project management",
                "Data-driven growth insights"
            ]
        }
    ];

    const handleGetStarted = () => {
        router.visit('/audit');
    };

    const handleViewDemo = () => {
        router.visit('/how-it-works');
    };

    return (
        <section className="py-32 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center mb-20">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                        How It Works
                    </h2>
                    <p className="text-xl leading-8 text-gray-600 mb-4">
                        We're not like other platforms. We're smarter, simpler, and actually work.
                    </p>
                    <p className="text-lg text-gray-500">
                        Three simple steps to transform your business operations
                    </p>
                </div>
                
                {/* Steps */}
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 mb-20">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Connection Line (Desktop only) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent transform translate-x-8 z-0"></div>
                            )}
                            
                            {/* Step Content */}
                            <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                                {/* Step Number */}
                                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-600 rounded-full">
                                    <span className="text-2xl font-bold text-white">{step.number}</span>
                                </div>
                                
                                {/* Step Title */}
                                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                                    {step.title}
                                </h3>
                                
                                {/* Step Description */}
                                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                                    {step.description}
                                </p>
                                
                                {/* Step Details */}
                                <div className="space-y-3">
                                    {step.details.map((detail, detailIndex) => (
                                        <div key={detailIndex} className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-sm text-gray-600 leading-relaxed">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-200 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Ready to See Your System in Action?
                        </h3>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Start with a free audit to see exactly how we'd build your perfect business system.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={handleGetStarted}
                                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                            >
                                Start My Free Audit
                            </button>
                            <button
                                onClick={handleViewDemo}
                                className="bg-white border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
                            >
                                See How It Works
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
