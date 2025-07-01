import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface SystemKit {
    id: string;
    title: string;
    subtitle: string;
    price: number;
    popular: boolean;
    description: string;
    features: string[];
    tech_stack: string;
    benefit: string;
}

interface SystemKitsIndexProps {
    kits: SystemKit[];
}

export default function SystemKitsIndex({ kits }: SystemKitsIndexProps) {
    return (
        <>
            <Head title="System Kits - GPDS" />
            
            <div className="min-h-screen bg-white">
                <Navbar currentRoute="/kits" />
                
                {/* Hero Section */}
                <div className="bg-gray-50 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                System Kits
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                                Complete business systems designed for your specific industry. No more cobbling together random tools.
                            </p>
                        </div>
                    </div>
                </div>

                {/* System Kits Grid */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {kits.map((kit) => (
                            <div
                                key={kit.id}
                                className={`relative rounded-lg border-2 p-8 shadow-sm ${
                                    kit.popular 
                                        ? 'border-blue-500 ring-2 ring-blue-500' 
                                        : 'border-gray-200'
                                }`}
                            >
                                {kit.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {kit.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-1">
                                        {kit.subtitle}
                                    </p>
                                    
                                    <div className="mt-6">
                                        <span className="text-4xl font-bold text-gray-900">
                                            ${kit.price}
                                        </span>
                                        <span className="text-gray-600 ml-1">one-time</span>
                                    </div>
                                    
                                    <p className="mt-4 text-gray-600">
                                        {kit.description}
                                    </p>
                                </div>
                                
                                <div className="mt-8">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-4">
                                        What's included:
                                    </h4>
                                    <ul className="space-y-2">
                                        {kit.features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                                    <p className="text-sm text-gray-700">
                                        <strong>Tech Stack:</strong> {kit.tech_stack}
                                    </p>
                                    <p className="text-sm text-blue-600 font-medium mt-2">
                                        {kit.benefit}
                                    </p>
                                </div>
                                
                                <div className="mt-8 space-y-3">
                                    <Link
                                        href={`/kits/${kit.id}`}
                                        className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                                    >
                                        View Details
                                    </Link>
                                    <Link
                                        href="/audit"
                                        className="block w-full text-center bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                                    >
                                        Start with Free Audit
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="bg-blue-600 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white">
                            Not Sure Which Kit is Right for You?
                        </h2>
                        <p className="mt-4 text-xl text-blue-100">
                            Get a free audit and we'll recommend the perfect system for your business.
                        </p>
                        <div className="mt-8">
                            <Link
                                href="/audit"
                                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Start My Free Audit
                            </Link>
                        </div>
                    </div>
                </div>
                
                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}
