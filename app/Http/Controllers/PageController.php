<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    /**
     * Show the How It Works page
     */
    public function howItWorks(): Response
    {
        return Inertia::render('HowItWorks');
    }

    /**
     * Show the Pricing page
     */
    public function pricing(): Response
    {
        return Inertia::render('Pricing');
    }

    /**
     * Show the Blog page
     */
    public function blog(): Response
    {
        return Inertia::render('Blog', [
            'posts' => [
                [
                    'id' => 1,
                    'title' => '5 Signs Your Business Needs a System Overhaul',
                    'excerpt' => 'Are you spending more time managing tools than growing your business? Here are the warning signs.',
                    'author' => 'MEG',
                    'date' => '2025-06-15',
                    'read_time' => '5 min read',
                    'category' => 'Systems'
                ],
                [
                    'id' => 2,
                    'title' => 'Real Estate Agents: Stop Losing Leads to Poor Follow-up',
                    'excerpt' => 'Learn how automated follow-up sequences can increase your conversion rate by 300%.',
                    'author' => 'MEG',
                    'date' => '2025-06-10',
                    'read_time' => '7 min read',
                    'category' => 'Real Estate'
                ],
                [
                    'id' => 3,
                    'title' => 'From 15 Tools to 3: A Virtual Assistant\'s System Transformation',
                    'excerpt' => 'Sarah went from tool chaos to streamlined success. Here\'s her complete transformation story.',
                    'author' => 'MEG',
                    'date' => '2025-06-05',
                    'read_time' => '6 min read',
                    'category' => 'Case Study'
                ]
            ]
        ]);
    }

    /**
     * Show the About page
     */
    public function about(): Response
    {
        return Inertia::render('About', [
            'founder' => [
                'name' => 'MEG',
                'title' => 'Founder & System Architect',
                'bio' => 'With over 10 years of experience in business automation and system design, MEG has helped hundreds of small businesses transform their operations from chaotic to streamlined.',
                'credentials' => [
                    'Certified Business Automation Specialist',
                    'Former Operations Director at 3 startups',
                    'Built systems for 500+ businesses',
                    '98% client satisfaction rate'
                ]
            ],
            'mission' => 'To make powerful business systems accessible to every small business owner, without the complexity and overwhelm of traditional solutions.',
            'values' => [
                'Simplicity over complexity',
                'Results over features',
                'Growth over gimmicks',
                'People over profits'
            ],
            'stats' => [
                ['number' => '500+', 'label' => 'Systems Deployed'],
                ['number' => '98%', 'label' => 'Client Satisfaction'],
                ['number' => '24hr', 'label' => 'Average Setup Time'],
                ['number' => '300%', 'label' => 'Average ROI Increase']
            ]
        ]);
    }
}
