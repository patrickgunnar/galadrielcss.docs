import { PropsWithChildren } from "react";
import { routeMap } from "../../../route-map";
import { join } from "node:path";
import DocsSidebar from "./_components/sidebar";
import MobileDocsSidebar from "./_components/mobile-sidebar";

export default function Layout({ children }: PropsWithChildren) {
    const routes = routeMap(
        join(process.cwd(), "src", "app", "docs"),
        "docs"
    ).sort((a, b) => a.metadata.order - b.metadata.order);

    return (
        <div className="@layout:docsLayout::docsLayoutContainer">
            <MobileDocsSidebar routes={routes} />
            <DocsSidebar routes={routes} />
            <main className="@layout:docsLayout::contentContainer">
                {children}
            </main>
        </div>
    );
}
