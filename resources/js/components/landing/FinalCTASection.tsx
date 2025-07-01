import { router } from '@inertiajs/react';

export default function FinalCTASection() {
    const handleAuditClick = () => {
        router.visit('/audit');
    };

    const handleContactClick = () => {
        // Open email client
        window.location.href = 'mailto:meg@gpds.systems?subject=I want to discuss my system needs';
    };

    return (
        <section className="py-8 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Main CTA Content */}
                <div className="mx-auto max-w-4xl text-center">
                    {/* Headline */}
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                        Ready for a system that works{' '}
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                            with you
                        </span>{' '}
                        — not against you?
                    </h2>
                    
                    {/* Supporting Text */}
                    <p className="mt-3 text-lg leading-6 text-blue-100">
                        Stop fighting your tools. Start growing your business.
                    </p>
                    
                    {/* Value Props */}
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                            <h3 className="font-semibold text-white mb-1 text-sm">24-Hour Setup</h3>
                            <p className="text-blue-200 text-xs">From chaos to clarity in one day</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                            <h3 className="font-semibold text-white mb-1 text-sm">Zero Learning Curve</h3>
                            <p className="text-blue-200 text-xs">Intuitive systems that make sense</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                            <h3 className="font-semibold text-white mb-1 text-sm">Guaranteed Growth</h3>
                            <p className="text-blue-200 text-xs">Or we'll refund and rebuild</p>
                        </div>
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <button 
                            onClick={handleAuditClick}
                            className="bg-yellow-500 hover:bg-yellow-400 px-6 py-3 text-lg font-bold text-gray-900 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                        >
                            <span>Start My Free Audit</span>
                        </button>
                        
                        <div className="text-white text-sm font-medium">or</div>
                        
                        <button 
                            onClick={handleContactClick}
                            className="bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 px-6 py-3 text-lg font-semibold text-white rounded-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2"
                        >
                            <span>Message MEG</span>
                        </button>
                    </div>
                    
                    {/* Contact Options */}
                    <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-blue-200">
                        <div className="flex items-center space-x-1">
                            <span className="text-xs">meg@gpds.systems</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="text-xs">Telegram: @MEGSystemBuilder</span>
                        </div>
                    </div>
                    
                    {/* Trust Signals */}
                    <div className="mt-6 pt-4 border-t border-white/20">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-blue-200">
                            <div className="flex items-center space-x-1">
                                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                <span className="text-xs">Free systems audit included</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                <span className="text-xs">30-day money-back guarantee</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                <span className="text-xs">White-glove setup service</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Bottom Quote */}
                <div className="mt-6 text-center">
                    <blockquote className="text-sm italic text-blue-200 max-w-2xl mx-auto">
                        "The best system is the one you actually use. That's why we build simple, powerful tools that grow with you — not against you."
                    </blockquote>
                    <div className="mt-2 text-blue-300">
                        <span className="font-semibold text-xs">— MEG, Founder & System Architect</span>
                    </div>
                </div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
}
