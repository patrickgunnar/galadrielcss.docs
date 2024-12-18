import CorePrinciples from "@/components/core-principles";
import CreatorVision from "@/components/creator-vision";
import TechStack from "@/components/tech-stack";

export default function Home() {
    return (
        <main className="@module:homePageComponent::mainContainer">
            <CorePrinciples />
            <CreatorVision />
            <TechStack />
        </main>
    );
}
