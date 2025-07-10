import { router } from '@inertiajs/react';

export default function HeroSection() {
    const handleAuditClick = () => {
        router.visit('/audit');
    };

    const handleKitsClick = () => {
        router.visit('/kits');
    };

    return (
        <section className="relative py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="text-center">
                    {/* Main Headline */}
                    <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-lg">
                        The Smart, Simple{' '}
                        <span className="bg-gradient-to-r from-[#c7af6e] to-white bg-clip-text text-transparent">
                            System Builder
                        </span>{' '}
                        for Small Giants
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-[#c7af6e] sm:text-2xl drop-shadow">
                        Stop juggling 15 different tools. Get a custom business system that actually works together.
                        <span className="block mt-4 font-semibold text-white drop-shadow">
                        Not like GHL, we're smarter and simpler.
                        </span>
                    </p>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                        <button
                            onClick={handleAuditClick}
                            className="w-full sm:w-auto bg-[#c7af6e] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-[#c7af6e] transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            Get My Free System Audit
                        </button>
                        <button
                            onClick={handleKitsClick}
                            className="w-full sm:w-auto bg-white/10 text-white border-2 border-[#c7af6e] px-10 py-4 rounded-xl text-lg font-semibold hover:bg-[#c7af6e] hover:text-white transition-all duration-200"
                        >
                            Browse System Kits
                        </button>
                    </div>
                    
                    {/* Social Proof */}
                    <div className="border-t border-[#c7af6e]/40 pt-8">
                        <p className="text-sm text-[#c7af6e] mb-6 drop-shadow">
                            Trusted by 500+ growing businesses
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
                            <div className="h-8 w-24 bg-white/20 rounded"></div>
                            <div className="h-8 w-24 bg-white/20 rounded"></div>
                            <div className="h-8 w-24 bg-white/20 rounded"></div>
                            <div className="h-8 w-24 bg-white/20 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
