import React from 'react';

const Blog = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Blog / Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Blog Post Title 1</h3>
                        <p className="text-gray-700 mb-4">A brief description of the blog post content goes here. This should entice the reader to click and read more.</p>
                        <a href="#" className="text-blue-500 hover:underline">Read More</a>
                    </article>
                    <article className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Blog Post Title 2</h3>
                        <p className="text-gray-700 mb-4">A brief description of the blog post content goes here. This should entice the reader to click and read more.</p>
                        <a href="#" className="text-blue-500 hover:underline">Read More</a>
                    </article>
                    <article className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Blog Post Title 3</h3>
                        <p className="text-gray-700 mb-4">A brief description of the blog post content goes here. This should entice the reader to click and read more.</p>
                        <a href="#" className="text-blue-500 hover:underline">Read More</a>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Blog;