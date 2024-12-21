import BlogGrid from "@/components/blog-grid";
import { join } from "node:path";
import { routeMap } from "../../../../route-map";

export default function Page() {
    const routes = routeMap(
        join(process.cwd(), "src", "app", "blog"),
        "blog"
    ).sort(
        (a, b) =>
            new Date(a.metadata.creation_timestamp).getTime() -
            new Date(b.metadata.creation_timestamp).getTime()
    );

    return (
        <section className="@module:blogPageComponent::sectionContainer">
            <h1 className="@module:blogPageComponent::h1">Latest Posts</h1>
            <BlogGrid routes={routes} />
        </section>
    );
}
