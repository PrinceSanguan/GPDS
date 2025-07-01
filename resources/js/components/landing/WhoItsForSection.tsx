export default function WhoItsForSection() {
    const targetAudience = [
        {
            title: "Freelancers tired of switching tools",
            description: "Stop juggling 15 different apps. One system that does it all."
        },
        {
            title: "Small business owners who hate tech",
            description: "Technology should work for you, not against you. Simple is better."
        },
        {
            title: "Coaches, VAs, agents who need automation",
            description: "Focus on your clients, not your tech stack. Automation without the maze."
        },
        {
            title: "Anyone who tried other platforms and said, \"No thanks\"",
            description: "We get it. Complexity for complexity's sake isn't the answer."
        }
    ];

    return (
        <section className="py-32 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center mb-20">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                        Who It's For
                    </h2>
                    <p className="text-xl leading-8 text-gray-600">
                        Built for smart people who value their time and sanity
                    </p>
                </div>
                
                {/* Target Audience Grid */}
                <div className="mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {targetAudience.map((item, index) => (
                            <div key={index} className="relative bg-gray-50 p-8 rounded-xl">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-lg text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
