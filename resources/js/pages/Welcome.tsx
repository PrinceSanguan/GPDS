import { Head } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/landing/HeroSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import WhoItsForSection from '@/components/landing/WhoItsForSection';
import SystemKitsSection from '@/components/landing/SystemKitsSection';
import ProofSection from '@/components/landing/ProofSection';
import FinalCTASection from '@/components/landing/FinalCTASection';
import Background from '@/components/landing/Background';

export default function Welcome() {
    return (
        <>
            <Head title="GPDS - The Smart, Simple System Builder for Small Giants" />
            <Background>
                <Navbar currentRoute="/" />
                {/* Hero Section */}
                <HeroSection />
                {/* How It Works Section */}
                <HowItWorksSection />
                {/* Who It's For Section */}
                <WhoItsForSection />
                {/* System Kits Section */}
                <SystemKitsSection />
                {/* Proof/Results Section */}
                <ProofSection />
                {/* Final CTA Section */}
                <FinalCTASection />
                <Footer />
            </Background>
        </>
    );
}
