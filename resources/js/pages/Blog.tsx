import { Head } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    read_time: string;
    category: string;
}

interface BlogProps {
    posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <Head title="Blog - GPDS" />
            
            <div className="min-h-screen bg-white">
                <Navbar currentRoute="/blog" />
                
                {/* Hero Section */}
                <div className="bg-gray-50 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                GPDS Blog
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                                Insights, tips, and strategies for building better business systems that actually work.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Blog Posts */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
                        {posts.map((post) => (
                            <article
                                key={post.id}
                                className="flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                            >
                                <div className="p-6 flex-1">
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime={post.date} className="text-gray-500">
                                            {formatDate(post.date)}
                                        </time>
                                        <span className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600">
                                            {post.category}
                                        </span>
                                    </div>
                                    <div className="group relative mt-4">
                                        <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600">
                                            <a href="#" className="block">
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                    <div className="relative mt-6 flex items-center gap-x-4">
                                        <div className="text-sm leading-6">
                                            <p className="font-semibold text-gray-900">
                                                {post.author}
                                            </p>
                                            <p className="text-gray-600">{post.read_time}</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="mt-16 text-center">
                        <div className="mx-auto max-w-2xl">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Ready to Transform Your Business?
                            </h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Stop reading about systems and start building them. Get your free audit today.
                            </p>
                            <div className="mt-8">
                                <a
                                    href="/audit"
                                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                >
                                    Start My Free Audit
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}
