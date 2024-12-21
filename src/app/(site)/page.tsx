import BlogGrid from "@/components/blog-grid";
import Contribute from "@/components/contribute";
import CorePrinciples from "@/components/core-principles";
import CreatorVision from "@/components/creator-vision";
import PlannedFeatures from "@/components/planned-features";
import TechStack from "@/components/tech-stack";
import { routeMap } from "../../../route-map";
import { join } from "node:path";

export default function Home() {
    const routes = routeMap(
        join(process.cwd(), "src", "app", "blog"),
        "blog"
    ).sort(
        (a, b) =>
            new Date(a.metadata.creation_timestamp).getTime() -
            new Date(b.metadata.creation_timestamp).getTime()
    );

    return (
        <main className="@module:homePageComponent::mainContainer">
            <CorePrinciples />
            <CreatorVision />
            <TechStack />
            <PlannedFeatures />
            <div className="@module:homePageComponent::blogContentContainer">
                <h1 className="@module:homePageComponent::h1">Latests Posts</h1>
                <BlogGrid routes={routes} />
            </div>
            <Contribute />
        </main>
    );
}
