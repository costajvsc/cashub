import { HeroSection } from "@/components/home/hero-section";
import { CtaSection } from "@/components/home/cta-section";
import { Banner } from "@/components/home/banner";
import { FeaturesSection } from "@/components/home/features-section";
import { Separator } from "@/components/ui/separator";
import { ResponsiveSection } from "@/components/home/responsive-section";
import { Footer } from "@/components/home/foooter";

export default function Home() {
    return (
        <>
            <HeroSection />
            <Banner />
            <CtaSection />
            <Separator />
            <FeaturesSection />
            <Separator />
            <ResponsiveSection />
            <Separator />
            <Footer />
        </>
    );
}
