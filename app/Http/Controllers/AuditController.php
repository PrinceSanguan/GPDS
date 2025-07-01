<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use App\Mail\AuditRequestSubmitted;
use Illuminate\Support\Facades\Mail;

class AuditController extends Controller
{
    /**
     * Show the audit request form
     */
    public function show(): Response
    {
        return Inertia::render('Audit/Form', [
            'audit_questions' => [
                [
                    'id' => 'business_type',
                    'question' => 'What type of business do you run?',
                    'type' => 'select',
                    'options' => [
                        'virtual_assistant' => 'Virtual Assistant',
                        'real_estate' => 'Real Estate Agent',
                        'local_service' => 'Local Service Business',
                        'coach_consultant' => 'Coach/Consultant',
                        'creator' => 'Content Creator',
                        'other' => 'Other'
                    ]
                ],
                [
                    'id' => 'current_revenue',
                    'question' => 'What\'s your current monthly revenue?',
                    'type' => 'select',
                    'options' => [
                        'under_1k' => 'Under $1,000',
                        '1k_5k' => '$1,000 - $5,000',
                        '5k_10k' => '$5,000 - $10,000',
                        '10k_25k' => '$10,000 - $25,000',
                        '25k_plus' => '$25,000+'
                    ]
                ],
                [
                    'id' => 'biggest_challenge',
                    'question' => 'What\'s your biggest challenge right now?',
                    'type' => 'select',
                    'options' => [
                        'lead_generation' => 'Generating leads',
                        'lead_conversion' => 'Converting leads to customers',
                        'time_management' => 'Managing time and tasks',
                        'tech_overwhelm' => 'Too many tools/tech overwhelm',
                        'scaling' => 'Scaling the business',
                        'automation' => 'Automating processes'
                    ]
                ],
                [
                    'id' => 'current_tools',
                    'question' => 'How many different tools do you currently use?',
                    'type' => 'select',
                    'options' => [
                        '1_3' => '1-3 tools',
                        '4_7' => '4-7 tools',
                        '8_15' => '8-15 tools',
                        '15_plus' => '15+ tools (help!)'
                    ]
                ],
                [
                    'id' => 'time_spent_admin',
                    'question' => 'How much time do you spend on admin tasks daily?',
                    'type' => 'select',
                    'options' => [
                        'under_1hr' => 'Under 1 hour',
                        '1_2hrs' => '1-2 hours',
                        '2_4hrs' => '2-4 hours',
                        '4_plus_hrs' => '4+ hours (way too much!)'
                    ]
                ],
                [
                    'id' => 'automation_experience',
                    'question' => 'How comfortable are you with automation tools?',
                    'type' => 'select',
                    'options' => [
                        'beginner' => 'Complete beginner',
                        'some_experience' => 'Some experience',
                        'comfortable' => 'Pretty comfortable',
                        'expert' => 'I\'m an automation expert'
                    ]
                ]
            ]
        ]);
    }

