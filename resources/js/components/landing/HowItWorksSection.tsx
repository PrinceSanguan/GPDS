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
        <section className="py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center mb-20">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6 drop-shadow-lg">
                        How It Works
                    </h2>
                    <p className="text-xl leading-8 text-[#c7af6e] mb-4 drop-shadow">
                        We're not like other platforms. We're smarter, simpler, and actually work.
                    </p>
                    <p className="text-lg text-white/80 drop-shadow">
                        Three simple steps to transform your business operations
                    </p>
                </div>
                
                {/* Steps */}
                <div className="mx-auto max-w-4xl">
                    {steps.map((step, idx) => (
                        <div key={step.number} className="mb-20">
                            <div className="flex items-start space-x-8">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-16 h-16 bg-[#c7af6e] rounded-full shadow-lg">
                                        <span className="text-2xl font-bold text-white">{step.number}</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-4 drop-shadow">{step.title}</h3>
                                    <p className="text-lg text-white/90 mb-6 drop-shadow">{step.description}</p>
                                    <ul className="space-y-2 text-white/80">
                                        {step.details.map((detail, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="w-2 h-2 bg-[#c7af6e] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button
                        onClick={handleGetStarted}
                        className="bg-[#c7af6e] hover:bg-white text-white hover:text-[#c7af6e] px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                        Start My Free Audit
                    </button>
                    <button
                        onClick={handleViewDemo}
                        className="bg-white/10 hover:bg-[#c7af6e] text-white hover:text-white px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-[#c7af6e]"
                    >
                        See How It Works
                    </button>
                </div>
            </div>
        </section>
    );
}
