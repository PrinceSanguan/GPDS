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
        <footer className="relative z-10 w-full bg-white/20 backdrop-blur-xl border-t border-[#c7af6e]/30 shadow-xl" aria-labelledby="footer-heading">
            {/* Shadow divider for visual separation, matching Navbar, now darker */}
            <div className="w-full h-0.5 shadow-[0_-6px_18px_0_rgba(0,0,0,0.22)]" />
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            {/* Frosted glass effect container */}
            <div className="mx-auto max-w-7xl px-6 pb-4 pt-6 sm:pt-8 lg:px-8 lg:pt-10">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-[#c7af6e] overflow-hidden shadow-lg">
                                <img 
                                    src="/Images/GPDS Logo.png" 
                                    alt="GPDS Logo" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-xl font-bold text-white drop-shadow-lg">GPDS</span>
                        </div>
                        <p className="text-xs leading-5 text-[#c7af6e] max-w-sm drop-shadow-lg">
                            Smart, simple system builder for small giants.
                        </p>
                        <div className="flex space-x-4">
                            {/* Twitter Icon */}
                            <a href="#" className="text-[#c7af6e] hover:text-white transition-colors duration-150">
                                <span className="sr-only">Twitter</span>
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 4.01c-.77.35-1.6.59-2.47.7a4.13 4.13 0 0 0 1.81-2.27c-.8.48-1.7.83-2.65 1.02A4.11 4.11 0 0 0 12 8.13c0 .32.04.63.1.93C8.28 8.9 5.1 7.13 2.98 4.7c-.35.6-.56 1.3-.56 2.05 0 1.42.72 2.67 1.82 3.4-.67-.02-1.3-.2-1.85-.5v.05c0 1.98 1.41 3.63 3.28 4.01-.34.09-.7.14-1.07.14-.26 0-.5-.02-.74-.07.5 1.56 1.97 2.7 3.7 2.73A8.24 8.24 0 0 1 2 19.54c-.26 0-.52-.01-.77-.04A11.62 11.62 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22 4.01z" />
                                </svg>
                            </a>
                            {/* LinkedIn Icon */}
                            <a href="#" className="text-[#c7af6e] hover:text-white transition-colors duration-150">
                                <span className="sr-only">LinkedIn</span>
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8A6.5 6.5 0 0 1 23 14.5v4.25A1.25 1.25 0 0 1 21.75 20H2.25A1.25 1.25 0 0 1 1 18.75V14.5A6.5 6.5 0 0 1 7.5 8h9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v4m0 0h-2m2 0h2" />
                                </svg>
                            </a>
                            {/* YouTube Icon */}
                            <a href="#" className="text-[#c7af6e] hover:text-white transition-colors duration-150">
                                <span className="sr-only">YouTube</span>
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.2 6 12 6 12 6s-6.2 0-7.86.06a2.75 2.75 0 0 0-1.94 1.94A28.7 28.7 0 0 0 2 12a28.7 28.7 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.94 1.94C5.8 18 12 18 12 18s6.2 0 7.86-.06a2.75 2.75 0 0 0 1.94-1.94A28.7 28.7 0 0 0 22 12a28.7 28.7 0 0 0-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* Navigation Links */}
                    <div className="mt-6 grid grid-cols-2 gap-6 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-6">
                            <div>
                                <h3 className="text-xs font-semibold leading-5 text-white drop-shadow-lg">Solutions</h3>
                                <ul role="list" className="mt-2 space-y-2">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-xs leading-5 text-[#c7af6e] hover:text-white drop-shadow-lg">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <h3 className="text-xs font-semibold leading-5 text-white drop-shadow-lg">Company</h3>
                                <ul role="list" className="mt-2 space-y-2">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-xs leading-5 text-[#c7af6e] hover:text-white drop-shadow-lg">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-6">
                            <div>
                                <h3 className="text-xs font-semibold leading-5 text-white drop-shadow-lg">Support</h3>
                                <ul role="list" className="mt-2 space-y-2">
                                    {navigation.support.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-xs leading-5 text-[#c7af6e] hover:text-white drop-shadow-lg">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <h3 className="text-xs font-semibold leading-5 text-white drop-shadow-lg">Legal</h3>
                                <ul role="list" className="mt-2 space-y-2">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-xs leading-5 text-[#c7af6e] hover:text-white drop-shadow-lg">
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
                <div className="mt-6 border-t border-[#c7af6e]/40 pt-4 sm:mt-8 lg:mt-10">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div>
                            <h3 className="text-xs font-semibold leading-5 text-white drop-shadow-lg">
                                Subscribe to our newsletter
                            </h3>
                            <p className="mt-1 text-xs leading-4 text-[#c7af6e] drop-shadow-lg">
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
                                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/10 px-2 py-1 text-sm text-white shadow-sm ring-1 ring-inset ring-[#c7af6e]/40 placeholder:text-[#c7af6e]/70 focus:ring-2 focus:ring-inset focus:ring-[#c7af6e] sm:w-64 sm:text-xs sm:leading-5 xl:w-full"
                                placeholder="Enter your email"
                            />
                            <div className="mt-2 sm:ml-3 sm:mt-0 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-md bg-[#c7af6e] px-2 py-1 text-xs font-semibold text-[#004aad] shadow-lg hover:bg-white hover:text-[#004aad] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7af6e] transition-colors duration-150"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Bottom Section */}
                <div className="mt-4 border-t border-[#c7af6e]/40 pt-3 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-4 md:order-2">
                        <Link href="/audit" className="text-xs leading-5 text-[#c7af6e] hover:text-white drop-shadow-lg">
                            Get Free Audit
                        </Link>
                        <Link href="/login" className="text-xs leading-5 text-[#c7af6e] hover:text-white drop-shadow-lg">
                            Client Login
                        </Link>
                    </div>
                    <p className="mt-4 text-xs leading-4 text-[#c7af6e]/70 md:order-1 md:mt-0 drop-shadow-lg">
                        &copy; {currentYear} GPDS. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
