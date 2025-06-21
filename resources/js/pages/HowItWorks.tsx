import React from 'react';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';

const HowItWorks = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">How It Works</h1>
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-4">Step 1</h3>
                            <p className="text-gray-600">Description of step 1</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-4">Step 2</h3>
                            <p className="text-gray-600">Description of step 2</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-4">Step 3</h3>
                            <p className="text-gray-600">Description of step 3</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HowItWorks;