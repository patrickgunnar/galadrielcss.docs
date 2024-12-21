"use client";

import Link from "next/link";
import { MetadataMDX } from "../../../../../route-map";
import { usePathname } from "next/navigation";

function AsideItem({
    title,
    url,
    pathname,
}: {
    url: string;
    title: string;
    pathname: string;
}) {
    return (
        <li
            className={`@module:docsSidebarComponent::asideItem ${
                pathname === url
                    ? "@module:docsSidebarComponent::selectedItem"
                    : ""
            }`}
        >
            <Link
                href={url}
                className="@class:unstyledLink @module:docsSidebarComponent::asideLink"
            >
                {title}
            </Link>
        </li>
    );
}

export default function DocsSidebar({ routes }: { routes: MetadataMDX[] }) {
    const pathname = usePathname();

    return (
        <aside className="@module:docsSidebarComponent::sidebarContainer">
            <ul className="@module:docsSidebarComponent::ulContainer">
                {routes.map(({ metadata }) => {
                    return (
                        <AsideItem
                            key={metadata.url}
                            url={metadata.url}
                            title={metadata.title}
                            pathname={pathname}
                        />
                    );
                })}
            </ul>
        </aside>
    );
}
