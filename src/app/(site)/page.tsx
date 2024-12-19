import Contribute from "@/components/contribute";
import CorePrinciples from "@/components/core-principles";
import CreatorVision from "@/components/creator-vision";
import PlannedFeatures from "@/components/planned-features";
import TechStack from "@/components/tech-stack";

export default function Home() {
    return (
        <main className="@module:homePageComponent::mainContainer">
            <CorePrinciples />
            <CreatorVision />
            <TechStack />
            <PlannedFeatures />
            <div className="@module:homePageComponent::blogContentContainer">
                BLOG CONTENT
            </div>
            <Contribute />
        </main>
    );
}
