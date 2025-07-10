import { Header } from '@/components/admin/header';
import { Sidebar } from '@/components/admin/sidebar';
import Background from '@/components/landing/Background';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Button from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useForm } from '@inertiajs/react';
import { CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface User {
    name: string;
    email: string;
}

interface SettingsProps {
    user: User;
    success?: string;
}

export default function AdminSettings({ user, success }: SettingsProps) {
    const [activeTab, setActiveTab] = useState('profile');

    // Profile update form
    const profileForm = useForm({
        name: user.name,
        _method: 'PUT',
    });

    // Password update form
    const passwordForm = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
        _method: 'PUT',
    });

    const updateProfile = (e: React.FormEvent) => {
        e.preventDefault();
        profileForm.post(route('admin.settings.updateProfile'));
    };

    const updatePassword = (e: React.FormEvent) => {
        e.preventDefault();
        passwordForm.post(route('admin.settings.updatePassword'));
    };

    return (
        <Background>
            <div className="flex h-screen">
                {/* Pass user data to the Sidebar component */}
                <Sidebar user={user} />

                {/* Main Content */}
                <div className="flex flex-1 flex-col overflow-hidden">
                    {/* Pass user data to the Header component */}
                    <Header user={user} />

                    {/* Settings Content */}
                    <main className="flex-1 overflow-y-auto p-4 md:p-6">
                        <div className="mx-auto flex max-w-4xl flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-white drop-shadow-lg">Settings</h1>
                                <p className="text-[#c7af6e] drop-shadow-lg">Manage your account settings and change your password</p>
                            </div>

                            {success && (
                                <Alert className="border-[#c7af6e] bg-[#c7af6e]/10 text-[#c7af6e]">
                                    <CheckCircle className="h-4 w-4" />
                                    <AlertDescription>{success}</AlertDescription>
                                </Alert>
                            )}

                            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                                <TabsList className="mb-8 grid w-full grid-cols-2 bg-[#004aad]/20 border border-[#c7af6e]">
                                    <TabsTrigger value="profile" className="text-white data-[state=active]:bg-[#c7af6e] data-[state=active]:text-[#004aad]">Profile</TabsTrigger>
                                    <TabsTrigger value="password" className="text-white data-[state=active]:bg-[#c7af6e] data-[state=active]:text-[#004aad]">Password</TabsTrigger>
                                </TabsList>

                                <TabsContent value="profile">
                                    <Card className="bg-white/10 border-[#c7af6e] text-white">
                                        <CardHeader>
                                            <CardTitle>Profile Information</CardTitle>
                                            <CardDescription className="text-[#c7af6e]">Update your account's profile information and email address.</CardDescription>
                                        </CardHeader>

                                        <form onSubmit={updateProfile}>
                                            <CardContent className="space-y-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name" className="text-[#c7af6e]">Name</Label>
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        value={profileForm.data.name}
                                                        onChange={(e) => profileForm.setData('name', e.target.value)}
                                                        disabled={profileForm.processing}
                                                        className="bg-white/20 border-[#c7af6e] text-white placeholder:text-[#c7af6e]/70"
                                                    />
                                                    {profileForm.errors.name && <p className="text-sm text-red-500">{profileForm.errors.name}</p>}
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="email" className="text-[#c7af6e]">Email</Label>
                                                    <Input id="email" name="email" value={user.email} disabled className="bg-white/20 border-[#c7af6e] text-white" />
                                                    <p className="text-sm text-[#c7af6e]">Email cannot be changed</p>
                                                </div>
                                            </CardContent>

                                            <CardFooter>
                                                <Button type="submit" disabled={profileForm.processing || !profileForm.isDirty} className="ml-auto bg-[#c7af6e] text-[#004aad] hover:bg-white hover:text-[#004aad] border-none shadow-lg">
                                                    Save Changes
                                                </Button>
                                            </CardFooter>
                                        </form>
                                    </Card>
                                </TabsContent>

                                <TabsContent value="password">
                                    <Card className="bg-white/10 border-[#c7af6e] text-white">
                                        <CardHeader>
                                            <CardTitle>Change Password</CardTitle>
                                            <CardDescription className="text-[#c7af6e]">Ensure your account is using a long, random password to stay secure.</CardDescription>
                                        </CardHeader>

                                        <form onSubmit={updatePassword}>
                                            <CardContent className="space-y-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="current_password" className="text-[#c7af6e]">Current Password</Label>
                                                    <Input
                                                        id="current_password"
                                                        name="current_password"
                                                        type="password"
                                                        value={passwordForm.data.current_password}
                                                        onChange={(e) => passwordForm.setData('current_password', e.target.value)}
                                                        disabled={passwordForm.processing}
                                                        className="bg-white/20 border-[#c7af6e] text-white placeholder:text-[#c7af6e]/70"
                                                    />
                                                    {passwordForm.errors.current_password && (
                                                        <p className="text-sm text-red-500">{passwordForm.errors.current_password}</p>
                                                    )}
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="password" className="text-[#c7af6e]">New Password</Label>
                                                    <Input
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        value={passwordForm.data.password}
                                                        onChange={(e) => passwordForm.setData('password', e.target.value)}
                                                        disabled={passwordForm.processing}
                                                        className="bg-white/20 border-[#c7af6e] text-white placeholder:text-[#c7af6e]/70"
                                                    />
                                                    {passwordForm.errors.password && (
                                                        <p className="text-sm text-red-500">{passwordForm.errors.password}</p>
                                                    )}
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="password_confirmation" className="text-[#c7af6e]">Confirm Password</Label>
                                                    <Input
                                                        id="password_confirmation"
                                                        name="password_confirmation"
                                                        type="password"
                                                        value={passwordForm.data.password_confirmation}
                                                        onChange={(e) => passwordForm.setData('password_confirmation', e.target.value)}
                                                        disabled={passwordForm.processing}
                                                        className="bg-white/20 border-[#c7af6e] text-white placeholder:text-[#c7af6e]/70"
                                                    />
                                                </div>
                                            </CardContent>

                                            <CardFooter>
                                                <Button
                                                    type="submit"
                                                    disabled={
                                                        passwordForm.processing ||
                                                        !passwordForm.data.current_password ||
                                                        !passwordForm.data.password ||
                                                        !passwordForm.data.password_confirmation
                                                    }
                                                    className="ml-auto bg-[#c7af6e] text-[#004aad] hover:bg-white hover:text-[#004aad] border-none shadow-lg"
                                                >
                                                    Update Password
                                                </Button>
                                            </CardFooter>
                                        </form>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </main>
                </div>
            </div>
        </Background>
    );
}
