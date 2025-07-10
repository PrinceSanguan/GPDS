import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import Navbar from '@/components/Navbar';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Register - GPDS" />
            
            <div className="min-h-screen bg-gradient-to-br from-[#c7af6e] via-[#c7af6e]/60 to-white flex flex-col">
                <Navbar currentRoute="/register" />
                <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8 bg-white/10 rounded-xl shadow-lg p-8">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg">
                                Create your account
                            </h2>
                            <p className="mt-2 text-center text-sm text-[#c7af6e] drop-shadow">
                                Already have an account?{' '}
                                <Link
                                    href={route('login')}
                                    className="font-medium text-[#c7af6e] hover:text-white underline"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </div>
                        <form className="mt-8 space-y-6" onSubmit={submit}>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white drop-shadow">Full Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="mt-1 block w-full rounded-md border border-[#c7af6e] bg-transparent px-3 py-2 placeholder-[#c7af6e]/60 text-white shadow-sm focus:border-[#c7af6e] focus:outline-none focus:ring-[#c7af6e] sm:text-sm"
                                        placeholder="Enter your full name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                    />
                                    {errors.name && (
                                        <div className="mt-1 text-sm text-red-400">{errors.name}</div>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white drop-shadow">Email address</label>
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
                                    <label htmlFor="password" className="block text-sm font-medium text-white drop-shadow">Password</label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="new-password"
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
                                <div>
                                    <label htmlFor="password_confirmation" className="block text-sm font-medium text-white drop-shadow">Confirm Password</label>
                                    <input
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        type="password"
                                        autoComplete="new-password"
                                        required
                                        className="mt-1 block w-full rounded-md border border-[#c7af6e] bg-transparent px-3 py-2 placeholder-[#c7af6e]/60 text-white shadow-sm focus:border-[#c7af6e] focus:outline-none focus:ring-[#c7af6e] sm:text-sm"
                                        placeholder="Confirm your password"
                                        value={data.password_confirmation}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                    />
                                    {errors.password_confirmation && (
                                        <div className="mt-1 text-sm text-red-400">{errors.password_confirmation}</div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="group relative flex w-full justify-center rounded-md bg-[#c7af6e] px-3 py-2 text-sm font-semibold text-white hover:bg-white hover:text-[#c7af6e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7af6e] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                                >
                                    {processing ? 'Creating account...' : 'Create account'}
                                </button>
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-[#c7af6e] drop-shadow">
                                    Want to try before you commit?{' '}
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
            </div>
        </>
    );
}
