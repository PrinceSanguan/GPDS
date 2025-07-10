import { Header } from '@/components/user/header';
import { Sidebar } from '@/components/user/sidebar';
import Background from '@/components/landing/Background';

interface User {
    name: string;
    email: string;
}

interface DashboardProps {
    user: User;
}

export default function UserDashboard({ user }: DashboardProps) {
    return (
        <Background>
            <div className="flex h-screen">
                {/* Pass user data to the Sidebar component */}
                <Sidebar user={user} />

                {/* Main Content */}
                <div className="flex flex-1 flex-col overflow-hidden">
                    {/* Pass user data to the Header component */}
                    <Header user={user} />

                    {/* Dashboard Content */}
                    <main className="flex-1 overflow-y-auto p-4 md:p-6">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-white drop-shadow-lg">Dashboard Overview</h1>
                                <p className="text-[#c7af6e] drop-shadow-lg">
                                    Welcome back, {user.name}! Here's what's happening with your business today.
                                </p>
                            </div>

                            {/* put here your logic */}
                        </div>
                    </main>
                </div>
            </div>
        </Background>
    );
}
