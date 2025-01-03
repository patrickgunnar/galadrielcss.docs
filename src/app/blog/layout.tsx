import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <main className="@layout:blogLayout::mainContainer">{children}</main>
    );
}
