import { Head } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HowItWorks() {
    return (
        <>
            <Head title="How It Works - GPDS" />
            
            <div className="min-h-screen bg-white">
                <Navbar currentRoute="/how-it-works" />
                
                {/* Hero Section */}
                <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                How GPDS Works
                            </h1>
                            <p className="mt-6 text-xl leading-8 text-gray-600">
                                From system selection to full deployment in 24 hours. Here's exactly how we transform your business operations.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Detailed Process */}
                <section className="py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl">
                            {/* Step 1 */}
                            <div className="mb-20">
                                <div className="flex items-start space-x-8">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                                            <span className="text-2xl font-bold text-blue-600">1</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Your System Kit</h3>
                                        <p className="text-lg text-gray-600 mb-6">
                                            Select from our pre-built system kits designed for specific business types, or request a custom solution tailored to your unique needs.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <h4 className="font-semibold text-blue-900">Real Estate Agents</h4>
                                                <p className="text-sm text-blue-700 mt-1">Lead capture, nurturing, and closing systems</p>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg">
                                                <h4 className="font-semibold text-green-900">Virtual Assistants</h4>
                                                <p className="text-sm text-green-700 mt-1">Client onboarding and service delivery</p>
                                            </div>
                                            <div className="bg-purple-50 p-4 rounded-lg">
                                                <h4 className="font-semibold text-purple-900">Local Businesses</h4>
                                                <p className="text-sm text-purple-700 mt-1">Customer management and local SEO</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="mb-20">
                                <div className="flex items-start space-x-8">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                                            <span className="text-2xl font-bold text-green-600">2</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Brand Integration</h3>
                                        <p className="text-lg text-gray-600 mb-6">
                                            We customize everything with your branding, messaging, and workflow preferences. No generic templates here.
                                        </p>
                                        <div className="bg-gray-50 p-6 rounded-lg">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 mb-2">Visual Branding</h4>
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        <li>• Your logo and colors</li>
                                                        <li>• Custom email templates</li>
                                                        <li>• Branded client portals</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 mb-2">Workflow Customization</h4>
                                                    <ul className="text-sm text-gray-600 space-y-1">
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
                                        <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full">
                                            <span className="text-2xl font-bold text-purple-600">3</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Deploy & Train</h3>
                                        <p className="text-lg text-gray-600 mb-6">
                                            We handle the technical setup and provide comprehensive training so you can start using your system immediately.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="bg-yellow-50 p-4 rounded-lg">
                                                <h4 className="font-semibold text-yellow-900 mb-2">Technical Setup</h4>
                                                <ul className="text-sm text-yellow-800 space-y-1">
                                                    <li>• All integrations configured</li>
                                                    <li>• Data migration if needed</li>
                                                    <li>• Testing and optimization</li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg">
                                                <h4 className="font-semibold text-green-900 mb-2">Training & Support</h4>
                                                <ul className="text-sm text-green-800 space-y-1">
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
                                        <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full">
                                            <span className="text-2xl font-bold text-indigo-600">4</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Scale & Optimize</h3>
                                        <p className="text-lg text-gray-600 mb-6">
                                            Monitor performance, optimize workflows, and scale your operations as your business grows.
                                        </p>
                                        <div className="bg-indigo-50 p-6 rounded-lg">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div className="text-center">
                                                    <div className="text-2xl font-bold text-indigo-600">24/7</div>
                                                    <div className="text-sm text-indigo-800">System Monitoring</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-2xl font-bold text-indigo-600">30%</div>
                                                    <div className="text-sm text-indigo-800">Average Efficiency Gain</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-2xl font-bold text-indigo-600">∞</div>
                                                    <div className="text-sm text-indigo-800">Scalability Potential</div>
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
                <section className="py-24 bg-gray-50">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                                See It In Action
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Watch how we transform a chaotic workflow into a streamlined system in under 2 minutes.
                            </p>
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        </div>
                                        <p className="text-gray-600">Video coming soon</p>
                                        <p className="text-sm text-gray-500 mt-1">2 minute system overview</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-blue-600">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                                Ready to Get Started?
                            </h2>
                            <p className="text-xl text-blue-100 mb-8">
                                Let's discuss which system kit is perfect for your business.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button 
                                    onClick={() => window.location.href = '/audit'}
                                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                                >
                                    Start My Free Audit
                                </button>
                                <button 
                                    onClick={() => window.location.href = '/kits'}
                                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                                >
                                    Browse System Kits
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}
