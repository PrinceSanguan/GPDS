import React from 'react';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';

const SystemKits = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">System Kits</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Kit Option 1</h3>
                            <p className="text-gray-600">Description of kit option 1</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Kit Option 2</h3>
                            <p className="text-gray-600">Description of kit option 2</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SystemKits;