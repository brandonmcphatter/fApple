import SmallContentSection from "@/components/UI/SmallContentSection";
import FeaturedSection from "@/components/UI/FeaturedSection";
import AppMarquee from "@/components/FeaturedContent/MarqueeSection/AppMarquee";
import AppleTVCarousel from "@/components/FeaturedContent/AppleTVSection/AppleTVCarousel";

export default function Home() {
    return (

            <main>
                <FeaturedSection />
                <SmallContentSection />
                <AppleTVCarousel />
                <AppMarquee />
            </main>

    );
}

