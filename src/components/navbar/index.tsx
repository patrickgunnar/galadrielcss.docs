"use client";

import Link from "next/link";
import { navbarOptions, NavbarOptionType } from "./data";
import { IoHome } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { usePathname } from "next/navigation";
import GaladrielLogo from "../logo";
import { forwardRef, Ref } from "react";

type NavbarItemType = {
    pathname: string;
    option: NavbarOptionType;
};

function NavbarItem({
    pathname,
    option: { id, label, link, className },
}: NavbarItemType) {
    return (
        <li className="@module:navbarComponent::navbarOption">
            <Link
                href={link}
                className={`@class:unstyledLink @module:navbarComponent::navbarOptionLink ${
                    pathname == link
                        ? "@module:navbarComponent::navbarSelected"
                        : ""
                }`}
            >
                {id === "navbar-home-option" ? (
                    <IoHome className="@module:navbarComponent::optionIcon" />
                ) : id === "navbar-search-option" ? (
                    <BiSearch className="@module:navbarComponent::optionIcon" />
                ) : (
                    label
                )}
            </Link>
            <div className={className}></div>
        </li>
    );
}

function DesktopNavbar(
    { isSticked }: { isSticked: boolean },
    ref: Ref<HTMLElement>
) {
    const pathname = usePathname();

    return (
        <nav ref={ref} className="@module:navbarComponent::navbarContainer">
            <ul className="@module:navbarComponent::navbarOptions">
                {navbarOptions.map((option) => {
                    return (
                        <NavbarItem
                            key={option.id}
                            pathname={pathname}
                            option={option}
                        />
                    );
                })}
            </ul>
            {isSticked && <GaladrielLogo />}
        </nav>
    );
}

export const Navbar = forwardRef(DesktopNavbar);
