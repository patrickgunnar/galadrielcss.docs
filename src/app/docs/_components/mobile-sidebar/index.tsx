"use client";

import Link from "next/link";
import { MetadataMDX } from "../../../../../route-map";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { SlMenu } from "react-icons/sl";

function AsideItem({
    title,
    url,
    pathname,
    handleSelection,
}: {
    url: string;
    title: string;
    pathname: string;
    handleSelection: () => void;
}) {
    return (
        <li
            className={`@module:mobileDocsSidebarComponent::asideItem ${
                pathname === url
                    ? "@module:mobileDocsSidebarComponent::selectedItem"
                    : ""
            }`}
        >
            <Link
                href={url}
                className="@class:unstyledLink @module:mobileDocsSidebarComponent::asideLink"
                onClick={handleSelection}
            >
                {title}
            </Link>
        </li>
    );
}

export default function MobileDocsSidebar({
    routes,
}: {
    routes: MetadataMDX[];
}) {
    const pathname = usePathname();
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    function handleMenuOpen() {
        setIsMenuOpened((prev) => !prev);
    }

    function handleSelection() {
        setIsMenuOpened(false);
    }

    return (
        <aside className="@module:mobileDocsSidebarComponent::sidebarContainer">
            {isMenuOpened ? (
                <RiCloseLargeLine
                    className="@module:mobileDocsSidebarComponent::menuBtn"
                    onClick={handleMenuOpen}
                />
            ) : (
                <SlMenu
                    className="@module:mobileDocsSidebarComponent::menuBtn"
                    onClick={handleMenuOpen}
                />
            )}
            {isMenuOpened && (
                <ul className="@module:mobileDocsSidebarComponent::ulContainer">
                    {routes.map(({ metadata }) => {
                        return (
                            <AsideItem
                                key={metadata.url}
                                url={metadata.url}
                                title={metadata.title}
                                pathname={pathname}
                                handleSelection={handleSelection}
                            />
                        );
                    })}
                </ul>
            )}
        </aside>
    );
}
