<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        
        // Mock data - replace with real data from your database
        $kits = [
            [
                'id' => '1',
                'name' => 'VA Launch & Go System',
                'description' => 'Complete system to launch and scale your VA business with automated lead generation.',
                'status' => 'owned',
                'category' => 'va',
                'stats' => [
                    'leads' => 127,
                    'bookings' => 23,
                    'automations' => 8,
                ],
                'image' => null,
            ],
            [
                'id' => '2',
                'name' => 'Real Estate Lead Machine',
                'description' => 'Automated system for real estate agents to generate and convert leads.',
                'status' => 'owned',
                'category' => 'real-estate',
                'stats' => [
                    'leads' => 89,
                    'bookings' => 15,
                    'automations' => 6,
                ],
                'image' => null,
            ],
            [
                'id' => '3',
                'name' => 'Local Business CRM',
                'description' => 'All-in-one system for local businesses to manage customers and grow revenue.',
                'status' => 'locked',
                'category' => 'local-business',
                'stats' => [
                    'leads' => 0,
                    'bookings' => 0,
                    'automations' => 0,
                ],
                'price' => 197,
            ],
            [
                'id' => '4',
                'name' => 'Coaching Business Builder',
                'description' => 'Complete system to launch and scale your coaching business online.',
                'status' => 'locked',
                'category' => 'coaching',
                'stats' => [
                    'leads' => 0,
                    'bookings' => 0,
                    'automations' => 0,
                ],
                'price' => 297,
            ],
            [
                'id' => '5',
                'name' => 'E-commerce Automation Suite',
                'description' => 'Automated system for e-commerce businesses to increase sales and retention.',
                'status' => 'locked',
                'category' => 'local-business',
                'stats' => [
                    'leads' => 0,
                    'bookings' => 0,
                    'automations' => 0,
                ],
                'price' => 397,
            ],
        ];

        $totalStats = [
            'totalLeads' => array_sum(array_column(array_filter($kits, fn($k) => $k['status'] === 'owned'), 'stats')['leads'] ?? [216]),
            'totalBookings' => array_sum(array_column(array_filter($kits, fn($k) => $k['status'] === 'owned'), 'stats')['bookings'] ?? [38]),
            'totalAutomations' => array_sum(array_column(array_filter($kits, fn($k) => $k['status'] === 'owned'), 'stats')['automations'] ?? [14]),
            'activeKits' => count(array_filter($kits, fn($k) => $k['status'] === 'owned')),
        ];

        // Fix the stats calculation
        $ownedKits = array_filter($kits, fn($k) => $k['status'] === 'owned');
        $totalStats = [
            'totalLeads' => array_sum(array_column(array_column($ownedKits, 'stats'), 'leads')),
            'totalBookings' => array_sum(array_column(array_column($ownedKits, 'stats'), 'bookings')),
            'totalAutomations' => array_sum(array_column(array_column($ownedKits, 'stats'), 'automations')),
            'activeKits' => count($ownedKits),
        ];

        return Inertia::render('Dashboard', [
            'user' => [
                'name' => $user->name,
                'email' => $user->email,
                'plan' => 'Pro', // Replace with actual plan from database
            ],
            'kits' => $kits,
            'totalStats' => $totalStats,
        ]);
    }

    public function kitHub(Request $request, $kitId)
    {
        $user = auth()->user();
        
        // Mock kit data - replace with real data from your database
        $kit = [
            'id' => $kitId,
            'name' => 'VA Launch & Go System',
            'description' => 'Complete system to launch and scale your VA business with automated lead generation.',
            'category' => 'va',
            'stats' => [
                'leads' => 127,
                'bookings' => 23,
                'automations' => 8,
                'conversionRate' => 18.1,
            ],
            'lastActivity' => '2 minutes ago',
        ];

        return Inertia::render('KitHub', [
            'user' => [
                'name' => $user->name,
                'email' => $user->email,
                'plan' => 'Pro',
            ],
            'kit' => $kit,
        ]);
    }
}
