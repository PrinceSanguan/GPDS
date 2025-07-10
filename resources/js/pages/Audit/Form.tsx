import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Background from '@/components/landing/Background';

interface AuditQuestion {
    id: string;
    question: string;
    type: 'select' | 'textarea' | 'text';
    options?: Record<string, string>;
    required?: boolean;
}

interface AuditFormProps {
    audit_questions: AuditQuestion[];
}

export default function AuditForm({ audit_questions }: AuditFormProps) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        company: '',
        phone: '',
        answers: {} as Record<string, string>,
    });

    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3; // Contact info, questions, confirmation

    const handleContactSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        if (data.name && data.email) {
            setCurrentStep(2);
        }
    };

    const handleQuestionAnswer = (questionId: string, answer: string) => {
        setData('answers', {
            ...data.answers,
            [questionId]: answer,
        });
    };

    const handleFinalSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/audit', {
            onSuccess: () => {
                setCurrentStep(3);
            },
        });
    };

    return (
        <>
            <Head title="Free Business Systems Audit - GPDS" />
            <Background>
                <Navbar currentRoute="/audit" />
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
                    {/* Progress indicator */}
                    <div className="mb-8">
                        <div className="flex items-center justify-center space-x-4">
                            {[1, 2, 3].map((step) => (
                                <div key={step} className="flex items-center">
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                                            step <= currentStep
                                                ? 'bg-[#c7af6e] text-white drop-shadow'
                                                : 'bg-white/20 text-white/60'
                                        }`}
                                    >
                                        {step}
                                    </div>
                                    {step < 3 && (
                                        <div
                                            className={`w-16 h-0.5 mx-2 ${
                                                step < currentStep ? 'bg-[#c7af6e]' : 'bg-white/20'
                                            }`}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-4">
                            <span className="text-sm text-white/80 drop-shadow">
                                Step {currentStep} of {totalSteps}
                            </span>
                        </div>
                    </div>
                    {/* Step 1: Contact Information */}
                    {currentStep === 1 && (
                        <div className="bg-white/10 rounded-lg shadow-lg border border-[#c7af6e]/40 p-8">
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-bold text-white drop-shadow-lg">
                                    Free Business Systems Audit
                                </h1>
                                <p className="mt-4 text-lg text-[#c7af6e] drop-shadow">
                                    Let's start with some basic information so we can personalize your audit.
                                </p>
                            </div>
                            <form onSubmit={handleContactSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white drop-shadow">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="mt-1 block w-full rounded-md border border-[#c7af6e] bg-transparent px-3 py-2 placeholder-[#c7af6e]/60 text-white shadow-sm focus:border-[#c7af6e] focus:outline-none focus:ring-[#c7af6e]"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white drop-shadow">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="mt-1 block w-full rounded-md border border-[#c7af6e] bg-transparent px-3 py-2 placeholder-[#c7af6e]/60 text-white shadow-sm focus:border-[#c7af6e] focus:outline-none focus:ring-[#c7af6e]"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-white drop-shadow">Company/Business Name</label>
                                    <input
                                        type="text"
                                        id="company"
                                        value={data.company}
                                        onChange={(e) => setData('company', e.target.value)}
                                        className="mt-1 block w-full rounded-md border border-[#c7af6e] bg-transparent px-3 py-2 placeholder-[#c7af6e]/60 text-white shadow-sm focus:border-[#c7af6e] focus:outline-none focus:ring-[#c7af6e]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-white drop-shadow">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        className="mt-1 block w-full rounded-md border border-[#c7af6e] bg-transparent px-3 py-2 placeholder-[#c7af6e]/60 text-white shadow-sm focus:border-[#c7af6e] focus:outline-none focus:ring-[#c7af6e]"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-[#c7af6e] text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#c7af6e] transition-colors shadow-lg"
                                    >
                                        Continue to Questions
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                    {/* Step 2: Audit Questions */}
                    {currentStep === 2 && (
                        <div className="bg-white/10 rounded-lg shadow-lg border border-[#c7af6e]/40 p-8">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-white drop-shadow-lg">
                                    Tell Us About Your Business
                                </h2>
                                <p className="mt-2 text-[#c7af6e] drop-shadow">
                                    This helps us provide more targeted recommendations.
                                </p>
                            </div>
                            <form onSubmit={handleFinalSubmit} className="space-y-8">
                                {audit_questions.map((question, index) => (
                                    <div key={question.id}>
                                        <label className="block text-sm font-medium text-white mb-3 drop-shadow">
                                            {index + 1}. {question.question}
                                        </label>
                                        {question.type === 'select' && question.options && (
                                            <select
                                                value={data.answers[question.id] || ''}
                                                onChange={(e) => handleQuestionAnswer(question.id, e.target.value)}
                                                className="block w-full rounded-md border border-[#c7af6e] bg-transparent px-3 py-2 text-white placeholder-[#c7af6e]/60 shadow-sm focus:border-[#c7af6e] focus:outline-none focus:ring-[#c7af6e]"
                                                required={question.required}
                                            >
                                                <option value="">Please select...</option>
                                                {Object.entries(question.options).map(([value, label]) => (
                                                    <option key={value} value={value} className="text-black">
                                                        {label}
                                                    </option>
                                                ))}
                                            </select>
                                        )}
                                        {question.type === 'textarea' && (
                                            <textarea
                                                value={data.answers[question.id] || ''}
                                                onChange={(e) => handleQuestionAnswer(question.id, e.target.value)}
                                                rows={4}
                                                className="block w-full rounded-md border border-[#c7af6e] bg-transparent px-3 py-2 text-white placeholder-[#c7af6e]/60 shadow-sm focus:border-[#c7af6e] focus:outline-none focus:ring-[#c7af6e]"
                                                required={question.required}
                                            />
                                        )}
                                        {question.type === 'text' && (
                                            <input
                                                type="text"
                                                value={data.answers[question.id] || ''}
                                                onChange={(e) => handleQuestionAnswer(question.id, e.target.value)}
                                                className="block w-full rounded-md border border-[#c7af6e] bg-transparent px-3 py-2 text-white placeholder-[#c7af6e]/60 shadow-sm focus:border-[#c7af6e] focus:outline-none focus:ring-[#c7af6e]"
                                                required={question.required}
                                            />
                                        )}
                                    </div>
                                ))}
                                <div className="flex justify-between">
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep(1)}
                                        className="bg-white/20 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/40 transition-colors shadow"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-[#c7af6e] text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#c7af6e] transition-colors shadow-lg disabled:opacity-50"
                                    >
                                        {processing ? 'Submitting...' : 'Submit Audit Request'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                    {/* Step 3: Confirmation */}
                    {currentStep === 3 && (
                        <div className="bg-white/10 rounded-lg shadow-lg border border-[#c7af6e]/40 p-8 text-center">
                            <div className="w-16 h-16 bg-[#c7af6e]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <div className="w-8 h-8 bg-[#c7af6e] rounded-full"></div>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
                                Audit Request Submitted!
                            </h2>
                            <p className="text-[#c7af6e] mb-6 drop-shadow">
                                Thank you for your submission. We'll review your information and send you a personalized audit report within 24-48 hours.
                            </p>
                            <div className="space-y-4">
                                <p className="text-sm text-white/80 drop-shadow">
                                    What happens next:
                                </p>
                                <ul className="text-sm text-white/80 space-y-2">
                                    <li>• We'll analyze your current setup and identify opportunities</li>
                                    <li>• You'll receive a detailed audit report with recommendations</li>
                                    <li>• We'll schedule a brief call to discuss your options (optional)</li>
                                </ul>
                            </div>
                            <div className="mt-8">
                                <a
                                    href="/"
                                    className="inline-flex items-center justify-center rounded-lg bg-[#c7af6e] px-6 py-2 text-sm font-semibold text-white shadow-lg hover:bg-white hover:text-[#c7af6e] transition-colors"
                                >
                                    Return to Home
                                </a>
                            </div>
                        </div>
                    )}
                </div>
                {/* Footer */}
                <Footer />
            </Background>
        </>
    );
}
