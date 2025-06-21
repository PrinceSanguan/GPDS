import  Hero  from '@/sections/Hero';
import  SystemKits  from '@/sections/SystemKits';
import  HowItWorks from '@/sections/HowItWorks';
import  Pricing  from '@/sections/Pricing';
import  Blog from '@/sections/Blog';
import  About from '@/sections/About';
import  FreeAuditButton from '@/components/ui/button';
import  Header  from '@/sections/Header';
import Footer from '@/sections/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <SystemKits />
            <HowItWorks />
            <Pricing />
            <Blog />
            <About />
            <div className="flex justify-center my-8">
                <FreeAuditButton>Free Audit</FreeAuditButton>
            </div>
            <Footer />
        </>
    );
}