import React from 'react';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';

const About = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
                        <p className="text-gray-600 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                        <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
                        <p className="text-gray-600 mb-6">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat.
                        </p>
                        <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                                <h3 className="font-semibold">John Doe</h3>
                                <p className="text-gray-600">CEO</p>
                            </div>
                            <div className="text-center">
                                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                                <h3 className="font-semibold">Jane Smith</h3>
                                <p className="text-gray-600">CTO</p>
                            </div>
                            <div className="text-center">
                                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                                <h3 className="font-semibold">Mike Johnson</h3>
                                <p className="text-gray-600">Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;