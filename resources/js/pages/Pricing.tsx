import { Head } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Pricing() {
    const pricingPlans = [
        {
            name: 'Launch & Go',
            subtitle: 'Perfect for VAs',
            price: '$497',
            description: 'Complete virtual assistant business system',
            features: [
                'Client portal & onboarding',
                'Project tracking system',
                'Automated invoicing',
                'Service delivery workflows',
                'Contract templates',
                'Payment processing setup'
            ],
            popular: false,
            cta: 'Get Launch & Go'
        },
        {
            name: 'Real Estate Success',
            subtitle: 'For Real Estate Agents',
            price: '$697',
            description: 'Complete lead generation and conversion system',
            features: [
                'Lead capture & qualification',
                'Automated follow-up sequences',
                'Property showcase system',
                'Closing coordination tools',
                'CRM integration',
                'SMS marketing setup'
            ],
            popular: true,
            cta: 'Get Real Estate Success'
        },
        {
            name: 'Local Biz CRM',
            subtitle: 'For Service Professionals',
            price: '$397',
            description: 'Streamlined local business management',
            features: [
                'Local SEO optimization',
                'Review management',
                'Appointment booking',
                'Customer communication',
                'Service area mapping',
                'Quote request forms'
            ],
            popular: false,
            cta: 'Get Local Biz CRM'
        }
    ];

    return (
        <>
            <Head title="Pricing - GPDS" />
            
            <div className="min-h-screen bg-white">
                <Navbar currentRoute="/pricing" />
                
                {/* Hero Section */}
                <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Simple, Transparent Pricing
                            </h1>
                            <p className="mt-6 text-xl leading-8 text-gray-600">
                                One-time payment. Complete system. No monthly fees or hidden costs.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pricing Grid */}
                <section className="py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            {pricingPlans.map((plan, index) => (
                                <div key={index} className={`relative bg-white rounded-2xl shadow-xl border-2 ${plan.popular ? 'border-blue-500 scale-105' : 'border-gray-200'} p-8`}>
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}
                                    
                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                                        <p className="text-blue-600 font-semibold mt-1">{plan.subtitle}</p>
                                        <div className="mt-6">
                                            <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                            <span className="text-gray-500 ml-2">one-time</span>
                                        </div>
                                        <p className="text-gray-600 mt-4">{plan.description}</p>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start">
                                                <span className="text-green-500 mr-3 mt-0.5">✓</span>
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                                        plan.popular 
                                            ? 'bg-blue-600 text-white hover:bg-blue-700' 
                                            : 'bg-gray-900 text-white hover:bg-gray-800'
                                    }`}>
                                        {plan.cta}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Custom Solutions */}
                <section className="py-24 bg-gray-50">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Need Something Custom?
                            </h2>
                            <p className="mt-6 text-lg text-gray-600">
                                We build bespoke systems for unique business requirements.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <div className="bg-white p-8 rounded-xl shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Build</h3>
                                <p className="text-gray-600 mb-6">
                                    Tailored system designed specifically for your business model, industry, and requirements.
                                </p>
                                <div className="space-y-2 mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Discovery & Planning:</span>
                                        <span className="font-semibold">$500</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Development & Setup:</span>
                                        <span className="font-semibold">$200/hour</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Training & Support:</span>
                                        <span className="font-semibold">Included</span>
                                    </div>
                                </div>
                                <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                                    Request Custom Quote
                                </button>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Solutions</h3>
                                <p className="text-gray-600 mb-6">
                                    Multi-location, team management, and advanced automation for larger organizations.
                                </p>
                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-green-500">✓</span>
                                        <span className="text-gray-600">Multi-user systems</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-green-500">✓</span>
                                        <span className="text-gray-600">Advanced reporting</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-green-500">✓</span>
                                        <span className="text-gray-600">Priority support</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-green-500">✓</span>
                                        <span className="text-gray-600">Ongoing optimization</span>
                                    </div>
                                </div>
                                <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Value Proposition */}
                <section className="py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Why Choose One-Time Payment?
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl font-bold text-green-600">$0</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">No Monthly Fees</h3>
                                <p className="text-gray-600">
                                    Pay once, own forever. No recurring subscriptions or hidden costs.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl font-bold text-blue-600">24h</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Setup</h3>
                                <p className="text-gray-600">
                                    Complete system deployment and training within 24 hours.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl font-bold text-purple-600">∞</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lifetime Value</h3>
                                <p className="text-gray-600">
                                    Your system grows with you. No limits on usage or features.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-gray-50">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-16">
                                Frequently Asked Questions
                            </h2>
                            
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        What's included in the one-time price?
                                    </h3>
                                    <p className="text-gray-600">
                                        Everything: system setup, customization, training, 30-day support, and all tools/integrations needed to run your business.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Do I need to pay for the tools used in the system?
                                    </h3>
                                    <p className="text-gray-600">
                                        Most tools we use have free tiers that work perfectly for small businesses. We'll help you choose the most cost-effective options.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        What if I need changes after setup?
                                    </h3>
                                    <p className="text-gray-600">
                                        Minor adjustments are included in your 30-day support. Major changes can be quoted separately at $150/hour.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Is there a money-back guarantee?
                                    </h3>
                                    <p className="text-gray-600">
                                        Yes! 30-day money-back guarantee if you're not completely satisfied with your system.
                                    </p>
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
                                Ready to Transform Your Business?
                            </h2>
                            <p className="text-xl text-blue-100 mb-8">
                                Start with a free systems audit to see which solution is perfect for you.
                            </p>
                            <button 
                                onClick={() => window.location.href = '/audit'}
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-lg"
                            >
                                Start My Free Audit
                            </button>
                        </div>
                    </div>
                </section>
                
                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}
