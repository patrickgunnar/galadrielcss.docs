import Link from "next/link";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Link href="/blog" className="@class:unstyledLink @class:btn">
                Return
            </Link>
            {children}
        </>
    );
}
