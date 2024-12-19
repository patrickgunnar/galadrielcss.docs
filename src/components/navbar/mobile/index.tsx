"use client";

import { useState } from "react";
import { navbarOptions, NavbarOptionType } from "../data";
import { usePathname } from "next/navigation";
import { SlMenu } from "react-icons/sl";
import { RiCloseLargeLine } from "react-icons/ri";
import ReactDOM from "react-dom";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";

type NavbarItemType = {
    pathname: string;
    option: NavbarOptionType;
    handleSelection: () => void;
};

export function NavbarItem({
    pathname,
    option: { id, label, link, className },
    handleSelection,
}: NavbarItemType) {
    return (
        <li className="@module:mobileNavbarComponent::navbarOption">
            <div className={className[1]}></div>
            <Link
                href={link}
                onClick={handleSelection}
                className={`@class:unstyledLink @module:mobileNavbarComponent::navbarOptionLink ${
                    pathname == link
                        ? "@module:mobileNavbarComponent::navbarSelected"
                        : ""
                }`}
            >
                {id === "navbar-home-option" ? (
                    <IoHome className="@module:mobileNavbarComponent::optionIcon" />
                ) : id === "navbar-search-option" ? (
                    <BiSearch className="@module:mobileNavbarComponent::optionIcon" />
                ) : (
                    label
                )}
            </Link>
        </li>
    );
}

export default function MobileNavbar() {
    const pathname = usePathname();
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    function handleMenuOpen() {
        setIsMenuOpened((prev) => !prev);
    }

    function handleSelection() {
        setIsMenuOpened(false);
    }

    return (
        <>
            <nav className="@module:mobileNavbarComponent::navbarContainer">
                {isMenuOpened ? (
                    <RiCloseLargeLine
                        className="@module:mobileNavbarComponent::menuBtn"
                        onClick={handleMenuOpen}
                    />
                ) : (
                    <SlMenu
                        className="@module:mobileNavbarComponent::menuBtn"
                        onClick={handleMenuOpen}
                    />
                )}
                <Image
                    src="/img/Galadriel CSS Logo.png"
                    alt="Galadriel CSS Logo"
                    className="@module:mobileNavbarComponent::logoImage"
                    height={35}
                    width={35}
                />
            </nav>
            {isMenuOpened &&
                ReactDOM.createPortal(
                    <ul className="@module:mobileNavbarComponent::optionsContainer">
                        {navbarOptions.map((option) => {
                            return (
                                <NavbarItem
                                    key={option.id}
                                    pathname={pathname}
                                    option={option}
                                    handleSelection={handleSelection}
                                />
                            );
                        })}
                    </ul>,
                    document.body
                )}
        </>
    );
}
