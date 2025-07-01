import { Link } from '@inertiajs/react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const navigation = {
        solutions: [
            { name: 'System Kits', href: '/kits' },
            { name: 'Launch & Go', href: '/kits/launch-and-go' },
            { name: 'Real Estate Success', href: '/kits/real-estate-success' },
            { name: 'Local Biz CRM', href: '/kits/local-biz-crm' },
        ],
        company: [
            { name: 'About', href: '/about' },
            { name: 'How It Works', href: '/how-it-works' },
            { name: 'Pricing', href: '/pricing' },
            { name: 'Blog', href: '/blog' },
        ],
        support: [
            { name: 'Free Audit', href: '/audit' },
            { name: 'Contact', href: '/contact' },
            { name: 'Help Center', href: '#' },
            { name: 'Documentation', href: '#' },
        ],
        legal: [
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms of Service', href: '/terms' },
            { name: 'Cookie Policy', href: '/cookies' },
        ],
    };

    return (
        <footer className="bg-gray-900" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            
            <div className="mx-auto max-w-7xl px-6 pb-4 pt-6 sm:pt-8 lg:px-8 lg:pt-10">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-blue-100 overflow-hidden">
                                <img 
                                    src="/Images/GPDS Logo.png" 
                                    alt="GPDS Logo" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-xl font-bold text-white">GPDS</span>
                        </div>
                        <p className="text-xs leading-5 text-gray-300 max-w-sm">
                            Smart, simple system builder for small giants.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-gray-300">
                                <span className="sr-only">Twitter</span>
                                <div className="h-5 w-5 bg-gray-400 rounded"></div>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-300">
                                <span className="sr-only">LinkedIn</span>
                                <div className="h-5 w-5 bg-gray-400 rounded"></div>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-300">
                                <span className="sr-only">YouTube</span>
                                <div className="h-5 w-5 bg-gray-400 rounded"></div>
                            </a>
                        </div>
                    </div>
                    
                    {/* Navigation Links */}
                    <div className="mt-6 grid grid-cols-2 gap-6 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-6">
                            <div>
                                <h3 className="text-xs font-semibold leading-5 text-white">Solutions</h3>
                                <ul role="list" className="mt-2 space-y-2">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-xs leading-5 text-gray-300 hover:text-white">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <h3 className="text-xs font-semibold leading-5 text-white">Company</h3>
                                <ul role="list" className="mt-2 space-y-2">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-xs leading-5 text-gray-300 hover:text-white">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-6">
                            <div>
                                <h3 className="text-xs font-semibold leading-5 text-white">Support</h3>
                                <ul role="list" className="mt-2 space-y-2">
                                    {navigation.support.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-xs leading-5 text-gray-300 hover:text-white">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <h3 className="text-xs font-semibold leading-5 text-white">Legal</h3>
                                <ul role="list" className="mt-2 space-y-2">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-xs leading-5 text-gray-300 hover:text-white">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Newsletter Section */}
                <div className="mt-6 border-t border-gray-700 pt-4 sm:mt-8 lg:mt-10">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div>
                            <h3 className="text-xs font-semibold leading-5 text-white">
                                Subscribe to our newsletter
                            </h3>
                            <p className="mt-1 text-xs leading-4 text-gray-300">
                                Get system building tips delivered to your inbox.
                            </p>
                        </div>
                        <form className="mt-2 sm:flex sm:max-w-md xl:mt-0">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                required
                                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-2 py-1 text-sm text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:w-64 sm:text-xs sm:leading-5 xl:w-full"
                                placeholder="Enter your email"
                            />
                            <div className="mt-2 sm:ml-3 sm:mt-0 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                
                {/* Bottom Section */}
                <div className="mt-4 border-t border-gray-700 pt-3 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-4 md:order-2">
                        <Link href="/audit" className="text-xs leading-5 text-gray-300 hover:text-white">
                            Get Free Audit
                        </Link>
                        <Link href="/login" className="text-xs leading-5 text-gray-300 hover:text-white">
                            Client Login
                        </Link>
                    </div>
                    <p className="mt-4 text-xs leading-4 text-gray-400 md:order-1 md:mt-0">
                        &copy; {currentYear} GPDS. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
