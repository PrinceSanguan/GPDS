import { router } from '@inertiajs/react';

export default function HeroSection() {
    const handleAuditClick = () => {
        router.visit('/audit');
    };

    const handleKitsClick = () => {
        router.visit('/kits');
    };

    return (
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="text-center">
                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-6 py-3 text-sm font-medium text-blue-700">
                        Strategic System Builder for Growing Businesses
                    </div>
                    
                    {/* Main Headline */}
                    <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                        The Smart, Simple{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            System Builder
                        </span>{' '}
                        for Small Giants
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600 sm:text-2xl">
                        Stop juggling 15 different tools. Get a custom business system that actually works together.
                        <span className="block mt-4 font-semibold text-gray-900">
                            We're not GHL. We're smarter. Simpler. Saner.
                        </span>
                    </p>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                        <button
                            onClick={handleAuditClick}
                            className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            Get My Free System Audit
                        </button>
                        <button
                            onClick={handleKitsClick}
                            className="w-full sm:w-auto bg-white text-gray-900 border-2 border-gray-200 px-10 py-4 rounded-xl text-lg font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                        >
                            Browse System Kits
                        </button>
                    </div>
                    
                    {/* Social Proof */}
                    <div className="border-t border-gray-200 pt-8">
                        <p className="text-sm text-gray-500 mb-6">
                            Trusted by 500+ growing businesses
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                            <div className="h-8 w-24 bg-gray-200 rounded"></div>
                            <div className="h-8 w-24 bg-gray-200 rounded"></div>
                            <div className="h-8 w-24 bg-gray-200 rounded"></div>
                            <div className="h-8 w-24 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
