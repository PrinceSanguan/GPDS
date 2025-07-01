import { Head } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
    return (
        <>
            <Head title="About - GPDS" />
            
            <div className="min-h-screen bg-white">
                <Navbar currentRoute="/about" />
                
                {/* Hero Section */}
                <div className="bg-gray-50 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                About GPDS
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                                We believe every business deserves systems that actually work. No more duct-tape solutions or overwhelming complexity.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Our Mission
                            </h2>
                            <div className="prose text-lg text-gray-600 space-y-4">
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
                        <div className="bg-blue-50 p-8 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                What Makes Us Different
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    We audit your current setup before suggesting changes
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    We build systems that grow with your business
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    We provide ongoing support, not just setup and goodbye
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    We measure success by your business results, not our tool usage
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="bg-gray-50 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Meet the Team
                            </h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Real people who understand real business challenges.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-blue-600">MEG</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">MEG</h3>
                                <p className="text-blue-600 font-medium">Founder & Systems Strategist</p>
                                <p className="mt-2 text-gray-600 text-sm">
                                    Former consultant who got tired of watching clients struggle with overcomplicated systems.
                                </p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-32 h-32 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-green-600">TM</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Tech Lead</h3>
                                <p className="text-green-600 font-medium">Technical Implementation</p>
                                <p className="mt-2 text-gray-600 text-sm">
                                    Makes sure everything actually works in the real world, not just on paper.
                                </p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-32 h-32 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-purple-600">CS</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Client Success</h3>
                                <p className="text-purple-600 font-medium">Customer Experience</p>
                                <p className="mt-2 text-gray-600 text-sm">
                                    Ensures every client gets the support they need to succeed with their new systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Our Values
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            The principles that guide everything we do.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Simplicity Over Complexity
                            </h3>
                            <p className="text-gray-600">
                                If it takes more than 5 minutes to explain how to use it, it's too complicated. We believe in elegant solutions that just work.
                            </p>
                        </div>
                        
                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Results Over Features
                            </h3>
                            <p className="text-gray-600">
                                We care about your business outcomes, not how many bells and whistles we can pack into a system. Function beats flash every time.
                            </p>
                        </div>
                        
                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Partnership Over Projects
                            </h3>
                            <p className="text-gray-600">
                                We're not here to build something and disappear. We're here to help your business grow, which means growing with you.
                            </p>
                        </div>
                        
                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Honesty Over Sales
                            </h3>
                            <p className="text-gray-600">
                                If we don't think we can help you, we'll tell you. If there's a better solution elsewhere, we'll point you toward it.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-blue-600 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white">
                            Ready to See What We Can Build Together?
                        </h2>
                        <p className="mt-4 text-xl text-blue-100">
                            Start with a free audit of your current systems. No obligations, just insights.
                        </p>
                        <div className="mt-8">
                            <a
                                href="/audit"
                                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Start My Free Audit
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}
