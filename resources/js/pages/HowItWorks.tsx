import { Head } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Background from '@/components/landing/Background';

export default function HowItWorks() {
    return (
        <>
            <Head title="How It Works - GPDS" />
            <Background>
                <Navbar currentRoute="/how-it-works" />
                {/* Hero Section */}
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
                                How GPDS Works
                            </h1>
                            <p className="mt-6 text-xl leading-8 text-[#c7af6e] drop-shadow">
                                From system selection to full deployment in 24 hours. Here's exactly how we transform your business operations.
                            </p>
                        </div>
                    </div>
                </section>
                {/* Detailed Process */}
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl">
                            {/* Step 1 */}
                            <div className="mb-20">
                                <div className="flex items-start space-x-8">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-16 h-16 bg-[#c7af6e] rounded-full shadow-lg">
                                            <span className="text-2xl font-bold text-white">1</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-4 drop-shadow">Choose Your System Kit</h3>
                                        <p className="text-lg text-white/90 mb-6 drop-shadow">
                                            Select from our pre-built system kits designed for specific business types, or request a custom solution tailored to your unique needs.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="bg-white/10 p-4 rounded-lg shadow-lg">
                                                <h4 className="font-semibold text-[#c7af6e]">Real Estate Agents</h4>
                                                <p className="text-sm text-white/80 mt-1">Lead capture, nurturing, and closing systems</p>
                                            </div>
                                            <div className="bg-white/10 p-4 rounded-lg shadow-lg">
                                                <h4 className="font-semibold text-[#c7af6e]">Virtual Assistants</h4>
                                                <p className="text-sm text-white/80 mt-1">Client onboarding and service delivery</p>
                                            </div>
                                            <div className="bg-white/10 p-4 rounded-lg shadow-lg">
                                                <h4 className="font-semibold text-[#c7af6e]">Local Businesses</h4>
                                                <p className="text-sm text-white/80 mt-1">Customer management and local SEO</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Step 2 */}
                            <div className="mb-20">
                                <div className="flex items-start space-x-8">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-16 h-16 bg-[#c7af6e] rounded-full shadow-lg">
                                            <span className="text-2xl font-bold text-white">2</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-4 drop-shadow">Custom Brand Integration</h3>
                                        <p className="text-lg text-white/90 mb-6 drop-shadow">
                                            We customize everything with your branding, messaging, and workflow preferences. No generic templates here.
                                        </p>
                                        <div className="bg-white/10 p-6 rounded-lg shadow-lg">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-semibold text-[#c7af6e] mb-2">Visual Branding</h4>
                                                    <ul className="text-sm text-white/80 space-y-1">
                                                        <li>• Your logo and colors</li>
                                                        <li>• Custom email templates</li>
                                                        <li>• Branded client portals</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-[#c7af6e] mb-2">Workflow Customization</h4>
                                                    <ul className="text-sm text-white/80 space-y-1">
                                                        <li>• Your specific processes</li>
                                                        <li>• Custom automation rules</li>
                                                        <li>• Personalized messaging</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Step 3 */}
                            <div className="mb-20">
                                <div className="flex items-start space-x-8">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-16 h-16 bg-[#c7af6e] rounded-full shadow-lg">
                                            <span className="text-2xl font-bold text-white">3</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-4 drop-shadow">Deploy & Train</h3>
                                        <p className="text-lg text-white/90 mb-6 drop-shadow">
                                            We handle the technical setup and provide comprehensive training so you can start using your system immediately.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="bg-white/10 p-4 rounded-lg shadow-lg">
                                                <h4 className="font-semibold text-[#c7af6e] mb-2">Technical Setup</h4>
                                                <ul className="text-sm text-white/80 space-y-1">
                                                    <li>• All integrations configured</li>
                                                    <li>• Data migration if needed</li>
                                                    <li>• Testing and optimization</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white/10 p-4 rounded-lg shadow-lg">
                                                <h4 className="font-semibold text-[#c7af6e] mb-2">Training & Support</h4>
                                                <ul className="text-sm text-white/80 space-y-1">
                                                    <li>• Live training sessions</li>
                                                    <li>• Video tutorials</li>
                                                    <li>• 30-day support included</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Step 4 */}
                            <div>
                                <div className="flex items-start space-x-8">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-16 h-16 bg-[#c7af6e] rounded-full shadow-lg">
                                            <span className="text-2xl font-bold text-white">4</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-4 drop-shadow">Scale & Optimize</h3>
                                        <p className="text-lg text-white/90 mb-6 drop-shadow">
                                            Monitor performance, optimize workflows, and scale your operations as your business grows.
                                        </p>
                                        <div className="bg-white/10 p-6 rounded-lg shadow-lg">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div className="text-center">
                                                    <div className="text-2xl font-bold text-[#c7af6e]">24/7</div>
                                                    <div className="text-sm text-white/80">System Monitoring</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-2xl font-bold text-[#c7af6e]">30%</div>
                                                    <div className="text-sm text-white/80">Average Efficiency Gain</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-2xl font-bold text-[#c7af6e]">∞</div>
                                                    <div className="text-sm text-white/80">Scalability Potential</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Video Section */}
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                                See It In Action
                            </h2>
                            <p className="text-lg text-white/90 mb-8">
                                Watch how we transform a chaotic workflow into a streamlined system in under 2 minutes.
                            </p>
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <div className="aspect-video bg-[#004aad]/10 rounded-lg flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-[#004aad] rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        </div>
                                        <p className="text-[#004aad]/80">Video coming soon</p>
                                        <p className="text-sm text-[#004aad]/60 mt-1">2 minute system overview</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* CTA Section */}
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                                Ready to Get Started?
                            </h2>
                            <p className="text-xl text-[#c7af6e] mb-8">
                                Let's discuss which system kit is perfect for your business.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button 
                                    onClick={() => window.location.href = '/audit'}
                                    className="bg-[#c7af6e] text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-[#004aad] hover:text-[#c7af6e] transition-colors text-lg"
                                >
                                    Start My Free Audit
                                </button>
                                <button 
                                    onClick={() => window.location.href = '/kits'}
                                    className="border-2 border-[#c7af6e] text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-[#c7af6e] hover:text-white transition-colors text-lg"
                                >
                                    Browse System Kits
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <Footer />
            </Background>
        </>
    );
}
