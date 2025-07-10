import { Head, Link, useForm } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Background from '@/components/landing/Background';
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
        <Background>
            <Head title={`${kit.title} - System Kits - GPDS`} />
            <div className="min-h-screen flex flex-col">
                <Navbar currentRoute={`/kits/${kit.id}`} />
                {/* Hero Section */}
                <div className="py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <div className="flex items-center justify-center space-x-2 mb-4">
                                <Link href="/kits" className="text-white hover:text-[#c7af6e] text-sm transition-colors font-medium">
                                    ← Back to All Kits
                                </Link>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-lg">
                                {kit.title}
                            </h1>
                            <p className="text-xl text-[#c7af6e] mt-2 font-semibold drop-shadow">
                                {kit.subtitle}
                            </p>
                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90 drop-shadow">
                                {kit.description}
                            </p>
                            <div className="mt-8">
                                <span className="text-5xl font-bold text-white drop-shadow-lg">
                                    ${kit.price}
                                </span>
                                <span className="text-[#c7af6e] ml-2 text-lg font-semibold">one-time setup</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main Content */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 flex-1">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column - Details */}
                        <div className="lg:col-span-2">
                            {/* What's Included */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-white mb-6 drop-shadow">What's Included</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {kit.detailed_features.map((feature, index) => (
                                        <div key={index} className="flex items-start">
                                            <span className="w-2 h-2 bg-[#c7af6e] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="text-white/90 drop-shadow">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tools & Integrations */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-white mb-6 drop-shadow">Tools & Integrations</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {kit.included_tools.map((tool, index) => (
                                        <div key={index} className="border-2 border-[#c7af6e] bg-white/10 p-4 rounded-lg text-center shadow-lg">
                                            <span className="text-sm font-medium text-[#c7af6e] drop-shadow">{tool}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Success Stories */}
                            {kit.success_stories && kit.success_stories.length > 0 && (
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-white mb-6 drop-shadow">Success Stories</h2>
                                    <div className="space-y-6">
                                        {kit.success_stories.map((story, index) => (
                                            <div key={index} className="border-2 border-[#c7af6e] bg-white/10 p-6 rounded-lg shadow-lg">
                                                <blockquote className="text-[#c7af6e] italic mb-4 drop-shadow">
                                                    "{story.quote}"
                                                </blockquote>
                                                <div className="text-sm">
                                                    <div className="font-semibold text-white drop-shadow">{story.name}</div>
                                                    <div className="text-[#c7af6e] drop-shadow">{story.business}</div>
                                                    <div className="text-white font-medium mt-1 drop-shadow">{story.result}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* How It Works */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-white mb-6 drop-shadow">How It Works</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <span className="flex-shrink-0 w-8 h-8 bg-[#c7af6e] text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg">
                                            1
                                        </span>
                                        <div className="ml-4">
                                            <h3 className="font-semibold text-white drop-shadow">Purchase & Onboard</h3>
                                            <p className="text-white/90 mt-1 drop-shadow">
                                                Complete your purchase and we'll send you immediate access to your system setup guide.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="flex-shrink-0 w-8 h-8 bg-[#c7af6e] text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg">
                                            2
                                        </span>
                                        <div className="ml-4">
                                            <h3 className="font-semibold text-white drop-shadow">Custom Setup</h3>
                                            <p className="text-white/90 mt-1 drop-shadow">
                                                Our team customizes the system with your branding, workflows, and specific business needs.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="flex-shrink-0 w-8 h-8 bg-[#c7af6e] text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg">
                                            3
                                        </span>
                                        <div className="ml-4">
                                            <h3 className="font-semibold text-white drop-shadow">Launch & Support</h3>
                                            <p className="text-white/90 mt-1 drop-shadow">
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
                                <div className="border-2 border-[#c7af6e] bg-white/10 rounded-lg p-6 shadow-lg">
                                    <div className="text-center mb-6">
                                        <div className="text-3xl font-bold text-white drop-shadow-lg">
                                            ${kit.price}
                                        </div>
                                        <div className="text-[#c7af6e] font-semibold">one-time setup</div>
                                        <div className="text-sm text-white font-medium mt-2 drop-shadow">
                                            {kit.benefit}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <form onSubmit={handlePurchase}>
                                            <button
                                                type="submit"
                                                disabled={processing}
                                                className="w-full bg-[#c7af6e] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-white hover:text-[#c7af6e] transition-colors disabled:opacity-50 border-2 border-[#c7af6e] shadow"
                                            >
                                                {processing ? 'Processing...' : 'Get This System'}
                                            </button>
                                        </form>

                                        <div className="text-center text-sm text-white/80">
                                            or
                                        </div>

                                        <form onSubmit={handleBookSetup}>
                                            <button
                                                type="submit"
                                                disabled={processing}
                                                className="w-full bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-white hover:text-[#c7af6e] transition-colors disabled:opacity-50 shadow"
                                            >
                                                Book Setup Call
                                            </button>
                                        </form>

                                        <Link
                                            href="/audit"
                                            className="block w-full text-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-white hover:text-[#c7af6e] transition-colors shadow"
                                        >
                                            Start with Free Audit
                                        </Link>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-[#c7af6e]">
                                        <h4 className="font-semibold text-white mb-3 drop-shadow">What you get:</h4>
                                        <ul className="space-y-2 text-sm text-white/90">
                                            {kit.features.map((feature, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="w-1.5 h-1.5 bg-[#c7af6e] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-6 text-center">
                                        <p className="text-xs text-white/80">
                                            Questions? <Link href="/contact" className="text-[#c7af6e] hover:text-white underline">Contact us</Link>
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
        </Background>
    );
}
