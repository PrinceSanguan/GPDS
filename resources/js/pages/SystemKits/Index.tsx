import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Background from '@/components/landing/Background';

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
            <Background>
                <Navbar currentRoute="/kits" />
                {/* Hero Section */}
                <div className="py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-lg">
                                System Kits
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#c7af6e] drop-shadow">
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
                                className={`relative rounded-lg border-2 p-8 shadow-lg bg-white/10 ${
                                    kit.popular ? 'border-[#c7af6e] ring-2 ring-[#c7af6e]' : 'border-[#c7af6e]/40'
                                }`}
                            >
                                {kit.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-[#c7af6e] text-white px-4 py-1 rounded-full text-sm font-medium shadow">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <div className="text-center">
                                    <h2 className="text-2xl font-bold text-white drop-shadow">
                                        {kit.title}
                                    </h2>
                                    <div className="text-[#c7af6e] font-semibold mb-2">
                                        {kit.subtitle}
                                    </div>
                                    <div className="text-4xl font-bold text-white drop-shadow">
                                        ${kit.price}
                                    </div>
                                    <p className="mt-2 text-white/90 drop-shadow">
                                        {kit.description}
                                    </p>
                                </div>
                                <ul className="mt-6 space-y-3 text-white/90">
                                    {kit.features.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <span className="w-2 h-2 bg-[#c7af6e] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={`/kits/${kit.id}`}
                                    className="mt-8 block w-full bg-[#c7af6e] text-white font-semibold py-3 rounded-lg shadow hover:bg-white hover:text-[#c7af6e] transition-colors border-2 border-[#c7af6e] text-center"
                                >
                                    View Details
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </Background>
        </>
    );
}
