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
        <section className="py-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Main CTA Content */}
                <div className="mx-auto max-w-4xl text-center">
                    {/* Headline */}
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl drop-shadow-lg">
                        Ready for a system that works{' '}
                        <span className="bg-gradient-to-r from-[#c7af6e] to-white bg-clip-text text-transparent">
                            with you
                        </span>{' '}
                         not against you?
                    </h2>
                    {/* Supporting Text */}
                    <p className="mt-3 text-lg leading-6 text-[#c7af6e] drop-shadow">
                        Stop fighting your tools. Start growing your business.
                    </p>
                    {/* Value Props */}
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-[#c7af6e]/40 shadow-lg">
                            <h3 className="font-semibold text-white mb-1 text-sm drop-shadow">24-Hour Setup</h3>
                            <p className="text-[#c7af6e] text-xs drop-shadow">From chaos to clarity in one day</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-[#c7af6e]/40 shadow-lg">
                            <h3 className="font-semibold text-white mb-1 text-sm drop-shadow">Zero Learning Curve</h3>
                            <p className="text-[#c7af6e] text-xs drop-shadow">Intuitive systems that make sense</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-[#c7af6e]/40 shadow-lg">
                            <h3 className="font-semibold text-white mb-1 text-sm drop-shadow">Guaranteed Growth</h3>
                            <p className="text-[#c7af6e] text-xs drop-shadow">Or we'll refund and rebuild</p>
                        </div>
                    </div>
                    {/* CTA Buttons */}
                    <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <button 
                            onClick={handleAuditClick}
                            className="bg-[#c7af6e] hover:bg-white px-6 py-3 text-lg font-bold text-white hover:text-[#c7af6e] rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                        >
                            <span>Start My Free Audit</span>
                        </button>
                        <div className="text-white text-sm font-medium drop-shadow">or</div>
                        <button 
                            onClick={handleContactClick}
                            className="bg-white/10 hover:bg-[#c7af6e] px-6 py-3 text-lg font-bold text-white hover:text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-2 border-[#c7af6e]"
                        >
                            <span>Contact Us</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