    /**
     * Handle audit request submission
     */
    public function submit(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'company' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:20',
            'business_type' => 'required|string',
            'current_revenue' => 'required|string',
            'biggest_challenge' => 'required|string',
            'current_tools' => 'required|string',
            'time_spent_admin' => 'required|string',
            'automation_experience' => 'required|string',
            'additional_info' => 'nullable|string|max:1000'
        ]);

        // Calculate audit score and recommendations
        $auditResults = $this->calculateAuditResults($validated);

        // Store the audit results (you might want to save to database)
        session(['audit_results' => $auditResults]);

        // Send email to your team
        try {
            Mail::to('meg@gpds.systems')->send(new AuditRequestSubmitted($validated, $auditResults));
        } catch (\Exception $e) {
            \Log::error('Failed to send audit request email: ' . $e->getMessage());
        }

        return redirect()->route('audit.results')->with('success', 'Audit submitted successfully!');
    }

    /**
     * Calculate audit results based on responses
     */
    private function calculateAuditResults(array $responses): array
    {
        $score = 0;
        $recommendations = [];
        $urgency = 'low';

        // Score business type (growth potential)
        $businessTypeScores = [
            'virtual_assistant' => 8,
            'real_estate' => 9,
            'local_service' => 7,
            'coach_consultant' => 8,
            'creator' => 6,
            'other' => 5
        ];
        $score += $businessTypeScores[$responses['business_type']] ?? 5;

        // Score revenue (current success level)
        $revenueScores = [
            'under_1k' => 3,
            '1k_5k' => 5,
            '5k_10k' => 7,
            '10k_25k' => 9,
            '25k_plus' => 10
        ];
        $score += $revenueScores[$responses['current_revenue']] ?? 3;

        // Score challenge (opportunity for improvement)
        $challengeScores = [
            'lead_generation' => 9,
            'lead_conversion' => 8,
            'time_management' => 7,
            'tech_overwhelm' => 10,
            'scaling' => 9,
            'automation' => 8
        ];
        $score += $challengeScores[$responses['biggest_challenge']] ?? 5;

        // Determine urgency and recommendations
        if ($responses['current_tools'] === '15_plus' || $responses['time_spent_admin'] === '4_plus_hrs') {
            $urgency = 'high';
            $recommendations[] = 'URGENT: Your current setup is costing you significant time and money daily.';
        } elseif ($responses['current_tools'] === '8_15' || $responses['time_spent_admin'] === '2_4hrs') {
            $urgency = 'medium';
            $recommendations[] = 'MODERATE: You\'re spending too much time on admin tasks.';
        }

        // Business-specific recommendations
        if ($responses['business_type'] === 'real_estate') {
            $recommendations[] = 'Our Real Estate Success Kit could automate your lead follow-up and increase conversions by 300%.';
        } elseif ($responses['business_type'] === 'virtual_assistant') {
            $recommendations[] = 'The Launch & Go kit would streamline your client onboarding and project management.';
        } elseif ($responses['business_type'] === 'local_service') {
            $recommendations[] = 'Local Biz CRM Lite could help you dominate your local market with automated review requests and SEO.';
        }

        // Challenge-specific recommendations
        if ($responses['biggest_challenge'] === 'tech_overwhelm') {
            $recommendations[] = 'You could reduce from 15+ tools to just 3-4 integrated systems.';
        } elseif ($responses['biggest_challenge'] === 'lead_generation') {
            $recommendations[] = 'Our automated lead capture systems could 10x your lead generation.';
        }

        return [
            'score' => min($score, 30), // Cap at 30
            'urgency' => $urgency,
            'recommendations' => $recommendations,
            'estimated_time_savings' => $this->calculateTimeSavings($responses),
            'estimated_revenue_increase' => $this->calculateRevenueIncrease($responses),
            'recommended_kit' => $this->getRecommendedKit($responses)
        ];
    }

    /**
     * Calculate estimated time savings
     */
    private function calculateTimeSavings(array $responses): string
    {
        $timeSavings = [
            'under_1hr' => '2-3 hours/week',
            '1_2hrs' => '8-12 hours/week',
            '2_4hrs' => '15-20 hours/week',
            '4_plus_hrs' => '25+ hours/week'
        ];

        return $timeSavings[$responses['time_spent_admin']] ?? '5-10 hours/week';
    }

    /**
     * Calculate estimated revenue increase
     */
    private function calculateRevenueIncrease(array $responses): string
    {
        $currentRevenue = $responses['current_revenue'];
        
        $increases = [
            'under_1k' => '200-500%',
            '1k_5k' => '100-300%',
            '5k_10k' => '50-200%',
            '10k_25k' => '30-100%',
            '25k_plus' => '20-50%'
        ];

        return $increases[$currentRevenue] ?? '50-200%';
    }

    /**
     * Get recommended kit based on responses
     */
    private function getRecommendedKit(array $responses): array
    {
        $businessType = $responses['business_type'];

        $kitRecommendations = [
            'virtual_assistant' => [
                'id' => 'launch-and-go',
                'title' => 'Launch & Go',
                'reason' => 'Perfect for VAs who want to professionalize their service delivery'
            ],
            'real_estate' => [
                'id' => 'real-estate-success',
                'title' => 'Succeed in Real Estate',
                'reason' => 'Specifically designed for real estate lead generation and conversion'
            ],
            'local_service' => [
                'id' => 'local-biz-crm',
                'title' => 'Local Biz CRM Lite',
                'reason' => 'Optimized for local service businesses to dominate their market'
            ]
        ];

        return $kitRecommendations[$businessType] ?? [
            'id' => 'real-estate-success',
            'title' => 'Succeed in Real Estate',
            'reason' => 'Our most popular system with proven results'
        ];
    }

    /**
     * Show audit results
     */
    public function results(): Response
    {
        $results = session('audit_results');
        
        if (!$results) {
            return redirect()->route('audit.show')->with('error', 'Please complete the audit first.');
        }

        return Inertia::render('Audit/Results', [
            'results' => $results
        ]);
    }
}
