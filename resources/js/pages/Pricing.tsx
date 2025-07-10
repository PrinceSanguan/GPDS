import { Head } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Background from '@/components/landing/Background';

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
            <Background>
                <Navbar currentRoute="/pricing" />
                <div className="py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-lg">Pricing</h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#c7af6e] drop-shadow">
                                Simple, transparent pricing. No hidden fees. One-time setup for each system kit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {pricingPlans.map((plan, idx) => (
                            <div
                                key={plan.name}
                                className={`relative rounded-lg border-2 p-8 shadow-lg bg-white/10 ${plan.popular ? 'border-[#c7af6e] ring-2 ring-[#c7af6e]' : 'border-[#c7af6e]/40'}`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-[#c7af6e] text-white px-4 py-1 rounded-full text-sm font-medium shadow">Most Popular</span>
                                    </div>
                                )}
                                <div className="text-center">
                                    <h2 className="text-2xl font-bold text-white drop-shadow">{plan.name}</h2>
                                    <div className="text-[#c7af6e] font-semibold mb-2">{plan.subtitle}</div>
                                    <div className="text-4xl font-bold text-white drop-shadow">{plan.price}</div>
                                    <p className="mt-2 text-white/90 drop-shadow">{plan.description}</p>
                                </div>
                                <ul className="mt-6 space-y-3 text-white/90">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <span className="w-2 h-2 bg-[#c7af6e] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-8 w-full bg-[#c7af6e] text-white font-semibold py-3 rounded-lg shadow hover:bg-white hover:text-[#c7af6e] transition-colors border-2 border-[#c7af6e]">{plan.cta}</button>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </Background>
        </>
    );
}
