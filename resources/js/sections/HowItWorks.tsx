import React from 'react';

const HowItWorks = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">How It Works</h2>
                <p className="mb-12 text-lg text-gray-600">
                    Our process is simple and effective. Here’s how you can get started:
                </p>
                <div className="flex flex-col md:flex-row justify-center items-start">
                    <div className="md:w-1/3 p-4">
                        <h3 className="text-xl font-semibold mb-2">Step 1: Sign Up</h3>
                        <p className="text-gray-500">
                            Create an account to access our services and tools.
                        </p>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <h3 className="text-xl font-semibold mb-2">Step 2: Choose Your Kit</h3>
                        <p className="text-gray-500">
                            Select from a variety of system kits tailored to your needs.
                        </p>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <h3 className="text-xl font-semibold mb-2">Step 3: Get Started</h3>
                        <p className="text-gray-500">
                            Follow our guided process to make the most of our offerings.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;