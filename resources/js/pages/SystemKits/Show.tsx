import { Head, Link, useForm } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FormEventHandler } from 'react';

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
    detailed_features: string[];
    included_tools: string[];
    success_stories?: Array<{
        name: string;
        business: string;
        result: string;
        quote: string;
    }>;
}

interface SystemKitShowProps {
    kit: SystemKit;
}

export default function SystemKitShow({ kit }: SystemKitShowProps) {
    const { post, processing } = useForm();
    
    const handlePurchase: FormEventHandler = (e) => {
        e.preventDefault();
        post(`/kits/${kit.id}/purchase`);
    };

    const handleBookSetup: FormEventHandler = (e) => {
        e.preventDefault();
        post(`/kits/${kit.id}/book-setup`);
    };

    return (
        <>
            <Head title={`${kit.title} - System Kits - GPDS`} />
            
            <div className="min-h-screen bg-white">
                <Navbar currentRoute={`/kits/${kit.id}`} />
                
                {/* Hero Section */}
                <div className="bg-gray-50 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <div className="flex items-center justify-center space-x-2 mb-4">
                                <Link href="/kits" className="text-blue-600 hover:text-blue-700 text-sm">
                                    ← Back to All Kits
                                </Link>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                {kit.title}
                            </h1>
                            <p className="text-xl text-gray-600 mt-2">
                                {kit.subtitle}
                            </p>
                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                                {kit.description}
                            </p>
                            
                            <div className="mt-8">
                                <span className="text-5xl font-bold text-gray-900">
                                    ${kit.price}
                                </span>
                                <span className="text-gray-600 ml-2 text-lg">one-time setup</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column - Details */}
                        <div className="lg:col-span-2">
                            {/* What's Included */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    What's Included
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {kit.detailed_features.map((feature, index) => (
                                        <div key={index} className="flex items-start">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tools & Integrations */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Tools & Integrations
                                </h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {kit.included_tools.map((tool, index) => (
                                        <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                                            <span className="text-sm font-medium text-gray-700">{tool}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Success Stories */}
                            {kit.success_stories && kit.success_stories.length > 0 && (
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                        Success Stories
                                    </h2>
                                    <div className="space-y-6">
                                        {kit.success_stories.map((story, index) => (
                                            <div key={index} className="bg-blue-50 p-6 rounded-lg">
                                                <blockquote className="text-gray-700 italic mb-4">
                                                    "{story.quote}"
                                                </blockquote>
                                                <div className="text-sm">
                                                    <div className="font-semibold text-gray-900">{story.name}</div>
                                                    <div className="text-gray-600">{story.business}</div>
                                                    <div className="text-blue-600 font-medium mt-1">{story.result}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* How It Works */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    How It Works
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full flex items-center justify-center">
                                            1
                                        </span>
                                        <div className="ml-4">
                                            <h3 className="font-semibold text-gray-900">Purchase & Onboard</h3>
                                            <p className="text-gray-600 mt-1">
                                                Complete your purchase and we'll send you immediate access to your system setup guide.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full flex items-center justify-center">
                                            2
                                        </span>
                                        <div className="ml-4">
                                            <h3 className="font-semibold text-gray-900">Custom Setup</h3>
                                            <p className="text-gray-600 mt-1">
                                                Our team customizes the system with your branding, workflows, and specific business needs.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full flex items-center justify-center">
                                            3
                                        </span>
                                        <div className="ml-4">
                                            <h3 className="font-semibold text-gray-900">Launch & Support</h3>
                                            <p className="text-gray-600 mt-1">
                                                Go live with your new system and get ongoing support to ensure smooth operations.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Purchase */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-8">
                                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm">
                                    <div className="text-center mb-6">
                                        <div className="text-3xl font-bold text-gray-900">
                                            ${kit.price}
                                        </div>
                                        <div className="text-gray-600">one-time setup</div>
                                        <div className="text-sm text-blue-600 font-medium mt-2">
                                            {kit.benefit}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <form onSubmit={handlePurchase}>
                                            <button
                                                type="submit"
                                                disabled={processing}
                                                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                                            >
                                                {processing ? 'Processing...' : 'Get This System'}
                                            </button>
                                        </form>

                                        <div className="text-center text-sm text-gray-500">
                                            or
                                        </div>

                                        <form onSubmit={handleBookSetup}>
                                            <button
                                                type="submit"
                                                disabled={processing}
                                                className="w-full bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors disabled:opacity-50"
                                            >
                                                Book Setup Call
                                            </button>
                                        </form>

                                        <Link
                                            href="/audit"
                                            className="block w-full text-center bg-gray-100 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                                        >
                                            Start with Free Audit
                                        </Link>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <h4 className="font-semibold text-gray-900 mb-3">
                                            What you get:
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            {kit.features.map((feature, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-6 text-center">
                                        <p className="text-xs text-gray-500">
                                            Questions? <Link href="/contact" className="text-blue-600 hover:text-blue-700">Contact us</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}
