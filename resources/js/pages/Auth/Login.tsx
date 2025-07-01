import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Login({ status }: { status?: string }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login.store'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Login - GPDS" />
            
            <div className="min-h-screen bg-white">
                <Navbar currentRoute="/login" />
                
                <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                Sign in to your account
                            </h2>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                Or{' '}
                                <Link
                                    href={route('register')}
                                    className="font-medium text-blue-600 hover:text-blue-500"
                                >
                                    create a new account
                                </Link>
                            </p>
                        </div>

                        {status && (
                            <div className="rounded-md bg-green-50 p-4">
                                <div className="text-sm text-green-700">{status}</div>
                            </div>
                        )}

                        <form className="mt-8 space-y-6" onSubmit={submit}>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                        placeholder="Enter your email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                    {errors.email && (
                                        <div className="mt-1 text-sm text-red-600">{errors.email}</div>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                        placeholder="Enter your password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                    {errors.password && (
                                        <div className="mt-1 text-sm text-red-600">{errors.password}</div>
                                    )}
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember"
                                            name="remember"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            checked={data.remember}
                                            onChange={(e) => setData('remember', e.target.checked)}
                                        />
                                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="group relative flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {processing ? 'Signing in...' : 'Sign in'}
                                </button>
                            </div>

                            <div className="text-center">
                                <p className="text-sm text-gray-600">
                                    New to GPDS?{' '}
                                    <Link
                                        href="/audit"
                                        className="font-medium text-blue-600 hover:text-blue-500"
                                    >
                                        Start with a free audit
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                
                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}