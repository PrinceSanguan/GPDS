import Button from '@/components/ui/button';

const Pricing = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Pricing Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
                        <p className="text-gray-600 mb-4">$10/month</p>
                        <ul className="mb-6">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                        </ul>
                        <Button variant="default">Choose Plan</Button>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Pro Plan</h3>
                        <p className="text-gray-600 mb-4">$20/month</p>
                        <ul className="mb-6">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Feature 4</li>
                        </ul>
                        <Button variant="default">Choose Plan</Button>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Enterprise Plan</h3>
                        <p className="text-gray-600 mb-4">Contact us for pricing</p>
                        <ul className="mb-6">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Feature 4</li>
                            <li>Feature 5</li>
                        </ul>
                        <Button variant="default">Contact Us</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;