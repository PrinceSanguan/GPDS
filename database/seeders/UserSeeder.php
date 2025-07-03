<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Admin User
        User::factory()->create([
            'name' => 'Prince Sanguan',
            'email' => 'princesanguan44@gmail.com',
            'password' => bcrypt('prince123'),
            'user_role' => 'admin',
        ]);

        // Test Client Users
        User::factory()->create([
            'name' => 'Sarah Johnson',
            'email' => 'sarah@example.com',
            'password' => bcrypt('password123'),
            'user_role' => 'user',
        ]);

        User::factory()->create([
            'name' => 'Mike Rodriguez',
            'email' => 'mike@example.com',
            'password' => bcrypt('password123'),
            'user_role' => 'user',
        ]);

        // Test VA User
        User::factory()->create([
            'name' => 'Jennifer Lopez',
            'email' => 'jennifer@example.com',
            'password' => bcrypt('password123'),
            'user_role' => 'va',
        ]);

        // Demo User
        User::factory()->create([
            'name' => 'Demo User',
            'email' => 'demo@gpds.systems',
            'password' => bcrypt('demo123'),
            'user_role' => 'user',
        ]);
    }
}
