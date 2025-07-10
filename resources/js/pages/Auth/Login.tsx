import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Background from '@/components/landing/Background';

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
            <Background>
                <Navbar currentRoute="/login" />
                <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8 bg-white/10 rounded-xl shadow-lg p-8">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg">
                                Sign in to your account
                            </h2>
                            <p className="mt-2 text-center text-sm text-[#c7af6e] drop-shadow">
                                Or{' '}
                                <Link
                                    href={route('register')}
                                    className="font-medium text-[#c7af6e] hover:text-white underline"
                                >
                                    create a new account
                                </Link>
                            </p>
                        </div>
                        {status && (
                            <div className="rounded-md bg-white/20 p-4">
                                <div className="text-sm text-[#c7af6e]">{status}</div>
                            </div>
                        )}
                        <form className="mt-8 space-y-6" onSubmit={submit}>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white drop-shadow">
                                        Email address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="mt-1 block w-full rounded-md border border-[#c7af6e] bg-transparent px-3 py-2 placeholder-[#c7af6e]/60 text-white shadow-sm focus:border-[#c7af6e] focus:outline-none focus:ring-[#c7af6e] sm:text-sm"
                                        placeholder="Enter your email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                    {errors.email && (
                                        <div className="mt-1 text-sm text-red-400">{errors.email}</div>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-white drop-shadow">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="mt-1 block w-full rounded-md border border-[#c7af6e] bg-transparent px-3 py-2 placeholder-[#c7af6e]/60 text-white shadow-sm focus:border-[#c7af6e] focus:outline-none focus:ring-[#c7af6e] sm:text-sm"
                                        placeholder="Enter your password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                    {errors.password && (
                                        <div className="mt-1 text-sm text-red-400">{errors.password}</div>
                                    )}
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember"
                                            name="remember"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-[#c7af6e] text-[#c7af6e] focus:ring-[#c7af6e] bg-transparent"
                                            checked={data.remember}
                                            onChange={(e) => setData('remember', e.target.checked)}
                                        />
                                        <label htmlFor="remember" className="ml-2 block text-sm text-white drop-shadow">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <a href="#" className="font-medium text-[#c7af6e] hover:text-white underline">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="group relative flex w-full justify-center rounded-md bg-[#c7af6e] px-3 py-2 text-sm font-semibold text-white hover:bg-white hover:text-[#c7af6e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7af6e] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                                >
                                    {processing ? 'Signing in...' : 'Sign in'}
                                </button>
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-[#c7af6e] drop-shadow">
                                    New to GPDS?{' '}
                                    <Link
                                        href="/audit"
                                        className="font-medium text-white hover:text-[#c7af6e] underline"
                                    >
                                        Start with a free audit
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </Background>
        </>
    );
}