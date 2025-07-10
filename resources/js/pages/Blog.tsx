import { Head } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Background from '@/components/landing/Background';

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
            <Background>
                <Navbar currentRoute="/blog" />
                {/* Hero Section */}
                <div className="py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-lg">
                                GPDS Blog
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#c7af6e] drop-shadow">
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
                                className="flex flex-col bg-white/10 rounded-lg shadow-lg border-2 border-[#c7af6e] hover:shadow-xl transition-shadow"
                            >
                                <div className="p-6 flex-1">
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime={post.date} className="text-white/80 drop-shadow">
                                            {formatDate(post.date)}
                                        </time>
                                        <span className="relative z-10 rounded-full bg-[#c7af6e]/20 px-3 py-1.5 font-medium text-[#c7af6e] drop-shadow">
                                            {post.category}
                                        </span>
                                    </div>
                                    <h2 className="mt-4 text-2xl font-bold text-white drop-shadow">
                                        {post.title}
                                    </h2>
                                    <p className="mt-2 text-white/90 drop-shadow">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-4 flex items-center gap-x-2 text-sm text-[#c7af6e] drop-shadow">
                                        <span>By {post.author}</span>
                                        <span>&middot;</span>
                                        <span>{post.read_time} read</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
                <Footer />
            </Background>
        </>
    );
}
