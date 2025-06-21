import React from 'react';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';

const Pricing = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-4">Basic</h3>
                            <p className="text-3xl font-bold text-blue-600 mb-4">$29/month</p>
                            <ul className="space-y-2 text-gray-600">
                                <li>Feature 1</li>
                                <li>Feature 2</li>
                                <li>Feature 3</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-500">
                            <h3 className="text-2xl font-semibold mb-4">Pro</h3>
                            <p className="text-3xl font-bold text-blue-600 mb-4">$59/month</p>
                            <ul className="space-y-2 text-gray-600">
                                <li>All Basic features</li>
                                <li>Feature 4</li>
                                <li>Feature 5</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
                            <p className="text-3xl font-bold text-blue-600 mb-4">$99/month</p>
                            <ul className="space-y-2 text-gray-600">
                                <li>All Pro features</li>
                                <li>Feature 6</li>
                                <li>Feature 7</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Pricing;