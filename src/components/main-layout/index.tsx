"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";
import SocialMedia from "../social-media";
import Header from "../header";
import { Navbar } from "../navbar";
import Loading from "@/app/loading";
import MobileNavbar from "../navbar/mobile";
import Footer from "../footer";

export default function MainLayout({ children }: PropsWithChildren) {
    const desktopNavbarRef = useRef<HTMLElement | null>(null);
    const [isClientSide, setIsClientSide] = useState(false);
    const [isSticked, setIsSticked] = useState(false);

    useEffect(() => {
        if (window !== undefined) setIsClientSide(true);
    }, []);

    if (!isClientSide) return <Loading />;

    function handleScrollEvent() {
        if (desktopNavbarRef.current) {
            const desktopNavbarTop =
                desktopNavbarRef.current.getBoundingClientRect().top;

            if (desktopNavbarTop <= 0) setIsSticked(true);
            else setIsSticked(false);
        }
    }

    return (
        <div
            className="@module:mainLayoutComponent::childrenContainer"
            onScroll={handleScrollEvent}
        >
            <div className="@module:mainLayoutComponent::innerChildrenContainer">
                <MobileNavbar />
                <div className="@module:mainLayoutComponent::socialMediaContainer">
                    <SocialMedia />
                </div>
                <Header />
                <Navbar ref={desktopNavbarRef} isSticked={isSticked} />
                {children}
                <Footer />
            </div>
        </div>
    );
}
