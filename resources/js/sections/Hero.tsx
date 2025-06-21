import Button from '@/components/ui/button';

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white text-center p-6">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Service</h1>
            <p className="text-lg mb-6">Discover how we can help you achieve your goals with our innovative solutions.</p>
            <Button variant="default">
                <a href="/free-audit" className="block w-full h-full">Start Your Free Audit</a>
            </Button>
        </div>
    );
}