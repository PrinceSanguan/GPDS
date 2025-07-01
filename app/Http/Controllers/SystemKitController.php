<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\JsonResponse;

class SystemKitController extends Controller
{
    /**
     * Available system kits
     */
    private function getSystemKits(): array
    {
        return [
            'launch-and-go' => [
                'id' => 'launch-and-go',
                'title' => 'Launch & Go',
                'subtitle' => 'for VAs',
                'icon' => '🚀',
                'price' => 497,
                'popular' => false,
                'description' => 'Complete virtual assistant business system with client onboarding, project management, and billing automation.',
                'features' => [
                    'Client portal & onboarding',
                    'Project tracking system', 
                    'Automated invoicing',
                    'Service delivery workflows'
                ],
                'tech_stack' => 'Notion + Stripe + Calendar + Email',
                'benefit' => 'Land premium clients and deliver like a pro',
                'detailed_features' => [
                    'Custom client onboarding portal',
                    'Project management dashboard',
                    'Automated invoice generation',
                    'Contract templates and e-signatures',
                    'Time tracking integration',
                    'Client communication workflows',
                    'Service delivery checklists',
                    'Payment processing setup'
                ],
                'included_tools' => [
                    'Notion workspace templates',
                    'Stripe payment integration',
                    'Google Calendar automation',
                    'Email sequence templates',
                    'Contract templates',
                    'Branding guidelines'
                ]
            ],
            'real-estate-success' => [
                'id' => 'real-estate-success',
                'title' => 'Succeed in Real Estate',
                'subtitle' => 'for real estate agents',
                'icon' => '🏠',
                'price' => 697,
                'popular' => true,
                'description' => 'Everything you need to generate, nurture, and close more real estate leads without the tech headaches.',
                'features' => [
                    'Lead capture & qualification',
                    'Automated follow-up sequences',
                    'Property showcase system',
                    'Closing coordination tools'
                ],
                'tech_stack' => 'CRM + Email + SMS + Calendly',
                'benefit' => '10x your lead conversion rate',
                'detailed_features' => [
                    'Landing pages for lead capture',
                    'Lead scoring and qualification',
                    'Automated email drip campaigns',
                    'SMS follow-up sequences',
                    'Property listing showcase',
                    'Virtual tour integration',
                    'Closing timeline management',
                    'Client portal for documents'
                ],
                'included_tools' => [
                    'CRM system setup',
                    'Landing page templates',
                    'Email automation sequences',
                    'SMS marketing setup',
                    'Calendar booking system',
                    'Document management portal'
                ]
            ],
            'local-biz-crm' => [
                'id' => 'local-biz-crm',
                'title' => 'Local Biz CRM Lite',
                'subtitle' => 'for service pros',
                'icon' => '🔧',
                'price' => 397,
                'popular' => false,
                'description' => 'Streamlined system for local service businesses to attract, convert, and retain customers effortlessly.',
                'features' => [
                    'Local SEO optimization',
                    'Review management',
                    'Appointment booking',
                    'Customer communication'
                ],
                'tech_stack' => 'WordPress + Reviews + Booking + SMS',
                'benefit' => 'Dominate your local market',
                'detailed_features' => [
                    'Local SEO optimized website',
                    'Google My Business optimization',
                    'Review request automation',
                    'Online appointment booking',
                    'Customer communication portal',
                    'Service area mapping',
                    'Quote request forms',
                    'Follow-up sequences'
                ],
                'included_tools' => [
                    'WordPress website setup',
                    'Booking system integration',
                    'Review management platform',
                    'Local SEO optimization',
                    'Customer portal access',
                    'Communication templates'
                ]
            ]
        ];
    }

    /**
     * Display all system kits
     */
    public function index(): Response
    {
        return Inertia::render('SystemKits/Index', [
            'kits' => array_values($this->getSystemKits())
        ]);
    }

    /**
     * Display specific system kit
     */
    public function show(string $kit): Response
    {
        $kits = $this->getSystemKits();
        
        if (!isset($kits[$kit])) {
            abort(404, 'System kit not found');
        }

        return Inertia::render('SystemKits/Show', [
            'kit' => $kits[$kit],
            'related_kits' => array_values(array_filter($kits, fn($k) => $k['id'] !== $kit))
        ]);
    }

    /**
     * Handle kit purchase
     */
    public function purchase(Request $request, string $kit): JsonResponse
    {
        $kits = $this->getSystemKits();
        
        if (!isset($kits[$kit])) {
            return response()->json(['error' => 'System kit not found'], 404);
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'company' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:20'
        ]);

        // Here you would typically integrate with a payment processor like Stripe
        // For now, we'll just log the purchase intent
        \Log::info('Kit purchase intent', [
            'kit' => $kit,
            'customer' => $validated,
            'amount' => $kits[$kit]['price']
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Purchase initiated. Redirecting to payment...',
            'payment_url' => route('kits.show', $kit) . '?purchase=success'
        ]);
    }

    /**
     * Handle setup booking
     */
    public function bookSetup(Request $request, string $kit): JsonResponse
    {
        $kits = $this->getSystemKits();
        
        if (!isset($kits[$kit])) {
            return response()->json(['error' => 'System kit not found'], 404);
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'company' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:20',
            'preferred_date' => 'nullable|date|after:today',
            'message' => 'nullable|string|max:500'
        ]);

        // Log the setup booking request
        \Log::info('Setup booking request', [
            'kit' => $kit,
            'customer' => $validated
        ]);

        // Here you would typically send an email to your team and the customer
        
        return response()->json([
            'success' => true,
            'message' => 'Setup call scheduled! Check your email for confirmation.',
        ]);
    }
}
