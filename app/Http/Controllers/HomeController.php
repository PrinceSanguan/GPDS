<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Mail\ContactFormSubmitted;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\RedirectResponse;

class HomeController extends Controller
{
    /**
     * Show the welcome/homepage
     */
    public function welcome(): Response
    {
        return Inertia::render('Welcome', [
            'stats' => [
                'systems_deployed' => 500,
                'client_satisfaction' => 98,
                'average_setup_hours' => 24,
                'average_roi_increase' => 300
            ],
            'featured_kits' => [
                [
                    'id' => 'launch-and-go',
                    'title' => 'Launch & Go',
                    'subtitle' => 'for VAs',
                    'price' => 497,
                    'popular' => false,
                    'description' => 'Complete virtual assistant business system with client onboarding, project management, and billing automation.',
                    'features' => [
                        'Client portal & onboarding',
                        'Project tracking system',
                        'Automated invoicing',
                        'Service delivery workflows'
                    ]
                ],
                [
                    'id' => 'real-estate-success',
                    'title' => 'Succeed in Real Estate',
                    'subtitle' => 'for real estate agents',
                    'price' => 697,
                    'popular' => true,
                    'description' => 'Everything you need to generate, nurture, and close more real estate leads without the tech headaches.',
                    'features' => [
                        'Lead capture & qualification',
                        'Automated follow-up sequences',
                        'Property showcase system',
                        'Closing coordination tools'
                    ]
                ],
                [
                    'id' => 'local-biz-crm',
                    'title' => 'Local Biz CRM Lite',
                    'subtitle' => 'for service pros',
                    'price' => 397,
                    'popular' => false,
                    'description' => 'Streamlined system for local service businesses to attract, convert, and retain customers effortlessly.',
                    'features' => [
                        'Local SEO optimization',
                        'Review management',
                        'Appointment booking',
                        'Customer communication'
                    ]
                ]
            ],
            'testimonials' => [
                [
                    'quote' => '20 discovery calls booked in 3 days',
                    'details' => 'After implementing the VA Launch & Go system, my calendar went from empty to completely booked. The automation handles everything while I focus on delivering results.',
                    'author' => 'Sarah M.',
                    'role' => 'Virtual Assistant',
                    'metric' => '20 calls',
                    'timeframe' => '3 days'
                ],
                [
                    'quote' => 'From 2 to 18 leads/week after system launch',
                    'details' => 'The Real Estate system transformed my business overnight. I went from struggling to find leads to having more qualified prospects than I can handle.',
                    'author' => 'Mike R.',
                    'role' => 'Real Estate Agent',
                    'metric' => '18 leads/week',
                    'timeframe' => 'vs 2 before'
                ],
                [
                    'quote' => 'Finally, a CRM that doesn\'t make me want to scream',
                    'details' => 'I tried 5 different systems before GPDS. This is the first one that actually makes sense and doesn\'t require a PhD to operate.',
                    'author' => 'Jennifer L.',
                    'role' => 'Business Coach',
                    'metric' => '5 systems tried',
                    'timeframe' => 'GPDS wins'
                ]
            ]
        ]);
    }

    /**
     * Handle contact form submission
     */
    public function contact(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'company' => 'nullable|string|max:255',
            'message' => 'required|string|max:1000',
            'interest' => 'nullable|string|in:audit,kit,custom,general'
        ]);

        // Send email notification
        try {
            Mail::to('meg@gpds.systems')->send(new ContactFormSubmitted($validated));
        } catch (\Exception $e) {
            \Log::error('Failed to send contact form email: ' . $e->getMessage());
        }

        return redirect()->route('contact.success')->with('success', 'Thank you for your message! We\'ll get back to you within 24 hours.');
    }

    /**
     * Show contact success page
     */
    public function contactSuccess(): Response
    {
        return Inertia::render('ContactSuccess');
    }
}
