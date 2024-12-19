import Link from "next/link";
import { ReactNode } from "react";
import { routeMap } from "../../../route-map";
import { join } from "node:path";

function AsideItem({ title, url }: { url: string; title: string }) {
    return (
        <li>
            <Link href={url}>{title}</Link>
        </li>
    );
}

export default function Layout({ children }: { children: ReactNode }) {
    const routes = routeMap(join(process.cwd(), "src", "app", "docs"), "docs");

    return (
        <div className="@layout:docsLayout::docsLayoutContainer">
            <aside className="@layout:docsLayout::sidebarContainer">
                <ul>
                    {routes.map(({ metadata }) => {
                        return (
                            <AsideItem
                                key={metadata.url}
                                url={metadata.url}
                                title={metadata.title}
                            />
                        );
                    })}
                </ul>
            </aside>
            <main className="@layout:docsLayout::contentContainer">
                {children}
            </main>
        </div>
    );
}
