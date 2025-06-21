import React from 'react';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';

const Blog = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog & Insights</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <article className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Blog Post 1</h3>
                            <p className="text-gray-600 mb-4">Excerpt from blog post 1...</p>
                            <span className="text-sm text-gray-500">Published on Jan 1, 2024</span>
                        </article>
                        <article className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Blog Post 2</h3>
                            <p className="text-gray-600 mb-4">Excerpt from blog post 2...</p>
                            <span className="text-sm text-gray-500">Published on Jan 15, 2024</span>
                        </article>
                        <article className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Blog Post 3</h3>
                            <p className="text-gray-600 mb-4">Excerpt from blog post 3...</p>
                            <span className="text-sm text-gray-500">Published on Feb 1, 2024</span>
                        </article>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blog;