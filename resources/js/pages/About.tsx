import { Head } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Background from '@/components/landing/Background';

export default function About() {
    return (
        <>
            <Head title="About - GPDS" />
            <Background>
                <Navbar currentRoute="/about" />
                {/* Hero Section */}
                <div className="py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-lg">
                                About GPDS
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#c7af6e] drop-shadow">
                                We believe every business deserves systems that actually work. No more duct-tape solutions or overwhelming complexity.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Mission Section */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow">Our Mission</h2>
                            <div className="prose text-lg text-white/90 space-y-4 drop-shadow">
                                <p>
                                    GPDS was born from a simple frustration: why do business systems have to be so complicated?
                                </p>
                                <p>
                                    We watched too many brilliant entrepreneurs get bogged down by tools that promised to simplify their lives but ended up creating more work. We saw talented teams waste hours on "system maintenance" instead of serving customers.
                                </p>
                                <p>
                                    That's why we built GPDS differently. We start with your actual business needs, not a one-size-fits-all template. We focus on what actually moves the needle, not what looks impressive in a demo.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white/10 p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-[#c7af6e] mb-4 drop-shadow">What Makes Us Different</h3>
                            <ul className="space-y-3 text-white/90">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#c7af6e] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    We audit your current setup before suggesting changes
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#c7af6e] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    We build systems that grow with your business
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#c7af6e] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    We provide ongoing support, not just setup and goodbye
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Team Section */}
                <div className="py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white">
                                Meet the Team
                            </h2>
                            <p className="mt-4 text-lg text-[#c7af6e]">
                                Real people who understand real business challenges.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-32 h-32 bg-[#c7af6e]/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-[#004aad]">MEG</span>
                                </div>
                                <h3 className="text-xl font-semibold text-[#c7af6e]">MEG</h3>
                                <p className="text-[#c7af6e] font-medium">Founder & Systems Strategist</p>
                                <p className="mt-2 text-white/90 text-sm">
                                    Former consultant who got tired of watching clients struggle with overcomplicated systems.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-32 h-32 bg-[#c7af6e]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-[#004aad]">TM</span>
                                </div>
                                <h3 className="text-xl font-semibold text-[#c7af6e]">Tech Lead</h3>
                                <p className="text-[#c7af6e] font-medium">Technical Implementation</p>
                                <p className="mt-2 text-white/90 text-sm">
                                    Makes sure everything actually works in the real world, not just on paper.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-32 h-32 bg-[#c7af6e]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-[#004aad]">CS</span>
                                </div>
                                <h3 className="text-xl font-semibold text-[#c7af6e]">Client Success</h3>
                                <p className="text-[#c7af6e] font-medium">Customer Experience</p>
                                <p className="mt-2 text-white/90 text-sm">
                                    Ensures every client gets the support they need to succeed with their new systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Values Section */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white">
                            Our Values
                        </h2>
                        <p className="mt-4 text-lg text-[#c7af6e]">
                            The principles that guide everything we do.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 border border-[#c7af6e]/40 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#c7af6e] mb-3">
                                Simplicity Over Complexity
                            </h3>
                            <p className="text-white/90">
                                If it takes more than 5 minutes to explain how to use it, it's too complicated. We believe in elegant solutions that just work.
                            </p>
                        </div>
                        <div className="p-6 border border-[#c7af6e]/40 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#c7af6e] mb-3">
                                Results Over Features
                            </h3>
                            <p className="text-white/90">
                                We care about your business outcomes, not how many bells and whistles we can pack into a system. Function beats flash every time.
                            </p>
                        </div>
                        <div className="p-6 border border-[#c7af6e]/40 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#c7af6e] mb-3">
                                Partnership Over Projects
                            </h3>
                            <p className="text-white/90">
                                We're not here to build something and disappear. We're here to help your business grow, which means growing with you.
                            </p>
                        </div>
                        <div className="p-6 border border-[#c7af6e]/40 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#c7af6e] mb-3">
                                Honesty Over Sales
                            </h3>
                            <p className="text-white/90">
                                If we don't think we can help you, we'll tell you. If there's a better solution elsewhere, we'll point you toward it.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Call to Action */}
                <div className="py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white">
                            Ready to See What We Can Build Together?
                        </h2>
                        <p className="mt-4 text-xl text-[#c7af6e]">
                            Start with a free audit of your current systems. No obligations, just insights.
                        </p>
                        <div className="mt-8">
                            <a
                                href="/audit"
                                className="inline-flex items-center justify-center rounded-lg bg-[#c7af6e] px-8 py-3 text-sm font-semibold text-[#004aad] shadow-sm hover:bg-[#004aad] hover:text-[#c7af6e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004aad] transition-colors"
                            >
                                Start My Free Audit
                            </a>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <Footer />
            </Background>
        </>
    );
}
